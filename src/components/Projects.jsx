import { Star, GitFork, ExternalLink, Code2 } from "lucide-react";

export default function Projects({ repos }) {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-cyber-heading font-mono border-b border-cyber-border pb-4">
        <span className="text-cyber-neon">01.</span> Open_Source_Deployments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-cyber-card border border-cyber-border hover:border-cyber-accent/50 rounded-lg p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-accent/5 blur-2xl group-hover:bg-cyber-accent/20 transition-all"></div>

            <div className="flex justify-between items-start mb-4">
              <Code2 className="text-cyber-neon" size={24} />
              <div className="flex gap-3 text-sm text-cyber-text font-mono">
                <span className="flex items-center gap-1">
                  <Star size={14} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} /> {repo.forks_count || 0}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-cyber-heading mb-2 group-hover:text-cyber-accent transition-colors">
              {repo.name}
            </h3>

            <p className="text-sm text-cyber-text mb-6 flex-grow">
              {repo.description ||
                "No description provided for this repository."}
            </p>

            <span className="text-xs font-mono px-2 py-1 bg-cyber-muted rounded text-cyber-text border border-cyber-border">
              {repo.language || "Markdown"}
            </span>

            <div className="flex gap-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-cyber-text hover:text-cyber-heading transition-colors"
                aria-label="View Source"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
