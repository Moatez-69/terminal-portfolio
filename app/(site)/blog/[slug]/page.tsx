import { getPostData, getSortedPostsData } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline font-mono text-sm mb-4"
        >
          ← $ cd ../blog
        </Link>

        <header className="border-b terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm font-mono">
            <time className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent">
              $ date: {post.date}
            </time>
            <span className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-60">
              • CTF Writeup
            </span>
          </div>
        </header>
      </div>

      {/* Content */}
      <article className="prose prose-lg blue:prose-invert light:prose-slate max-w-none">
        <div
          className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300">
        <div className="flex items-center justify-between font-mono text-sm">
          <Link
            href="/blog"
            className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
          >
            ← Back to all posts
          </Link>

          <div className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-60">
            $ EOF
          </div>
        </div>
      </footer>
    </div>
  );
}
