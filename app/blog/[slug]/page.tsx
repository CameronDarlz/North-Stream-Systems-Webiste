import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Post Not Found | North Stream Systems Blog',
  description: 'This blog post could not be found.',
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Post not found</h1>
          <p className="text-[#374151] mb-8">This article doesn&apos;t exist yet — check back soon.</p>
          <Link href="/blog" className="text-accent hover:underline font-medium">← Back to Blog</Link>
        </div>
      </section>
    </div>
  )
}
