import {
  Star,
  GitFork,
  ExternalLink,
  Code2,
  Globe,
  Github,
} from "lucide-react";

const FEATURED_PROJECTS = [
  {
    id: "immersivegaming",
    name: "Immersive Gaming",
    description:
      "Full-stack gaming community platform featuring live timing, telemetry integration, and event coordination.",
    language: "Next.js / TypeScript",
    homepage: "https://www.immersivegaming.dk", // your live website
    stargazers_count: 0,
    forks_count: 0,
    isFeatured: true,
  },
];

export default function Projects({ repos }) {
  // Combine custom featured projects with GitHub repos (avoiding duplicates)
  const allProjects = [
    ...FEATURED_PROJECTS,
    ...repos.filter(
      (r) =>
        !FEATURED_PROJECTS.some(
          (f) => f.name.toLowerCase() === r.name.toLowerCase(),
        ),
    ),
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-cyber-heading font-mono border-b border-cyber-border pb-4">
        <span className="text-cyber-neon">01.</span> Projects_&_Deployments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project) => (
          <div
            key={project.id}
            className="bg-cyber-card border border-cyber-border hover:border-cyber-accent/50 rounded-lg p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-accent/5 blur-2xl group-hover:bg-cyber-accent/20 transition-all"></div>

            <div className="flex justify-between items-start mb-4">
              <Code2 className="text-cyber-neon" size={24} />
              <div className="flex gap-3 text-sm text-cyber-text font-mono">
                {project.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star size={14} /> {project.stargazers_count}
                  </span>
                )}
                {project.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork size={14} /> {project.forks_count}
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold text-cyber-heading mb-2 group-hover:text-cyber-accent transition-colors">
              {project.name}
            </h3>

            <p className="text-sm text-cyber-text mb-6 grow">
              {project.description || "No description provided."}
            </p>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-cyber-border/40">
              <span className="text-xs font-mono px-2 py-1 bg-cyber-muted rounded text-cyber-text border border-cyber-border">
                {project.language || "Markdown"}
              </span>

              <div className="flex items-center gap-3">
                {/* Live Website Link */}
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyber-text hover:text-cyber-neon transition-colors flex items-center gap-1 text-xs font-mono"
                    title="Live Website"
                  >
                    <Globe size={18} />
                    <span>Live</span>
                  </a>
                )}

                {/* Source Code Link */}
                {project.html_url && project.html_url !== "#" && (
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyber-text hover:text-cyber-heading transition-colors"
                    title="View Source"
                    aria-label="View Source"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
