'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

interface AdminLoginClientProps {
    landingPageData: {
        themeData?: {
            primaryColor?: string
            secondaryColor?: string
        }
    }
}

export default function AdminLoginClient({ landingPageData }: AdminLoginClientProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()

    const primaryColor = landingPageData?.themeData?.primaryColor || '#0B1C2D'
    const secondaryColor = landingPageData?.themeData?.secondaryColor || '#1a3a5c'

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const supabase = createClient()

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            console.error('Login error:', error)
            setError(error.message)
            setLoading(false)
        } else {
            router.push('/admin/blog')
            router.refresh()
        }
    }

    return (
        <div 
            className="min-h-screen bg-white"
            style={{ fontFamily: 'var(--font-open-sans), sans-serif' }}
        >
            {/* Split Layout - Similar to Blog Detail */}
            <main className="min-h-screen flex flex-col lg:flex-row">
                {/* Left Sidebar - Theme Primary Color */}
                <aside 
                    className="w-full lg:w-[40%] lg:min-w-[400px] lg:max-w-[500px] text-white flex flex-col"
                    style={{ backgroundColor: primaryColor }}
                >
                    {/* Sidebar Content */}
                    <div className="flex-1 flex flex-col px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-12 justify-center">
                        {/* Admin Label */}
                        <div className="mb-12">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-medium">
                                    Admin
                                </span>
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-4">
                                Control Panel
                            </h1>
                            <p className="text-sm text-white/70 leading-relaxed">
                                Secure access to manage your blog content and website
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                                <span className="text-xs text-white/60">Blog Management</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                                <span className="text-xs text-white/60">Content Creation</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                                <span className="text-xs text-white/60">Media Library</span>
                            </div>
                        </div>

                        {/* Back Link */}
                        <div className="mt-auto">
                            <Link 
                                href="/" 
                                className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors"
                            >
                                ← Back to website
                            </Link>
                        </div>
                    </div>

                    {/* Scroll Indicator - Desktop Only */}
                    <div className="hidden lg:flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4 sm:py-6 border-t border-white/10">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 rotate-90 origin-left">
                            Secure
                        </span>
                        <div className="flex flex-col items-center gap-1">
                            <span className="w-px h-4 bg-white/20" />
                            <span className="w-px h-4 bg-white/50" />
                        </div>
                    </div>
                </aside>

                {/* Right Content Area - White */}
                <section className="flex-1 bg-white">
                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-20 py-6 sm:py-8">
                        <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                            Authentication
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-black/40">
                            Admin
                        </span>
                    </div>

                    {/* Login Form */}
                    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-20">
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-8">
                            <h1 className="text-2xl font-bold mb-2" style={{ color: primaryColor }}>Admin Login</h1>
                            <p className="text-gray-600 text-sm">Sign in to manage your blog</p>
                        </div>

                        {/* Category Label */}
                        <div className="mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-black/40 font-medium">
                                Authentication
                            </span>
                        </div>

                        {/* Title */}
                        <header className="mb-10" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                            <h2 
                                className="text-3xl lg:text-4xl font-bold leading-tight mb-4"
                                style={{ color: primaryColor }}
                            >
                                Welcome Back
                            </h2>
                            <p className="text-lg text-black/70 leading-relaxed">
                                Enter your credentials to access the admin panel
                            </p>
                        </header>

                        {/* Login Form */}
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: secondaryColor }}>
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:border-transparent transition-all text-sm focus:ring-opacity-50 placeholder-gray-900 text-gray-900"
                                    style={{ 
                                        borderColor: `${primaryColor}20`
                                    }}
                                    placeholder="admin@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2" style={{ color: secondaryColor }}>
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:border-transparent transition-all text-sm focus:ring-opacity-50 placeholder-gray-900 text-gray-900"
                                    style={{ 
                                        borderColor: `${primaryColor}20`
                                    }}
                                    placeholder="••••••••"
                                />
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 rounded-lg transition-all font-semibold text-sm relative overflow-hidden group"
                                style={{
                                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                                    color: 'white',
                                    boxShadow: `0 4px 15px ${primaryColor}25`
                                }}
                            >
                                <span className="relative z-10">
                                    {loading ? 'Signing in...' : 'Sign In'}
                                </span>
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                    style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                                ></div>
                            </button>
                        </form>

                        {/* Mobile Back Link */}
                        <div className="lg:hidden mt-8 text-center">
                            <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
                                ← Back to website
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            </div>
    )
}
