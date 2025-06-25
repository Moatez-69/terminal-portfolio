export default function ProjectsPage() {
  const projects = [
    {
      title: "Vulnerability Operation Center",
      description:
        "Created comprehensive VOC system with automated CVE fetching from multiple resources, intelligent alerting system, and monthly report automation for enhanced cybersecurity monitoring.",
      technologies: ["Python", "CVE APIs", "Automation", "Report Generation"],
      github: "https://github.com/3angour/voc-system",
      demo: null,
      status: "Active",
      featured: true,
    },
    {
      title: "Sysreptor Plugin with Microsoft Steampipe",
      description:
        "Developed customized plugin for sysreptor using Microsoft Steampipe, creating specialized report templates to enhance cybersecurity documentation and analysis workflows.",
      technologies: ["Microsoft Steampipe", "Plugin Development", "Report Templates", "Cybersecurity"],
      github: "https://github.com/3angour/sysreptor-steampipe",
      demo: null,
      status: "Active",
      featured: true,
    },
    {
      title: "Guided-CTF/Mini-CTF Platform",
      description:
        "Contributed MISC and Forensics tasks for Securinets ISI, developing complex challenge scenarios testing advanced cybersecurity skills with Python scripting for Pyjails challenges.",
      technologies: ["Python", "CTF Development", "Forensics", "Pyjails", "Challenge Design"],
      github: "https://github.com/securinets-isi/guided-ctf",
      demo: null,
      status: "Active",
      featured: false,
    },
    {
      title: "AI Taquin Game",
      description:
        "Developed machine learning-powered Taquin game using advanced Python techniques, implementing predictive algorithms to optimize gameplay strategies and enhance user experience.",
      technologies: ["Python", "Machine Learning", "AI Algorithms", "Game Development"],
      github: "https://github.com/3angour/ai-taquin-game",
      demo: null,
      status: "Completed",
      featured: false,
    },
    {
      title: "Terminal Portfolio",
      description:
        "This very website! A terminal-themed portfolio and blog built with Next.js, featuring multi-theme switching and markdown blog support for CTF writeups and cybersecurity content.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/3angour/terminal-portfolio",
      demo: "https://3angour-portfolio.vercel.app",
      status: "Active",
      featured: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-400"
      case "Completed":
        return "text-blue-400"
      case "Maintenance":
        return "text-yellow-400"
      case "Archived":
        return "text-red-400"
      default:
        return "terminal:text-terminal-text blue:text-bluef-text light:text-light-text"
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ ls projects/
        </h1>
        <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80 font-mono">
          Cybersecurity tools, CTF contributions, and innovative solutions
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ find . -name "*featured*"
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded-lg p-6 terminal:hover:bg-terminal-accent/5 blue:hover:bg-bluef-accent/5 light:hover:bg-gray-50 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono">
                    {project.title}
                  </h3>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-mono px-2 py-1 terminal:bg-terminal-accent/10 blue:bg-bluef-accent/10 light:bg-gray-100 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 font-mono text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
                  >
                    $ git clone
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
                    >
                      $ open demo
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* All Projects */}
      <section>
        <h2 className="text-xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ ls -la
        </h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded p-4 terminal:hover:border-terminal-accent blue:hover:border-bluef-accent light:hover:border-gray-400 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-mono ${getStatusColor(project.status)}`}>[{project.status}]</span>
                  </div>
                  <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-70 text-sm mb-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent opacity-80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-50">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
                  >
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 pt-8 border-t terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 text-center">
        <div className="font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-70">
          <p className="mb-2">$ echo "More projects coming soon..."</p>
          <p>
            Check out my{" "}
            <a
              href="https://github.com/3angour"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent hover:underline"
            >
              GitHub
            </a>{" "}
            for the latest updates
          </p>
        </div>
      </div>
    </div>
  )
}
