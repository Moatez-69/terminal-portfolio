import type React from "react"
import Navbar from "./navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 font-mono terminal:bg-terminal-bg terminal:text-terminal-text blue:bg-bluef-bg blue:text-bluef-text light:bg-light-bg light:text-light-text">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
      <footer className="text-center py-8 text-xs opacity-60 border-t terminal:border-terminal-accent/10 light:border-gray-200">
        &copy; {new Date().getFullYear()} Moatez. Built for security researchers.
      </footer>
    </div>
  )
}
