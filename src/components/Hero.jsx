import { TypeAnimation } from "react-type-animation";
import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ profile }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-2 text-cyber-accent font-mono text-sm">
          <Terminal size={16} />
          <span>visitor@portfolio:~$ ./greet.sh</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-cyber-heading tracking-tight">
          {profile?.name || profile?.login}
        </h1>

        <div className="text-xl md:text-2xl font-mono text-cyber-neon h-8">
          <TypeAnimation
            sequence={[
              "> Senior Frontend Developer",
              1000,
              "> React & Next.js Architect",
              1000,
              "> Open Source Contributor",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-cyber-text text-lg max-w-2xl leading-relaxed">
          {profile?.bio ||
            "Crafting high-performance, responsive, and accessible digital experiences from the command line to the browser."}
        </p>
      </div>

      <div className="w-48 h-48 md:w-64 md:h-64 relative group rounded-full overflow-hidden border-2 border-cyber-accent/50 p-1">
        <div className="absolute inset-0 border-2 border-cyber-neon rounded-full animate-spin-slow opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <img
          src={profile?.avatar_url}
          alt="GitHub Avatar"
          className="w-full h-full rounded-full object-cover z-10 relative grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </motion.section>
  );
}
