import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Ankhbayr',
  description: 'Technical articles, tutorials, and insights on web development',
}

// TODO: Replace with actual blog posts (can integrate with CMS like Contentful, or use MDX)
const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Next.js Applications',
    excerpt: 'Best practices and patterns for building production-ready Next.js apps that scale.',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'building-scalable-nextjs-applications',
    tags: ['Next.js', 'React', 'Architecture'],
  },
  {
    id: 2,
    title: 'TypeScript Tips for Better Code Quality',
    excerpt: 'Advanced TypeScript patterns and techniques to write safer, more maintainable code.',
    date: '2024-01-08',
    readTime: '6 min read',
    slug: 'typescript-tips-better-code-quality',
    tags: ['TypeScript', 'Best Practices'],
  },
  {
    id: 3,
    title: 'Optimizing PostgreSQL Performance',
    excerpt: 'Database optimization techniques that improved our query performance by 10x.',
    date: '2023-12-20',
    readTime: '10 min read',
    slug: 'optimizing-postgresql-performance',
    tags: ['PostgreSQL', 'Performance', 'Backend'],
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Blog & Articles
          </h1>
          <p className="text-gray-400 text-lg">
            Thoughts on web development, best practices, and lessons learned
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="card group hover:scale-[1.02] transition-transform">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-2">
                  {post.title}
                </h2>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-neon-cyan/10 border border-neon-cyan/30 rounded-full text-neon-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Empty State / Coming Soon */}
        <div className="card mt-12 text-center bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5">
          <p className="text-gray-400">
            📝 More articles coming soon! Currently focused on building great projects.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            To add blog functionality, integrate with a CMS like Contentful, or use MDX files.
          </p>
        </div>
      </div>
    </div>
  )
}

