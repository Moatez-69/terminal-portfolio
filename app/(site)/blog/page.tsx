import Link from "next/link"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogPage() {
  const allPosts = getSortedPostsData()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-terminal-accent dark:text-bluef-accent light:text-light-accent font-mono">
          $ ls blog/
        </h1>
        <p className="text-terminal-text dark:text-bluef-text light:text-light-text opacity-80 font-mono">
          CTF writeups, security research, and technical insights
        </p>
      </div>

      {allPosts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-terminal-accent dark:text-bluef-accent light:text-light-accent font-mono text-lg mb-4">
            $ find . -name "*.md" -type f
          </div>
          <p className="text-terminal-text dark:text-bluef-text light:text-light-text opacity-60">
            No posts found. Check back soon for CTF writeups!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {allPosts.map(({ slug, date, title }) => (
            <article
              key={slug}
              className="border border-terminal-accent dark:border-bluef-accent light:border-gray-300 rounded-lg p-6 hover:bg-terminal-accent/5 dark:hover:bg-bluef-accent/5 light:hover:bg-gray-50 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold text-terminal-text dark:text-bluef-text light:text-light-text font-mono">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:text-terminal-accent dark:hover:text-bluef-accent light:hover:text-light-accent transition-colors"
                  >
                    {title}
                  </Link>
                </h2>
                <time className="text-sm text-terminal-accent dark:text-bluef-accent light:text-light-accent font-mono opacity-80">
                  {date}
                </time>
              </div>

              <div className="flex items-center gap-4 text-sm font-mono">
                <Link
                  href={`/blog/${slug}`}
                  className="text-terminal-accent dark:text-bluef-accent light:text-light-accent hover:underline"
                >
                  $ cat {slug}.md
                </Link>
                <span className="text-terminal-text dark:text-bluef-text light:text-light-text opacity-60">
                  • CTF Writeup
                </span>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-terminal-accent/30 dark:border-bluef-accent/30 light:border-gray-300">
        <div className="text-center font-mono text-terminal-text dark:text-bluef-text light:text-light-text opacity-70">
          <p className="mb-2">$ echo "Want to see more content?"</p>
          <p>
            Follow me on{" "}
            <a
              href="https://github.com/Moatez-69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terminal-accent dark:text-bluef-accent light:text-light-accent hover:underline"
            >
              GitHub
            </a>{" "}
            for updates
          </p>
        </div>
      </div>
    </div>
  )
}
