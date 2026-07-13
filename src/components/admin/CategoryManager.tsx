'use client'

import { useState, useEffect } from 'react'
import { BlogCategory } from '@/types/blog'
import { getAllCategoriesClient, createCategoryClient, updateCategoryClient, deleteCategoryClient } from '@/lib/blog-client'
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaTag } from 'react-icons/fa'

interface CategoryManagerProps {
    onCategoryChange?: () => void
}

export default function CategoryManager({ onCategoryChange }: CategoryManagerProps) {
    const [categories, setCategories] = useState<BlogCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [editingCategory, setEditingCategory] = useState<BlogCategory | null>(null)
    const [newCategoryName, setNewCategoryName] = useState('')
    const [newCategoryDescription, setNewCategoryDescription] = useState('')
    const [isCreating, setIsCreating] = useState(false)

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        setLoading(true)
        setError(null)
        
        try {
            // Add timeout to prevent infinite loading
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Request timeout')), 10000)
            )
            
            const dataPromise = getAllCategoriesClient()
            const data = await Promise.race([dataPromise, timeoutPromise]) as BlogCategory[]
            
            setCategories(data)
        } catch (error) {
            console.error('Error fetching categories:', error)
            setError(error instanceof Error ? error.message : 'Failed to fetch categories')
            setCategories([])
        } finally {
            setLoading(false)
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
            onCategoryChange?.()
        }
    }

    const handleUpdateCategory = async () => {
        if (!editingCategory || !editingCategory.name.trim()) return

        const result = await updateCategoryClient(editingCategory.id, editingCategory.name.trim(), editingCategory.description?.trim())
        if (result) {
            setEditingCategory(null)
            fetchCategories()
            onCategoryChange?.()
        }
    }

    const handleDeleteCategory = async (id: string) => {
        if (!confirm('Are you sure you want to delete this category? This will remove it from all blog posts.')) {
            return
        }

        const result = await deleteCategoryClient(id)
        if (result) {
            fetchCategories()
            onCategoryChange?.()
        }
    }

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-3"></div>
                <p className="text-sm text-gray-600">Loading categories...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center py-8">
                <FaTag className="mx-auto text-4xl text-red-300 mb-3" />
                <p className="text-red-600 font-medium mb-2">Error loading categories</p>
                <p className="text-sm text-gray-600 mb-4">{error}</p>
                <button
                    onClick={fetchCategories}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Try Again
                </button>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <FaTag className="text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Blog Categories</h3>
                </div>
                <button
                    onClick={() => setIsCreating(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <FaPlus className="text-sm" />
                    Add Category
                </button>
            </div>

            {/* Create New Category */}
            {isCreating && (
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
            )}

            {/* Categories List */}
            {categories.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    <FaTag className="mx-auto text-4xl text-gray-300 mb-3" />
                    <p>No categories yet. Create your first category to get started.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {categories.map((category) => (
                        <div key={category.id} className="bg-white rounded-lg border border-gray-200 p-4">
                            {editingCategory?.id === category.id ? (
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        value={editingCategory.name}
                                        onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <textarea
                                        value={editingCategory.description || ''}
                                        onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                                        rows={2}
                                        placeholder="Description (optional)"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleUpdateCategory}
                                            disabled={!editingCategory.name.trim()}
                                            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <FaSave className="text-sm" />
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditingCategory(null)}
                                            className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                                        >
                                            <FaTimes className="text-sm" />
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h4 className="font-medium text-gray-900">{category.name}</h4>
                                        <p className="text-sm text-gray-600 mt-1">Slug: {category.slug}</p>
                                        {category.description && (
                                            <p className="text-sm text-gray-500 mt-2">{category.description}</p>
                                        )}
                                        <p className="text-xs text-gray-400 mt-2">
                                            Created: {new Date(category.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="flex gap-2 ml-4">
                                        <button
                                            onClick={() => setEditingCategory(category)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                                            title="Edit category"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteCategory(category.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                            title="Delete category"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
