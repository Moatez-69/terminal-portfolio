"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface CVEDetails {
  score: number
  vector: string
}

interface References {
  data: string[]
  providers: string[]
}

interface Vulnerability {
  id: string
  title: string
  description: string
  severity: string
  cvssScore: number
  attackVector: string
  published: string
  status: string
  lastModified: string
  vendors: string[]
  products: string[]
  cvssDetails: CVEDetails
  references: References
  weaknesses: string[]
  changes: any[]
  versionEndExcluding: string | null
}

export default function VulnerabilityDetailPage({ params }: { params: { id: string } }) {
  const [vulnerability, setVulnerability] = useState<Vulnerability | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVulnerability = async () => {
      try {
        setLoading(true)
        // Replace with your actual API endpoint
        const response = await fetch(`/api/vulnerabilities/${params.id}`)
        if (!response.ok) {
          throw new Error("Failed to fetch vulnerability data")
        }
        const data = await response.json()
        setVulnerability(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchVulnerability()
  }, [params.id])

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "text-red-500"
      case "high":
        return "text-orange-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  const getCVSSColor = (score: number) => {
    if (score >= 9.0) return "text-red-500"
    if (score >= 7.0) return "text-orange-500"
    if (score >= 4.0) return "text-yellow-500"
    return "text-green-500"
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="terminal:text-terminal-accent light:text-light-accent font-mono text-lg mb-4">
            $ curl -s /api/vulnerabilities/{params.id}
          </div>
          <p className="terminal:text-terminal-text light:text-light-text opacity-60">
            Loading vulnerability details...
          </p>
        </div>
      </div>
    )
  }

  if (error || !vulnerability) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <div className="text-red-500 font-mono text-lg mb-4">
            $ echo "Error: {error || "Vulnerability not found"}"
          </div>
          <Link
            href="/vulnerabilities"
            className="terminal:text-terminal-accent light:text-light-accent hover:underline font-mono"
          >
            $ cd ../vulnerabilities
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/vulnerabilities"
          className="inline-flex items-center terminal:text-terminal-accent light:text-light-accent hover:underline font-mono text-sm mb-4"
        >
          ← $ cd ../vulnerabilities
        </Link>

        <header className="border-b terminal:border-terminal-accent/30 light:border-gray-300 pb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl md:text-4xl font-bold terminal:text-terminal-text light:text-light-text font-mono">
              {vulnerability.id}
            </h1>
            <span
              className={`text-lg font-bold font-mono px-3 py-1 rounded ${getSeverityColor(vulnerability.severity)}`}
            >
              {vulnerability.severity.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm font-mono">
            <span className="terminal:text-terminal-accent light:text-light-accent">
              Published: {vulnerability.published}
            </span>
            <span className="terminal:text-terminal-accent light:text-light-accent">
              Modified: {vulnerability.lastModified}
            </span>
            <span className="terminal:text-terminal-text light:text-light-text opacity-60">
              Status: {vulnerability.status}
            </span>
          </div>
        </header>
      </div>

      {/* Description */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 terminal:text-terminal-accent light:text-light-accent font-mono">
          $ cat description.txt
        </h2>
        <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-6 terminal:bg-terminal-accent/5 light:bg-gray-50">
          <p className="terminal:text-terminal-text light:text-light-text leading-relaxed">
            {vulnerability.description}
          </p>
        </div>
      </section>

      {/* CVSS Scores */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 terminal:text-terminal-accent light:text-light-accent font-mono">
          $ cat cvss_scores.txt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* CVSS 3.1 Score */}
          <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-4">
            <h3 className="font-bold terminal:text-terminal-text light:text-light-text font-mono mb-2">CVSS 3.1</h3>
            <div className={`text-2xl font-bold font-mono ${getCVSSColor(vulnerability.cvssDetails.score)}`}>
              {vulnerability.cvssDetails.score}/10
            </div>
            <p className="text-sm terminal:text-terminal-text light:text-light-text opacity-70 font-mono mt-1">
              {vulnerability.cvssDetails.vector}
            </p>
          </div>

          {/* CVSS 2.0 Score (if available) */}
          <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-4">
            <h3 className="font-bold terminal:text-terminal-text light:text-light-text font-mono mb-2">CVSS 2.0</h3>
            <div className="text-2xl font-bold font-mono text-gray-400">N/A</div>
            <p className="text-sm terminal:text-terminal-text light:text-light-text opacity-70 font-mono mt-1">
              Not available
            </p>
          </div>

          {/* CVSS 4.0 Score (if available) */}
          <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-4">
            <h3 className="font-bold terminal:text-terminal-text light:text-light-text font-mono mb-2">CVSS 4.0</h3>
            <div className="text-2xl font-bold font-mono text-gray-400">N/A</div>
            <p className="text-sm terminal:text-terminal-text light:text-light-text opacity-70 font-mono mt-1">
              Not available
            </p>
          </div>
        </div>
      </section>

      {/* Attack Vector & Products */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 terminal:text-terminal-accent light:text-light-accent font-mono">
          $ cat details.txt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-4">
            <h3 className="font-bold terminal:text-terminal-text light:text-light-text font-mono mb-3">
              Attack Vector
            </h3>
            <span className="terminal:text-terminal-accent light:text-light-accent font-mono">
              {vulnerability.attackVector}
            </span>
          </div>

          <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-4">
            <h3 className="font-bold terminal:text-terminal-text light:text-light-text font-mono mb-3">
              Affected Products
            </h3>
            <div className="flex flex-wrap gap-2">
              {vulnerability.products.map((product, index) => (
                <span
                  key={index}
                  className="text-xs font-mono px-2 py-1 terminal:bg-terminal-accent/10 light:bg-gray-100 terminal:text-terminal-accent light:text-light-accent rounded"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weaknesses */}
      {vulnerability.weaknesses && vulnerability.weaknesses.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 terminal:text-terminal-accent light:text-light-accent font-mono">
            $ cat weaknesses.txt
          </h2>
          <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-4">
            <div className="flex flex-wrap gap-2">
              {vulnerability.weaknesses.map((weakness, index) => (
                <span
                  key={index}
                  className="text-xs font-mono px-2 py-1 terminal:bg-red-500/10 light:bg-red-100 text-red-600 rounded"
                >
                  {weakness}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* References */}
      {vulnerability.references && vulnerability.references.data && vulnerability.references.data.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 terminal:text-terminal-accent light:text-light-accent font-mono">
            $ cat references.txt
          </h2>
          <div className="border terminal:border-terminal-accent/30 light:border-gray-300 rounded-lg p-4">
            <div className="space-y-3">
              {vulnerability.references.data.map((reference, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="terminal:text-terminal-accent light:text-light-accent font-mono text-sm">
                    [{index + 1}]
                  </span>
                  <a
                    href={reference}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal:text-terminal-accent light:text-light-accent hover:underline font-mono text-sm break-all"
                  >
                    {reference}
                  </a>
                </div>
              ))}
            </div>

            {vulnerability.references.providers && vulnerability.references.providers.length > 0 && (
              <div className="mt-4 pt-4 border-t terminal:border-terminal-accent/20 light:border-gray-200">
                <p className="text-sm terminal:text-terminal-text light:text-light-text opacity-70 font-mono">
                  Sources: {vulnerability.references.providers.join(", ")}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="mt-12 pt-8 border-t terminal:border-terminal-accent/30 light:border-gray-300">
        <div className="text-center font-mono terminal:text-terminal-text light:text-light-text opacity-70">
          <p className="mb-2">$ echo "Vulnerability data provided by CVE APIs"</p>
          <p>Last updated: {vulnerability.lastModified}</p>
        </div>
      </div>
    </div>
  )
}
