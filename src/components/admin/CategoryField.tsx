'use client'

import { useState, useEffect } from 'react'
import { BlogCategory } from '@/types/blog'
import { getAllCategoriesClient, createCategoryClient, deleteCategoryClient } from '@/lib/blog-client'
import { FaTag, FaPlus, FaSave, FaTimes, FaTrash } from 'react-icons/fa'

interface CategoryFieldProps {
    selectedCategories: BlogCategory[]
    onCategoriesChange: (categories: BlogCategory[]) => void
    postId?: string
}

export default function CategoryField({ selectedCategories, onCategoriesChange, postId }: CategoryFieldProps) {
    const [categories, setCategories] = useState<BlogCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [newCategoryName, setNewCategoryName] = useState('')
    const [newCategoryDescription, setNewCategoryDescription] = useState('')
    const [isCreating, setIsCreating] = useState(false)
    const [deletingCategory, setDeletingCategory] = useState<string | null>(null)

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        setLoading(true)
        try {
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Request timeout')), 10000)
            )
            
            const dataPromise = getAllCategoriesClient()
            const data = await Promise.race([dataPromise, timeoutPromise]) as BlogCategory[]
            
            setCategories(data)
        } catch (error) {
            console.error('Error fetching categories:', error)
            setCategories([])
        } finally {
            setLoading(false)
        }
    }

    const handleCategoryToggle = (category: BlogCategory) => {
        const isSelected = selectedCategories.some(cat => cat.id === category.id)
        
        if (isSelected) {
            const newSelection = selectedCategories.filter(cat => cat.id !== category.id)
            onCategoriesChange(newSelection)
        } else {
            const newSelection = [...selectedCategories, category]
            onCategoriesChange(newSelection)
        }
    }

    const removeCategory = (categoryId: string) => {
        const newSelection = selectedCategories.filter(cat => cat.id !== categoryId)
        onCategoriesChange(newSelection)
    }

    const handleDeleteCategory = async (categoryId: string, categoryName: string) => {
        if (!confirm(`Are you sure you want to delete the category "${categoryName}"?\n\nThis will also remove it from all blog posts that use it.`)) {
            return
        }

        setDeletingCategory(categoryId)
        
        try {
            const success = await deleteCategoryClient(categoryId)
            if (success) {
                // Remove from selected categories if it was selected
                const newSelection = selectedCategories.filter(cat => cat.id !== categoryId)
                onCategoriesChange(newSelection)
                
                // Refresh the categories list
                await fetchCategories()
            } else {
                alert('Failed to delete category. Please try again.')
            }
        } catch (error) {
            console.error('Error deleting category:', error)
            alert('An error occurred while deleting the category.')
        } finally {
            setDeletingCategory(null)
        }
    }

    const handleCreateCategory = async () => {
        if (!newCategoryName.trim()) return

        const result = await createCategoryClient(newCategoryName.trim(), newCategoryDescription.trim() || undefined)
        if (result) {
            setNewCategoryName('')
            setNewCategoryDescription('')
            setIsCreating(false)
            fetchCategories()
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {/* Selected Categories */}
            <div className="flex items-center gap-2">
                <FaTag className="text-blue-600" />
                <label className="block text-sm font-medium text-gray-700">
                    Categories
                </label>
            </div>

            {selectedCategories.length > 0 && (
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        {selectedCategories.map((category) => (
                            <span
                                key={category.id}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm group"
                            >
                                {category.name}
                                <button
                                    onClick={() => removeCategory(category.id)}
                                    className="w-4 h-4 flex items-center justify-center rounded-full bg-blue-200 hover:bg-blue-300 text-blue-600 hover:text-blue-800 transition-all duration-200"
                                    title={`Remove ${category.name} category`}
                                >
                                    <FaTimes className="text-xs" />
                                </button>
                            </span>
                        ))}
                    </div>
                    
                    {selectedCategories.length > 1 && (
                        <button
                            onClick={() => onCategoriesChange([])}
                            className="text-xs text-red-600 hover:text-red-700 transition-colors underline"
                        >
                            Clear all categories
                        </button>
                    )}
                </div>
            )}

            {/* Available Categories */}
            {categories.length > 0 ? (
                <div className="space-y-2">
                    <p className="text-xs text-gray-500">Click to add categories:</p>
                    <div className="grid grid-cols-2 gap-2">
                        {categories.map((category) => {
                            const isSelected = selectedCategories.some(cat => cat.id === category.id)
                            const isDeleting = deletingCategory === category.id
                            return (
                                <div
                                    key={category.id}
                                    className={`flex items-center justify-between px-3 py-2 text-sm rounded-md border transition-all ${
                                        isSelected
                                            ? 'bg-blue-100 border-blue-300 text-blue-700'
                                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                                    }`}
                                >
                                    <button
                                        onClick={() => handleCategoryToggle(category)}
                                        disabled={isSelected || isDeleting}
                                        className="flex-1 text-left disabled:cursor-not-allowed"
                                    >
                                        {category.name}
                                    </button>
                                    {!isSelected && (
                                        <button
                                            onClick={() => handleDeleteCategory(category.id, category.name)}
                                            disabled={isDeleting}
                                            className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 transition-all duration-200 disabled:opacity-50"
                                            title={`Delete ${category.name} category`}
                                        >
                                            {isDeleting ? (
                                                <div className="w-3 h-3 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <FaTrash className="text-xs" />
                                            )}
                                        </button>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className="text-center py-4 text-gray-500 text-sm">
                    <FaTag className="mx-auto text-2xl text-gray-300 mb-2" />
                    <p>No categories available.</p>
                    <p className="text-xs mt-1">Create categories below to get started.</p>
                </div>
            )}

            {/* Category Creation Section */}
            <div className="border-t pt-4">
                <div className="space-y-4">
                    {/* Create New Category */}
                    {isCreating ? (
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                            <h4 className="font-medium text-gray-900 mb-3">Create New Category</h4>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="Category name"
                                    value={newCategoryName}
                                    onChange={(e) => setNewCategoryName(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    placeholder="Description (optional)"
                                    value={newCategoryDescription}
                                    onChange={(e) => setNewCategoryDescription(e.target.value)}
                                    rows={2}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleCreateCategory}
                                        disabled={!newCategoryName.trim()}
                                        className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <FaSave className="text-sm" />
                                        Create
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsCreating(false)
                                            setNewCategoryName('')
                                            setNewCategoryDescription('')
                                        }}
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                                    >
                                        <FaTimes className="text-sm" />
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsCreating(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <FaPlus className="text-sm" />
                            Add New Category
                        </button>
                    )}
                </div>
            </div>

            {selectedCategories.length === 0 && (
                <p className="text-xs text-gray-400">
                    Select categories to help organize your blog post.
                </p>
            )}
        </div>
    )
}
