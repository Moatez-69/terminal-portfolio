import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');var html=document.documentElement;html.classList.remove('dark','light','terminal','blue');if(t==='terminal'){html.classList.add('dark','terminal');}else if(t==='light'){html.classList.add('light');}}catch(e){} })()",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
