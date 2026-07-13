'use client'

import { useState, useEffect } from 'react'
import { BlogCategory } from '@/types/blog'
import { getAllCategoriesClient, getPostCategoriesClient, setPostCategoriesClient } from '@/lib/blog-client'
import { FaTag, FaTimes } from 'react-icons/fa'

interface CategorySelectorProps {
    postId: string
    onCategoriesChange?: (categories: BlogCategory[]) => void
}

export default function CategorySelector({ postId, onCategoriesChange }: CategorySelectorProps) {
    const [categories, setCategories] = useState<BlogCategory[]>([])
    const [selectedCategories, setSelectedCategories] = useState<BlogCategory[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchCategories()
        fetchPostCategories()
    }, [postId])

    const fetchCategories = async () => {
        const data = await getAllCategoriesClient()
        setCategories(data)
    }

    const fetchPostCategories = async () => {
        if (!postId) return
        setLoading(true)
        const data = await getPostCategoriesClient(postId)
        setSelectedCategories(data)
        setLoading(false)
    }

    const handleCategoryToggle = (category: BlogCategory) => {
        const isSelected = selectedCategories.some(cat => cat.id === category.id)
        
        if (isSelected) {
            const newSelection = selectedCategories.filter(cat => cat.id !== category.id)
            setSelectedCategories(newSelection)
            updatePostCategories(newSelection)
        } else {
            const newSelection = [...selectedCategories, category]
            setSelectedCategories(newSelection)
            updatePostCategories(newSelection)
        }
    }

    const updatePostCategories = async (categories: BlogCategory[]) => {
        if (!postId) return
        
        const categoryIds = categories.map(cat => cat.id)
        const success = await setPostCategoriesClient(postId, categoryIds)
        
        if (success) {
            onCategoriesChange?.(categories)
        }
    }

    const removeCategory = (categoryId: string) => {
        const newSelection = selectedCategories.filter(cat => cat.id !== categoryId)
        setSelectedCategories(newSelection)
        updatePostCategories(newSelection)
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
            <div className="flex items-center gap-2">
                <FaTag className="text-blue-600" />
                <label className="block text-sm font-medium text-gray-700">
                    Categories
                </label>
            </div>

            {/* Selected Categories */}
            {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {selectedCategories.map((category) => (
                        <span
                            key={category.id}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                            {category.name}
                            <button
                                onClick={() => removeCategory(category.id)}
                                className="hover:text-blue-600 transition-colors"
                                title="Remove category"
                            >
                                <FaTimes className="text-xs" />
                            </button>
                        </span>
                    ))}
                </div>
            )}

            {/* Available Categories */}
            {categories.length > 0 ? (
                <div className="space-y-2">
                    <p className="text-xs text-gray-500">Click to add categories:</p>
                    <div className="grid grid-cols-2 gap-2">
                        {categories.map((category) => {
                            const isSelected = selectedCategories.some(cat => cat.id === category.id)
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategoryToggle(category)}
                                    disabled={isSelected}
                                    className={`px-3 py-2 text-sm rounded-md border transition-all ${
                                        isSelected
                                            ? 'bg-blue-100 border-blue-300 text-blue-700 cursor-not-allowed'
                                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
                                    }`}
                                >
                                    {category.name}
                                </button>
                            )
                        })}
                    </div>
                </div>
            ) : (
                <div className="text-center py-4 text-gray-500 text-sm">
                    <FaTag className="mx-auto text-2xl text-gray-300 mb-2" />
                    <p>No categories available.</p>
                    <p className="text-xs mt-1">Create categories in the Category Manager first.</p>
                </div>
            )}

            {selectedCategories.length === 0 && (
                <p className="text-xs text-gray-400">
                    Select categories to help organize your blog post.
                </p>
            )}
        </div>
    )
}
