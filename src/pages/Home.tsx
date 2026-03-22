import React, { useState, useRef, useEffect } from "react";
import profileImg from "../assets/nestle/nestle-pfp.png";
import brawlidaysImg from "../assets/brawl/brawlidays.png";
import brawlLogoImg from "../assets/brawl/logo.png";
import songImg from "../assets/music/song.png";
import infouImg from "../assets/infou/infou1.png";

interface HomeProps {
  onPageChange?: (page: string) => void;
}

export const Home = ({ onPageChange }: HomeProps) => {
  const [isHoveringImg, setIsHoveringImg] = useState(false);
  const [ticketPage, setTicketPage] = useState(0);
  const floatingImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTicketPage((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (floatingImgRef.current) {
      const x = e.clientX - 15;
      const y = e.clientY - 15;
      floatingImgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-5 xl:gap-6">
      {/* Headline Cell (Large) */}
      <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-lg p-6 sm:p-8 lg:p-8 xl:p-12 relative overflow-hidden flex flex-col justify-end min-h-[55vh] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[440px] xl:min-h-[500px] pt-14 sm:pt-12 md:pt-8 lg:pt-12 xl:pt-12">
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 flex items-center gap-2">
          <span className="text-secondary text-xl font-serif">◆</span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-on-tertiary-container">Available for full-time & projects</span>
        </div>
        <h1 className="font-serif text-[clamp(2.4rem,7vw,5rem)] lg:text-6xl xl:text-8xl leading-[0.9] tracking-tight text-on-surface max-w-3xl">
          Building <span className="italic text-primary">Intelligent</span> Scalable <span className="inline-block relative">Systems<span className="absolute -right-[0.3em] -top-2 text-secondary text-[0.4em]">◆</span></span>
        </h1>
        <p className="mt-5 sm:mt-8 font-sans text-[clamp(0.9rem,2.5vw,1.125rem)] text-on-tertiary-container max-w-xl leading-relaxed">
          A Full Stack AI Engineer specializing in robust backends, aesthetic frontends, and seamless AI integrations. Currently navigating my 3rd year pursuing BTech FSD.
        </p>
      </div>

      {/* Personality Ticket (Asymmetric Right) */}
      <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-lg p-6 sm:p-8 flex flex-col border-t-4 lg:border-t-0 border-l-0 lg:border-l-4 border-dashed border-outline-variant/30 relative overflow-hidden min-h-[480px] sm:min-h-[500px] lg:min-h-[440px]">

        {/* Page 1: Engineer Identity */}
        <div className={`absolute inset-8 bottom-20 flex flex-col justify-between transition-all duration-500 ${ticketPage === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div>
            <div
              className="relative w-24 h-24 mb-6 cursor-grab disabled:cursor-none"
              onMouseEnter={() => setIsHoveringImg(true)}
              onMouseLeave={() => setIsHoveringImg(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="absolute inset-0 bg-secondary-container rounded-full ring-8 ring-secondary-container/20"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img draggable={false} className="w-full h-full object-cover translate-x-1.5 scale-[1.5] relative z-10 contrast-125 transition-all duration-500 hover:scale-[1.6] hover:translate-x-1.5" alt="Aryan Sharma" src={profileImg} />
              </div>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container mb-2">Engineer Identity</div>
              <div className="font-serif text-[clamp(1.25rem,4vw,1.5rem)] text-on-surface mb-6">Aryan Sharma</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-outline-variant/20">
                  <span className="font-mono text-xs text-on-tertiary-container">Location</span>
                  <span className="font-sans text-sm font-medium">India</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-outline-variant/20">
                  <span className="font-mono text-xs text-on-tertiary-container">Role</span>
                  <span className="font-sans text-sm font-medium">Full Stack AI Engineer</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-mono text-xs text-on-tertiary-container">Fuel</span>
                  <span className="font-sans text-sm font-medium">Coffee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2: Music Playground */}
        <div className={`absolute inset-8 bottom-20 flex flex-col transition-all duration-500 ${ticketPage === 1 ? 'opacity-100 translate-x-0' : ticketPage < 1 ? 'opacity-0 translate-x-12 pointer-events-none' : 'opacity-0 -translate-x-12 pointer-events-none'}`}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container mb-2">Currently Listening</div>
          <div className="font-serif text-[clamp(1.25rem,4vw,1.5rem)] text-on-surface mb-6">Music Profile</div>
          <div className="flex-1 flex flex-col justify-center items-center group">
            {/* Vinyl record design */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 aspect-square shrink-0 rounded-full bg-surface-container-highest border-[4px] border-surface-container-highest/20 flex items-center justify-center shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:animate-spin-slow">
              {/* Subtle Grooves overlaying the disk */}
              <div className="absolute inset-0 rounded-full border border-black/5 border-dashed pointer-events-none z-10"></div>

              {/* Album Art Label - Maximized */}
              <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden flex items-center justify-center">
                <img src={songImg} alt="Album Art" className="absolute inset-0 w-full h-full object-cover" />
                {/* Spindle hole */}
                <div className="w-4 h-4 rounded-full bg-surface shadow-inner border border-outline-variant/40 relative z-20"></div>
              </div>
            </div>

            {/* Playing text */}
            <div className="mt-8 text-center relative z-10 bg-transparent px-4">
              <div className="font-sans font-bold text-xl text-on-surface mb-0.5 group-hover:text-primary transition-colors tracking-tight text-center">Piya Ghar Aaya</div>
              <div className="font-sans text-sm text-on-tertiary-container tracking-wider font-medium opacity-80">Asad Khan</div>
            </div>
          </div>
        </div>

        {/* Page 3: Gaming Playground */}
        <div className={`absolute inset-8 bottom-20 flex flex-col transition-all duration-500 ${ticketPage === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container mb-2">After Hours</div>
          <div className="font-serif text-[clamp(1.25rem,4vw,1.5rem)] text-on-surface mb-6">Gaming Profile</div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="group bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all overflow-hidden relative shadow-md">
              <div className="h-32 sm:h-36 w-full overflow-hidden relative">
                <img src={brawlidaysImg} alt="Brawl Stars Banner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-surface-container-low to-transparent"></div>
              </div>
              <div className="px-3 pb-4 relative flex items-end gap-4">
                <div className="w-16 h-16 rounded-[14px] border-4 border-surface-container-low overflow-hidden shadow-lg relative z-10 shrink-0 flex items-center justify-center">
                  <img src={brawlLogoImg} alt="Brawl Stars Logo" className="w-full h-full object-contain" />
                </div>
                <div className="pb-1">
                  <div className="font-sans text-xl font-bold text-on-surface leading-tight mb-1">Brawl Stars</div>
                  <div className="font-sans text-xs text-secondary px-2 py-0.5 bg-secondary/10 rounded-full inline-block font-medium">In a match</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-8 flex gap-3 z-20">
          <button onClick={() => setTicketPage(0)} className={`w-2 h-2 rounded-full transition-all duration-300 ${ticketPage === 0 ? 'bg-secondary w-6' : 'bg-secondary/30 hover:bg-secondary/60'}`} aria-label="Page 1"></button>
          <button onClick={() => setTicketPage(1)} className={`w-2 h-2 rounded-full transition-all duration-300 ${ticketPage === 1 ? 'bg-secondary w-6' : 'bg-secondary/30 hover:bg-secondary/60'}`} aria-label="Page 2"></button>
          <button onClick={() => setTicketPage(2)} className={`w-2 h-2 rounded-full transition-all duration-300 ${ticketPage === 2 ? 'bg-secondary w-6' : 'bg-secondary/30 hover:bg-secondary/60'}`} aria-label="Page 3"></button>
        </div>
      </div>

      {/* Stats Card (Visual Data) */}
      <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-lg p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">school</span>
            <span className="font-mono text-xs text-on-tertiary-container">01 // ACADEMICS</span>
          </div>
          <div className="font-mono text-[clamp(2.5rem,7vw,3rem)] lg:text-4xl xl:text-5xl font-medium tracking-tighter text-on-surface">9.3</div>
          <div className="font-sans text-sm text-on-tertiary-container mt-2">Current CGPA — KR Mangalam University</div>
        </div>
        <div className="mt-8 bg-surface-container-lowest/50 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-1 bg-primary rounded-full"></div>
            <div className="w-16 h-1 bg-outline-variant rounded-full"></div>
            <div className="w-8 h-1 bg-outline-variant rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Featured Media (Bento Cell) */}
      <div onClick={() => onPageChange?.("work")} className="col-span-12 md:col-span-6 lg:col-span-5 rounded-lg overflow-hidden relative group cursor-pointer bg-surface-container-highest min-h-[400px]">
        <img className="w-full h-full object-cover object-left grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" alt="Selected Work" src={infouImg} />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex flex-col justify-end p-8">
          <div className="font-mono text-[10px] uppercase tracking-widest text-surface/60 mb-2 hover:scale-100">Active E-Commerce Platform</div>
          <div className="font-serif text-[clamp(1.25rem,4vw,1.5rem)] lg:text-2xl text-surface">Infou Notebooks</div>
        </div>
        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface-container-lowest/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-symbols-outlined transition-transform duration-300">north_east</span>
        </div>
      </div>

      {/* Process Cell (Technical) */}
      <div className="col-span-12 lg:col-span-3 bg-primary-container rounded-lg p-6 sm:p-8 text-on-primary-container flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-[clamp(1.25rem,4vw,1.5rem)] lg:text-2xl leading-tight mb-4">Core Technologies</h3>
          <p className="font-sans text-sm leading-relaxed opacity-80">A versatile toolset spanning scalable backends, interactive frontends, and AI models.</p>
        </div>
        <ul className="space-y-2 mt-6">
          <li className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="text-on-primary-container font-bold">◆</span> React / NextJS
          </li>
          <li className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="text-on-primary-container font-bold">◆</span> Bun / NodeJS
          </li>
          <li className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="text-on-primary-container font-bold">◆</span> Python / AI
          </li>
          <li className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="text-on-primary-container font-bold">◆</span> SQL / Prisma
          </li>
        </ul>
      </div>

      {/* Stats Bar (Section 8) */}
      <div className="col-span-12 mt-12 sm:mt-20 lg:mt-14 xl:mt-24 border-t border-outline-variant/30 pt-8 sm:pt-10 lg:pt-8 xl:pt-12">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between gap-8 sm:gap-12">
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-on-tertiary-container mb-2">Data Records Scaled</span>
            <span className="font-mono text-[clamp(1.75rem,5vw,2.25rem)] lg:text-3xl xl:text-4xl text-on-surface">1Cr+<span className="text-secondary text-[0.6em]">◆</span></span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-on-tertiary-container mb-2">Active Projects</span>
            <span className="font-mono text-[clamp(1.75rem,5vw,2.25rem)] lg:text-3xl xl:text-4xl text-on-surface">4+</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-on-tertiary-container mb-2">Tech Stack Skills</span>
            <span className="font-mono text-[clamp(1.75rem,5vw,2.25rem)] lg:text-3xl xl:text-4xl text-on-surface">12+</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-widest text-on-tertiary-container mb-2">NPM Packages published</span>
            <span className="font-mono text-[clamp(1.75rem,5vw,2.25rem)] lg:text-3xl xl:text-4xl text-on-surface">1</span>
          </div>
          <div className="col-span-2 sm:col-span-1 max-w-xs">
            <p className="font-sans text-sm italic text-on-tertiary-container leading-relaxed">
              "Building applications that not only solve real-world problems but scale effortlessly."
            </p>
            <div className="font-mono text-[10px] mt-2 uppercase tracking-widest">— Engineering Philosophy</div>
          </div>
        </div>
      </div>

      {/* Floating Image rendered fixed atop everything */}
      <img
        ref={floatingImgRef}
        src={profileImg}
        alt="Floating Profile"
        className={`fixed top-0 left-0 w-64 h-64 object-cover object-center rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-surface pointer-events-none z-[100] transition-opacity duration-200 hidden md:block ${isHoveringImg ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};
