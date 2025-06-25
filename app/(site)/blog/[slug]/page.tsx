import { getPostData, getSortedPostsData } from "@/lib/posts"
import { remark } from "remark"
import html from "remark-html"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  if (!post) {
    notFound()
  }

  const processedContent = await remark().use(html).process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-terminal-accent dark:text-bluef-accent light:text-light-accent hover:underline font-mono text-sm mb-4"
        >
          ← $ cd ../blog
        </Link>

        <header className="border-b border-terminal-accent/30 dark:border-bluef-accent/30 light:border-gray-300 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-terminal-text dark:text-bluef-text light:text-light-text font-mono mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm font-mono">
            <time className="text-terminal-accent dark:text-bluef-accent light:text-light-accent">
              $ date: {post.date}
            </time>
            <span className="text-terminal-text dark:text-bluef-text light:text-light-text opacity-60">
              • CTF Writeup
            </span>
          </div>
        </header>
      </div>

      {/* Content */}
      <article className="prose prose-lg dark:prose-invert light:prose-slate max-w-none">
        <div
          className="text-terminal-text dark:text-bluef-text light:text-light-text"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-terminal-accent/30 dark:border-bluef-accent/30 light:border-gray-300">
        <div className="flex items-center justify-between font-mono text-sm">
          <Link
            href="/blog"
            className="text-terminal-accent dark:text-bluef-accent light:text-light-accent hover:underline"
          >
            ← Back to all posts
          </Link>

          <div className="text-terminal-text dark:text-bluef-text light:text-light-text opacity-60">$ EOF</div>
        </div>
      </footer>
    </div>
  )
}
