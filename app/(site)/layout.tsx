import type React from "react"
import "@/styles/globals.css" // Tailwind & global styles
import Layout from "@/components/layout"

export const metadata = {
  title: "Moatez – Terminal Portfolio",
  description: "CTF write-ups, projects and more",
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  /* Re-use the existing Layout component everywhere */
  return <Layout>{children}</Layout>
}
