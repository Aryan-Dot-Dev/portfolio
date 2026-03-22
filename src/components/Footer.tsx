import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-surface pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-row justify-between items-center gap-6">
        <div className="font-serif text-lg text-on-surface">SuspiciousDude</div>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/Aryan-Dot-Dev" target="_blank" rel="noopener noreferrer" className="text-on-tertiary-container hover:text-primary transition-all hover:scale-110 opacity-70 hover:opacity-100" aria-label="Github">
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/suspicious-dev/" target="_blank" rel="noopener noreferrer" className="text-on-tertiary-container hover:text-primary transition-all hover:scale-110 opacity-70 hover:opacity-100" aria-label="LinkedIn">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a href="https://x.com/SuspiciounDude" target="_blank" rel="noopener noreferrer" className="text-on-tertiary-container hover:text-primary transition-all hover:scale-110 opacity-70 hover:opacity-100" aria-label="Twitter">
            <Twitter size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};
