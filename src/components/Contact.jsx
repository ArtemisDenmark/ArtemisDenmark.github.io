import CalendarModule from "react-github-calendar";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Vite Interop Fix: Extract the component if it's wrapped in a default object
const GitHubCalendar = CalendarModule.default || CalendarModule;

export default function Contact({ username }) {
  const { theme } = useTheme();

  return (
    <section className="space-y-12 pb-24">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-cyber-heading font-mono border-b border-cyber-border pb-4">
          <span className="text-cyber-neon">03.</span> Contribution_Matrix
        </h2>
        <div className="bg-cyber-card border border-cyber-border p-6 rounded-lg overflow-x-auto hide-scrollbar flex justify-center">
          {/* Now safe to render */}
          <GitHubCalendar
            username={username}
            colorScheme={theme}
            theme={{
              dark: ["#161b22", "#00442a", "#006d32", "#26a641", "#39d353"],
              light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            }}
          />
        </div>
      </div>

      <div className="text-center space-y-6 bg-cyber-card border border-cyber-border p-12 rounded-lg relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-cyber-neon shadow-[0_0_20px_rgba(0,255,157,0.5)]"></div>
        <h2 className="text-4xl font-bold text-cyber-heading">
          Let's build something.
        </h2>
        <p className="text-cyber-text max-w-lg mx-auto">
          Currently open for new opportunities. Whether you have a question or
          just want to say hi, my inbox is always open.
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-cyber-muted text-cyber-text hover:bg-cyber-neon hover:text-white transition-all rounded-full border border-cyber-border"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="p-3 bg-cyber-muted text-cyber-text hover:bg-cyber-heading hover:text-cyber-card transition-all rounded-full border border-cyber-border"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
