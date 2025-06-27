export default function AboutPage() {
  const skills = {
    "Programming Languages": [
      "Python (Advanced)", 
      "C", 
      "Java", 
      "JavaScript", 
      "PHP", 
      "Bash"
    ],
    "Web Technologies": [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "React.js", 
      "Node.js", 
      "Next.js", 
      "Tailwind CSS"
    ],
    "Cybersecurity Skills": [
      "CTF Challenges (Forensics, Web, MISC)", 
      "Network Security Analysis", 
      "Penetration Testing",
      "Threat Intelligence Enrichment",
      "Vulnerability Management"
    ],
    "CTF Specializations": [
      "Forensics", 
      "Web Exploitation", 
      "MISC Challenges", 
      "Pyjails", 
      "Python Scripting"
    ],
    "Tools & Technologies": [
      "SQL", 
      "MySQL", 
      "PostgreSQL", 
      "PL/SQL", 
      "Docker", 
      "Prisma ORM", 
      "Elasticsearch"
    ],
    "DevOps & Deployment": [
      "Vercel (Static & Serverless Hosting)", 
      "GitHub Actions (CI/CD)", 
      "Nginx (Basic Reverse Proxying)"
    ],
  }

  const achievements = [
    {
      title: "CSAW 24",
      description: "Quals 4th in MENA / Finals 5th in MENA",
      date: "2024",
    },
    {
      title: "CSAW 23",
      description: "Quals 4th in MENA / Finals 7th in MENA",
      date: "2023",
    },
    {
      title: "CyberMaze V3",
      description: "1st place",
      date: "2023",
    },
    {
      title: "Cybermaze V4",
      description: "2nd place",
      date: "2024",
    },
    {
      title: "KernelKombat CTF",
      description: "1st place",
      date: "2024",
    },
    {
      title: "GISAMM CTF",
      description: "2nd place",
      date: "2024",
    },
    {
      title: "Space Heroes CTF 2024",
      description: "9th place",
      date: "2024",
    },
    {
      title: "SwampCTF",
      description: "29th place",
      date: "2024",
    },
  ]

  const experience = [
    {
      title: "End Of Studies Internship",
      company: "ITC-Consulting",
      period: "February 2025 - May 2025",
      description:
        "Created Vulnerability Operation Center with automated CVE fetching, alerting system, and monthly report automation",
    },
    {
      title: "Summer Intern",
      company: "DefensyLab",
      period: "August 2024",
      description:
        "Developed customized plugin for sysreptor using Microsoft Steampipe and created specialized report templates",
    },
    {
      title: "Team Leader",
      company: "Securinets ISI",
      period: "September 2022 - 2023",
      description: "Mentored 20+ students, designed CTF workshops, organized SecuriCON event",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ cat about.txt
        </h1>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <div className="border terminal:border-terminal-accent blue:border-bluef-accent light:border-gray-300 rounded-lg p-6 terminal:bg-terminal-accent/5 blue:bg-bluef-accent/5 light:bg-gray-50">
          <div className="font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text space-y-4">
            <p className="text-lg">
              <span className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent">
                $ whoami
              </span>
            </p>
            <p className="leading-relaxed">
              Hi! I'm{" "}
              <strong className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent">
                Mootez Ben Slimen (3angour)
              </strong>
              , a passionate computer science student specializing in cybersecurity with expertise in CTF competitions
              and advanced Python scripting.
            </p>
            <p className="leading-relaxed">
              I have a proven track record in forensics and web security, demonstrated through multiple top-ranking CTF
              performances. Currently seeking opportunities to apply innovative problem-solving skills in cybersecurity
              research and development, committed to advancing technological security through hands-on experience and
              continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ cat education.log
        </h2>
        <div className="space-y-4">
          <div className="border-l-2 terminal:border-terminal-accent blue:border-bluef-accent light:border-light-accent pl-4 py-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono">
                Higher Institute of Computer Science
              </h3>
              <span className="text-sm terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
                2022 - Present
              </span>
            </div>
            <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80">
              Software Engineering • Ariana, Tunisia
            </p>
          </div>
          <div className="border-l-2 terminal:border-terminal-accent blue:border-bluef-accent light:border-light-accent pl-4 py-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono">
                Mahmoud Messaadi High School
              </h3>
              <span className="text-sm terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
                2018 - 2022
              </span>
            </div>
            <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80">
              High School Diploma with Honors • Nabeul, Tunisia
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ cat experience.log
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono">
                    {exp.title}
                  </h3>
                  <p className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono text-sm">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
                  {exp.period}
                </span>
              </div>
              <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ ls skills/
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4"
            >
              <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-mono px-2 py-1 terminal:bg-terminal-accent/10 blue:bg-bluef-accent/10 light:bg-gray-100 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTF Achievements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ cat ctf_achievements.log
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono">
                  {achievement.title}
                </h3>
                <span className="text-sm terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
                  {achievement.date}
                </span>
              </div>
              <p className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-80 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ cat languages.txt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4 text-center">
            <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-2">
              Arabic
            </h3>
            <p className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent text-sm">
              Native
            </p>
          </div>
          <div className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4 text-center">
            <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-2">
              English
            </h3>
            <p className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent text-sm">
              Fluent
            </p>
          </div>
          <div className="border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded-lg p-4 text-center">
            <h3 className="font-bold terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-mono mb-2">
              French
            </h3>
            <p className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent text-sm">
              Fluent
            </p>
          </div>
        </div>
      </section>

      {/* Contact Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent font-mono">
          $ find . -name "*contact*"
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="mailto:mootezmootez6@gmail.com"
            className="flex items-center gap-3 p-4 border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded terminal:hover:border-terminal-accent blue:hover:border-bluef-accent light:hover:border-gray-400 transition-all duration-200"
          >
            <span className="text-2xl">📧</span>
            <div className="font-mono">
              <div className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-bold">
                Email
              </div>
              <div className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent text-sm">
                mootezmootez6@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/mootez-ben-slimen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded terminal:hover:border-terminal-accent blue:hover:border-bluef-accent light:hover:border-gray-400 transition-all duration-200"
          >
            <span className="text-2xl">💼</span>
            <div className="font-mono">
              <div className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-bold">
                LinkedIn
              </div>
              <div className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent text-sm">
                Mootez Ben Slimen
              </div>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 border terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300 rounded">
            <span className="text-2xl">📍</span>
            <div className="font-mono">
              <div className="terminal:text-terminal-text blue:text-bluef-text light:text-light-text font-bold">
                Location
              </div>
              <div className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent text-sm">
                Ariana, Tunisia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center font-mono terminal:text-terminal-text blue:text-bluef-text light:text-light-text opacity-70 pt-8 border-t terminal:border-terminal-accent/30 blue:border-bluef-accent/30 light:border-gray-300">
        <p>$ echo "Thanks for reading! Feel free to reach out."</p>
        <p className="mt-2">
          <span className="terminal:text-terminal-accent blue:text-bluef-accent light:text-light-accent">
            ~/about.txt
          </span>{" "}
          [EOF]
        </p>
      </div>
    </div>
  )
}
