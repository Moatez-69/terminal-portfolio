import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <section className="text-center space-y-8 max-w-4xl mx-auto px-4">
        <div className="space-y-4">
          <div className="flex flex-col items-center mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 terminal:border-terminal-accent blue:border-bluef-accent light:border-light-accent mb-4 bg-gray-200 flex items-center justify-center">
              <img
                src="/avatar.png"
                alt="3angour"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a simple avatar if image fails
                  e.currentTarget.outerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl font-bold">
                      3
                    </div>
                  `
                }}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-mono">
              <span className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent">~/</span>
              <span className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text">3angour</span>
            </h1>
          </div>
          <div className="text-lg md:text-xl font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-90">
            <div className="mb-2">$ whoami</div>
            <div className="text-base opacity-80">
              Computer Science Student • CTF Champion • Cybersecurity Enthusiast
            </div>
          </div>
        </div>

        <div className="space-y-4 terminal:text-terminal-text blue:text-bluef-text light:text-light-text">
          <p className="text-lg opacity-90 font-mono">Welcome to my terminal. Navigate through my digital space:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Link
              href="/blog"
              className="p-4 border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded terminal:hover:bg-terminal-accent/10 blue:hover:bg-bluef-accent/10 light:hover:bg-gray-50 transition-all duration-200 group"
            >
              <div className="font-mono">
                <div className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-bold">
                  $ ls blog/
                </div>
                <div className="text-sm opacity-80 mt-2">CTF writeups & security insights</div>
              </div>
            </Link>

            <Link
              href="/projects"
              className="p-4 border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded terminal:hover:bg-terminal-accent/10 blue:hover:bg-bluef-accent/10 light:hover:bg-gray-50 transition-all duration-200 group"
            >
              <div className="font-mono">
                <div className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-bold">
                  $ ls projects/
                </div>
                <div className="text-sm opacity-80 mt-2">Tools & applications I've built</div>
              </div>
            </Link>

            <Link
              href="/about"
              className="p-4 border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded terminal:hover:bg-terminal-accent/10 blue:hover:bg-bluef-accent/10 light:hover:bg-gray-50 transition-all duration-200 group"
            >
              <div className="font-mono">
                <div className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-bold">
                  $ cat about.txt
                </div>
                <div className="text-sm opacity-80 mt-2">Learn more about me</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="pt-8 font-mono text-sm opacity-70 terminal:text-terminal-text blue:text-bluef-text light:text-light-text">
          <p>
            Type{" "}
            <span className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent">help</span>{" "}
            or explore the navigation above
          </p>
          <p className="mt-2">
            <Link
              href="/contact"
              className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
            >
              $ contact --init
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
