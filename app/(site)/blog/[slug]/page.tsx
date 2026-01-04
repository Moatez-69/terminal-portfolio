import { getPostData, getSortedPostsData } from "@/lib/posts"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPostData(params.slug)

  if (!post) {
    notFound()
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight, { detect: true, ignoreMissing: true })
    .use(rehypeStringify)
    .process(post.content)

  const contentHtml = String(file)

  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12 border-b terminal:border-terminal-accent/20 light:border-gray-100 pb-12">
        <Link
          href="/blog"
          className="inline-flex items-center terminal:text-terminal-accent light:text-light-accent hover:underline font-mono text-xs mb-8 uppercase tracking-widest transition-colors"
        >
          [ back to entries ]
        </Link>

        <header className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold terminal:text-terminal-text light:text-light-text font-mono leading-tight tracking-tighter">
            {post.title.replace(/^#\s*/, "")}
          </h1>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono opacity-70 uppercase tracking-wider">
            <div className="flex items-center gap-2 terminal:text-terminal-accent light:text-light-accent">
              <span>$ date:</span>
              <time>{post.date}</time>
            </div>
            <div className="flex items-center gap-2 terminal:text-terminal-text light:text-light-text">
              <span>$ read_time:</span>
              <span>{readingTime} min</span>
            </div>
            <span className="terminal:text-terminal-text light:text-light-text opacity-50">• CTF Writeup</span>
          </div>
        </header>
      </div>

      {/* Content */}
      <article className="prose prose-invert light:prose-slate max-w-none">
        <div
          className="terminal:text-terminal-text light:text-light-text selection:bg-terminal-accent/30"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* Footer */}
      <footer className="mt-20 pt-10 border-t terminal:border-terminal-accent/20 light:border-gray-200">
        <div className="flex items-center justify-between font-mono text-sm">
          <Link
            href="/blog"
            className="terminal:text-terminal-accent light:text-light-accent hover:underline px-4 py-2 border border-transparent hover:border-current rounded transition-all"
          >
            ← Back to all posts
          </Link>

          <div className="terminal:text-terminal-text light:text-light-text opacity-40 italic">$ end_of_file</div>
        </div>
      </footer>
    </div>
  )
}
