"use client"

import type React from "react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual form handler
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded-lg p-8 terminal:bg-terminal-accent/5 blue:bg-bluef-accent/5 light:bg-gray-50">
          <div className="text-center font-mono">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-4 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent">
              $ message_sent.success
            </h2>
            <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text mb-6">
              Thanks for reaching out! I'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
            >
              ← $ send_another_message
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ contact --init
        </h1>
        <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80 font-mono">
          Got a question about CTFs, want to collaborate on a project, or just want to say hi?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
            $ nano message.txt
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded focus:outline-none focus:ring-2 terminal:focus:ring-terminal-accent blue:focus:ring-bluef-accent light:focus:ring-light-accent transition-colors font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-transparent border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded focus:outline-none focus:ring-2 terminal:focus:ring-terminal-accent blue:focus:ring-bluef-accent light:focus:ring-light-accent transition-colors font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2 font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-transparent border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded focus:outline-none focus:ring-2 terminal:focus:ring-terminal-accent blue:focus:ring-bluef-accent light:focus:ring-light-accent transition-colors font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-transparent border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded focus:outline-none focus:ring-2 terminal:focus:ring-terminal-accent blue:focus:ring-bluef-accent light:focus:ring-light-accent transition-colors resize-vertical font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 terminal:bg-terminal-accent blue:bg-bluef-accent light:bg-light-accent terminal:text-terminal-bg blue:text-bluef-bg light:text-white font-medium rounded hover:opacity-90 disabled:opacity-50 transition-all duration-200 font-mono"
            >
              {isSubmitting ? "$ sending..." : "$ send_message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
            $ cat contact_info.txt
          </h2>

          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4">
              <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-3">
                Quick Contact
              </h3>
              <div className="space-y-2 font-mono text-sm">
                <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80">
                  📧{" "}
                  <a
                    href="mailto:mootezmootez6@gmail.com"
                    className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
                  >
                    mootezmootez6@gmail.com
                  </a>
                </p>
                <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80">
                  📍 Ariana, Tunisia
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4">
              <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-3">
                Response Time
              </h3>
              <div className="font-mono text-sm terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80">
                <p>• Email: Usually within 24-48 hours</p>
                <p>• LinkedIn: Check messages regularly</p>
              </div>
            </div>

            {/* Availability */}
            <div className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4">
              <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-3">
                Availability
              </h3>
              <div className="font-mono text-sm terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80">
                <p>• Open to cybersecurity opportunities</p>
                <p>• Available for CTF collaborations</p>
                <p>• Interested in research projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
