# Supabase Blog Integration - Setup Guide

This guide will help you set up Supabase for your blog system.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Your project's environment variables configured

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Fill in the project details:
   - **Name**: Allied Restoration Blog (or your preferred name)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to your users
4. Click "Create new project" and wait for it to initialize (~2 minutes)

## Step 2: Get Your Supabase Credentials

1. In your Supabase project dashboard, click on the **Settings** icon (gear icon) in the sidebar
2. Click on **API** in the settings menu
3. You'll see two important values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")
4. Copy these values - you'll need them for your `.env` file

## Step 3: Update Your Environment Variables

1. Open your `.env` file (create one if it doesn't exist by copying `.env.example`)
2. Add the following variables with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace the values with the ones you copied from step 2.

## Step 4: Run the Database Schema

1. In your Supabase project dashboard, click on the **SQL Editor** icon in the sidebar
2. Click "New query"
3. Open the `supabase-schema.sql` file in your project root
4. Copy the entire contents of the file
5. Paste it into the SQL Editor in Supabase
6. Click "Run" to execute the schema

This will create:
- `blog_posts` table
- `blog_categories` table
- `blog_post_categories` junction table
- Row Level Security (RLS) policies
- Indexes for performance
- Default categories

## Step 5: Create Your Admin User

1. In your Supabase project dashboard, click on **Authentication** in the sidebar
2. Click on **Users** tab
3. Click "Add user" → "Create new user"
4. Fill in:
   - **Email**: Your admin email (e.g., admin@yourcompany.com)
   - **Password**: Create a strong password
   - **Auto Confirm User**: Check this box
5. Click "Create user"

## Step 6: Test Your Setup

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to `http://localhost:3000/admin/login`

3. Log in with the admin credentials you created in Step 5

4. You should be redirected to `/admin/blog` where you can manage blog posts

## Step 7: Create Your First Blog Post

1. In the admin dashboard, click "Create New Post"
2. Fill in the blog post details:
   - Title
   - Excerpt
   - Content (use the rich text editor)
   - Featured image URL (optional)
   - Tags (optional)
3. Check "Publish this post" if you want it to be visible immediately
4. Click "Create Post"

5. View your blog at `http://localhost:3000/blog`

## Features Included

### Admin Features
- ✅ Secure authentication with Supabase Auth
- ✅ Create, edit, and delete blog posts
- ✅ Rich text editor with formatting, images, and links
- ✅ Draft and publish functionality
- ✅ SEO metadata fields
- ✅ Auto-generated URL slugs
- ✅ Featured images
- ✅ Tags support
- ✅ Read time calculation

### Public Features
- ✅ Blog listing page with grid layout
- ✅ Individual blog post pages
- ✅ Related posts section
- ✅ SEO-optimized with metadata
- ✅ Responsive design
- ✅ Static generation for performance

## Security Notes

### Row Level Security (RLS)
The database schema includes RLS policies that:
- Allow **anyone** to read published blog posts
- Require **authentication** to create, update, or delete posts
- This ensures your blog is secure while being publicly accessible

### Environment Variables
- Never commit your `.env` file to version control
- The `.env.example` file is provided as a template
- Keep your Supabase credentials secure

## Customization

### Styling
All components use Tailwind CSS and can be customized by editing the respective component files.

### Rich Text Editor
The editor is built with Tiptap and supports:
- Bold, italic, underline, strikethrough
- Headings (H2, H3)
- Bullet and numbered lists
- Text alignment
- Blockquotes and code blocks
- Images and links
- Undo/redo

You can extend it by adding more Tiptap extensions in `src/components/RichTextEditor.tsx`.

### Blog Categories
Default categories are created automatically. You can:
- Add more categories in the SQL schema
- Create a UI to manage categories (future enhancement)
- Use categories to filter blog posts (future enhancement)

## Troubleshooting

### "User not authenticated" error
- Make sure you're logged in at `/admin/login`
- Check that your Supabase credentials are correct in `.env`
- Verify the user exists in Supabase Authentication

### Database connection errors
- Verify your `NEXT_PUBLIC_SUPABASE_URL` is correct
- Check that your `NEXT_PUBLIC_SUPABASE_ANON_KEY` is the anon public key, not the service role key
- Ensure the database schema was run successfully

### Blog posts not showing
- Verify the post is marked as "published"
- Check the `published_at` date is set
- Look for errors in the browser console or server logs

## Next Steps

1. **Add blog link to navigation**: Update your `Navbar.tsx` to include a link to `/blog`
2. **Customize styling**: Match the blog pages to your site's design
3. **Add more features**: Consider adding:
   - Blog categories filtering
   - Search functionality
   - Comments system
   - Social sharing buttons
   - Newsletter signup

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check the server logs in your terminal
3. Verify all environment variables are set correctly
4. Ensure the database schema was executed successfully in Supabase

---

**Congratulations!** Your blog system is now set up and ready to use. 🎉
