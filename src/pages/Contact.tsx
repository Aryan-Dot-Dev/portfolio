import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <div className="grid grid-cols-12 gap-12 lg:gap-24 mb-20">
      {/* Contact Info (Editorial Side) */}
      <div className="col-span-12 lg:col-span-5 space-y-12 text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <span className="font-mono text-xs uppercase tracking-widest text-secondary flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-sm">alternate_email</span>
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-8">Let's build <br />together.</h1>
          <p className="text-on-tertiary-container text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
            Available for exciting engineering roles, full-stack collaborations, and AI-driven projects. Let's create scalable systems.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container mb-2">Location</div>
            <div className="font-serif text-xl">India</div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container mb-2">Electronic Mail</div>
            <a href="mailto:aryan.main21@gmail.com" className="font-serif text-xl border-b border-primary hover:text-primary transition-colors">aryan.main21@gmail.com</a>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container mb-6">Digital Presence</div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { icon: <Github size={24} />, label: "GitHub", href: "https://github.com/Aryan-Dot-Dev" },
                { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://www.linkedin.com/in/suspicious-dev/" },
                { icon: <Twitter size={24} />, label: "Twitter", href: "https://x.com/SuspiciounDude" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 transition-all"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-container-lowest border border-outline-variant/30 rounded-[2rem] flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:bg-primary/5 group-hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/10 to-transparent transition-opacity"></div>
                    <div className="relative text-on-surface group-hover:text-primary transition-colors transform group-hover:scale-110 duration-500">
                      {social.icon}
                    </div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-on-tertiary-container/60 group-hover:text-primary transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Secure Terminal Replacement (Unique Side) */}
      <div className="col-span-12 lg:col-span-7 relative">
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest p-1 md:p-1.5 border border-outline-variant/20 shadow-2xl">
          <div className="rounded-2xl border border-outline-variant/10 bg-surface-container p-8 md:p-14 flex flex-col items-center text-center relative overflow-hidden">
            {/* Aesthetic Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

            {/* Scannline Animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan"></div>

            {/* Header / ID Badge style */}


            <div className="max-w-md">
              <h2 className="font-serif text-4xl font-bold mb-6 tracking-tight">Skip the inbox.<br />Book a direct line.</h2>
              <p className="text-on-tertiary-container text-sm leading-relaxed mb-12 opacity-80">
                Forget the standard contact forms. This is a direct encryption link to my internal calendar. Secure your slot for a strategic consultation or technical deep-dive.
              </p>

              <div className="space-y-6">
                <Button
                  onClick={() => window.open("https://cal.com/suspiciousdev/secret?overlayCalendar=true", "_blank")}
                  className="w-full bg-on-surface text-surface hover:bg-on-surface/90 py-8 rounded-full font-sans font-bold text-lg cursor-pointer group transition-all flex items-center justify-center gap-3 shadow-xl shadow-on-surface/10 hover:shadow-primary/20"
                >
                  <span>Initiate Booking</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">bolt</span>
                </Button>

              </div>
            </div>

            {/* Aesthetic "Confidential" stamp absolute positioned */}
            <div className="absolute top-10 right-10 rotate-12 opacity-5 pointer-events-none select-none">
              <div className="border-4 border-on-surface p-2 font-mono text-4xl font-black uppercase tracking-tight">Confidential</div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Callout Footer (Contact specific) */}
      <div className="col-span-12 mt-20 pt-12 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center opacity-40 grayscale pointer-events-none">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Signature</span>
        <div className="h-px bg-outline-variant/30 flex-1 mx-8 hidden md:block"></div>
        <span className="font-serif italic text-2xl tracking-tighter">Aryan Sharma</span>
      </div>
    </div>
  );
};
