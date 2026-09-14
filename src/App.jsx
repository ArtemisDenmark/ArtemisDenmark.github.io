import { motion } from "framer-motion";
import { useGithub } from "./hooks/useGithub";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { profile, repos, loading, error, USERNAME } = useGithub();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-bg font-mono text-cyber-neon">
        <span className="animate-pulse">Initializing_System...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-bg">
      <ThemeToggle />
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-32">
        {error && (
          <div className="bg-red-900/20 border border-red-500 text-red-400 p-4 rounded-md font-mono text-sm text-center">
            WARNING: GitHub API rate limit exceeded. Displaying cached fallback
            data.
          </div>
        )}

        <Hero profile={profile} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TechStack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Projects repos={repos} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Contact username={USERNAME} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
