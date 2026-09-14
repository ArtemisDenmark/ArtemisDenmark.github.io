import { Code, Database, Layout, Terminal } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code,
    techs: ["Go", "Python", "TypeScript", "JavaScript", "Lua", "PHP"],
  },
  {
    category: "Frontend",
    icon: Layout,
    techs: ["Next.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS"],
  },
  {
    category: "Backend & DB",
    icon: Database,
    techs: ["Node.js", "PostgreSQL", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    icon: Terminal,
    techs: ["Docker", "Cloudflare", "Vercel", "npm", "pnpm", "GitHub"],
  },
];

export default function TechStack() {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-cyber-heading font-mono border-b border-cyber-border pb-4">
        <span className="text-cyber-neon">02.</span> System_Specs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="bg-cyber-card border border-cyber-border p-6 rounded-lg flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-accent/50 group"
            >
              <div className="p-3 bg-cyber-muted border border-cyber-border rounded-md text-cyber-accent group-hover:text-cyber-neon transition-colors">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyber-heading font-mono mb-3">
                  {skill.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {skill.techs.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm px-3 py-1 bg-cyber-muted border border-cyber-border text-cyber-text rounded-md font-mono hover:text-cyber-heading hover:border-cyber-accent/50 transition-colors cursor-default"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
