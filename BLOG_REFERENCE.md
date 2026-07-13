# Blog System - Quick Reference

## 📁 File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.tsx              # Admin login page
│   │   └── blog/
│   │       ├── page.tsx               # Blog management dashboard
│   │       ├── BlogManagementClient.tsx  # Client component for blog list
│   │       ├── BlogPostForm.tsx       # Form for creating/editing posts
│   │       ├── new/
│   │       │   └── page.tsx           # Create new post page
│   │       └── edit/
│   │           └── [id]/
│   │               └── page.tsx       # Edit post page
│   └── blog/
│       ├── page.tsx                   # Public blog listing
│       └── [slug]/
│           └── page.tsx               # Individual blog post page
├── components/
│   └── RichTextEditor.tsx             # Tiptap rich text editor
├── lib/
│   ├── blog.ts                        # Blog service functions
│   └── supabase/
│       ├── client.ts                  # Browser Supabase client
│       ├── server.ts                  # Server Supabase client
│       └── middleware.ts              # Auth middleware
├── types/
│   └── blog.ts                        # TypeScript types
└── middleware.ts                      # Next.js middleware

supabase-schema.sql                    # Database schema
BLOG_SETUP.md                          # Detailed setup guide
```

## 🔑 Key URLs

- **Public Blog**: `/blog`
- **Individual Post**: `/blog/[slug]`
- **Admin Login**: `/admin/login`
- **Admin Dashboard**: `/admin/blog`
- **Create Post**: `/admin/blog/new`
- **Edit Post**: `/admin/blog/edit/[id]`

## 🚀 Quick Start

1. **Setup Supabase** (see BLOG_SETUP.md for details)
   - Create project
   - Run SQL schema
   - Create admin user
   - Add credentials to `.env`

2. **Environment Variables**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Start Development**
   ```bash
   pnpm dev
   ```

4. **Login & Create Posts**
   - Go to `/admin/login`
   - Login with admin credentials
   - Create your first blog post

## 📝 Blog Post Fields

- **Title** (required): Post title
- **Slug** (required): URL-friendly identifier
- **Excerpt** (required): Brief summary
- **Content** (required): Rich text content
- **Featured Image**: Image URL
- **Tags**: Comma-separated tags
- **Meta Title**: SEO title
- **Meta Description**: SEO description
- **Published**: Toggle to publish/unpublish

## 🎨 Rich Text Editor Features

- **Formatting**: Bold, italic, underline, strikethrough
- **Headings**: H2, H3
- **Lists**: Bullet and numbered lists
- **Alignment**: Left, center, right
- **Media**: Images and links
- **Blocks**: Blockquotes and code blocks
- **History**: Undo/redo

## 🔒 Security

- **Authentication**: Supabase Auth
- **Row Level Security**: Enabled on all tables
- **Public Access**: Only published posts
- **Admin Access**: Full CRUD operations
- **Protected Routes**: `/admin/*` requires authentication

## 🎯 Features

### Admin Features
✅ Create, edit, delete blog posts
✅ Rich text editor with formatting
✅ Draft and publish functionality
✅ SEO metadata fields
✅ Auto-generated slugs
✅ Featured images
✅ Tags support
✅ Read time calculation

### Public Features
✅ Blog listing page
✅ Individual post pages
✅ Related posts section
✅ SEO optimized
✅ Responsive design
✅ Static generation (ISR)

## 🛠️ Customization

### Styling
All components use Tailwind CSS. Customize in component files.

### Rich Text Editor
Extend in `src/components/RichTextEditor.tsx` by adding Tiptap extensions.

### Blog Service
Modify `src/lib/blog.ts` to add custom queries or features.

## 📊 Database Tables

- **blog_posts**: Main blog posts table
- **blog_categories**: Blog categories
- **blog_post_categories**: Many-to-many relationship

## 🔧 Common Tasks

### Add Blog Link to Navigation
Already added to `src/components/Navbar.tsx`

### Change Blog URL
Update routes in `src/app/blog/` directory

### Add Categories UI
Create new admin page to manage categories

### Add Search
Implement search in blog listing page

### Add Comments
Integrate third-party comment system (Disqus, etc.)

## 📚 Resources

- [Supabase Docs](https://supabase.com/docs)
- [Tiptap Docs](https://tiptap.dev)
- [Next.js Docs](https://nextjs.org/docs)

## 🐛 Troubleshooting

See BLOG_SETUP.md for detailed troubleshooting steps.

---

**Need help?** Check BLOG_SETUP.md for the complete setup guide.
