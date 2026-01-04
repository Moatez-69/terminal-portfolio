import Link from "next/link"
import ThemeToggle from "./themeToggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b terminal:border-terminal-accent/20 light:border-gray-200">
      <div className="flex items-center gap-8 font-mono">
        <Link
          href="/"
          className="text-xl font-bold terminal:text-terminal-accent light:text-light-accent hover:opacity-80 transition-opacity"
        >
          ~/3angour
        </Link>
        <div className="hidden md:flex gap-6">
          <Link
            href="/blog"
            className="terminal:hover:text-terminal-accent light:hover:text-light-accent transition-colors"
          >
            blog
          </Link>
          <Link
            href="/projects"
            className="terminal:hover:text-terminal-accent blue:hover:text-bluef-accent light:hover:text-light-accent"
          >
            projects
          </Link>
          <Link
            href="/about"
            className="terminal:hover:text-terminal-accent blue:hover:text-bluef-accent light:hover:text-light-accent"
          >
            about
          </Link>
          <Link
            href="/contact"
            className="terminal:hover:text-terminal-accent blue:hover:text-bluef-accent light:hover:text-light-accent"
          >
            contact
          </Link>
        </div>
      </div>
      <ThemeToggle />
    </nav>
  )
}
