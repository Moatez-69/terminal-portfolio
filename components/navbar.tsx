import Link from "next/link"
import ThemeToggle from "./themeToggle"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300">
      <div className="flex items-center gap-6 font-mono">
        <Link
          href="/"
          className="text-xl font-bold terminal:hover:text-terminal-accent blue:hover:text-bluef-accent light:hover:text-light-accent"
        >
          ~/3angour
        </Link>
        <Link
          href="/blog"
          className="terminal:hover:text-terminal-accent blue:hover:text-bluef-accent light:hover:text-light-accent"
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
      <ThemeToggle />
    </nav>
  )
}
