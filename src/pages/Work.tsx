import React, { useState, useEffect } from "react";
import infouImg1 from "../assets/infou/infou1.png";
import infouImg2 from "../assets/infou/infou2.png";
import infouImg3 from "../assets/infou/infou3.png";
import kelpImg1 from "../assets/kelp/kelp1.png";
import kelpImg2 from "../assets/kelp/kelp2.png";
import kelpImg3 from "../assets/kelp/kelp3.png";
import kelpImg4 from "../assets/kelp/kelp4.png";
import kelpImg5 from "../assets/kelp/kelp5.png";
import lectureImg1 from "../assets/lecturemap/lecturemap1.png";
import lectureImg2 from "../assets/lecturemap/lecturemap2.png";
import raasImg1 from "../assets/raas/raas1.png";

export const Work = ({ onPageChange }: { onPageChange?: (page: string) => void }) => {
  const infouImages = [infouImg1, infouImg2, infouImg3];
  const kelpImages = [kelpImg1, kelpImg2, kelpImg3, kelpImg4, kelpImg5];
  const lectureImages = [lectureImg1, lectureImg2];

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeKelpSlide, setActiveKelpSlide] = useState(0);
  const [activeLectureSlide, setActiveLectureSlide] = useState(0);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const timer1 = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % infouImages.length);
    }, 4000);
    const timer2 = setInterval(() => {
      setActiveKelpSlide((prev) => (prev + 1) % kelpImages.length);
    }, 3500);
    const timer3 = setInterval(() => {
      setActiveLectureSlide((prev) => (prev + 1) % lectureImages.length);
    }, 4500);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [infouImages.length, kelpImages.length, lectureImages.length]);
  return (
    <div className="space-y-16">
      <header className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-secondary text-xl">◆</span>
          <span className="font-mono text-xs uppercase tracking-widest text-on-tertiary-container">Selected Works</span>
        </div>
        <h1 className="font-serif text-4xl xl:text-7xl font-bold tracking-tight mb-8">
          Building scalable <span className="italic font-normal">systems</span><br />with intelligence.
        </h1>
        <div className="flex flex-wrap gap-3 mt-12">
          <button 
            onClick={() => setFilter("all")} 
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all cursor-pointer ${filter === "all" ? "bg-on-surface text-surface" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter("web")} 
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all cursor-pointer ${filter === "web" ? "bg-on-surface text-surface" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}
          >
            Web
          </button>
          <button 
            onClick={() => setFilter("mobile")} 
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all cursor-pointer ${filter === "mobile" ? "bg-on-surface text-surface" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}
          >
            Mobile
          </button>
          <button 
            onClick={() => setFilter("ai/dev")} 
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all cursor-pointer ${filter === "ai/dev" ? "bg-on-surface text-surface" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`}
          >
            AI/Dev
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* Project 1: Featured (Large) */}
        {(filter === "all" || filter === "web") && (
          <div className="col-span-12 xl:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container p-5 xl:p-8 h-auto min-h-[400px] xl:h-[500px] flex flex-col justify-between transition-all hover:bg-surface-container-high cursor-pointer animate-in fade-in duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-on-primary-container px-8 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 z-20">
                View Project <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </div>
            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary block mb-2">Web / E-Commerce</span>
                  <h3 className="font-serif text-2xl xl:text-3xl font-bold">Infou Notebooks</h3>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[10px] px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant/20">React</span>
                  <span className="font-mono text-[10px] px-2 py-1 rounded bg-surface-container-lowest border border-outline-variant/20">Bun</span>
                </div>
              </div>
            </div>
            <div className="mt-8 relative flex-1 rounded-xl overflow-hidden shadow-inner group/slider">
              <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {infouImages.map((img, idx) => (
                  <div key={idx} className="w-full h-full flex-[1_0_100%] relative">
                    <img className="w-full h-full object-cover object-left-top transition-transform duration-700 group-hover:scale-105" alt={`Infou View ${idx + 1}`} src={img} />
                    <div className="absolute inset-0 bg-surface/10 group-hover/slider:bg-transparent transition-colors duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {infouImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setActiveSlide(idx); }}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${activeSlide === idx ? "bg-primary w-6" : "bg-white/50 hover:bg-white"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Project 2: Square (Small) */}
        {(filter === "all" || filter === "mobile") && (
          <div className="col-span-12 xl:col-span-4 group relative overflow-hidden rounded-lg bg-surface-container-lowest p-5 xl:p-8 h-auto min-h-[400px] md:h-[450px] xl:h-[500px] flex flex-col transition-all border border-outline-variant/10 cursor-pointer animate-in fade-in duration-500">
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="mb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container block mb-2">Mobile Application</span>
              <h3 className="font-serif text-2xl font-bold">Kelp</h3>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden mb-6 relative group/kelpslider">
              <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeKelpSlide * 100}%)` }}>
                {kelpImages.map((img, idx) => (
                  <div key={idx} className="w-full h-full flex-[1_0_100%] relative bg-surface-container-low/50">
                    <img className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" alt={`Kelp View ${idx + 1}`} src={img} />
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                {kelpImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setActiveKelpSlide(idx); }}
                    className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${activeKelpSlide === idx ? "bg-primary w-4" : "bg-white/50 w-1.5 hover:bg-white"}`}
                    aria-label={`Go to Kelp slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <div className="font-mono text-[10px] text-on-tertiary-container">2024 Project</div>
              <div className="bg-primary-container text-on-primary-container p-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <span className="material-symbols-outlined text-sm">north_east</span>
              </div>
            </div>
          </div>
        )}

        {/* Project 3: Vertical (Medium) */}
        {(filter === "all" || filter === "ai/dev") && (
          <div className="col-span-12 xl:col-span-4 group relative overflow-hidden rounded-lg bg-surface-container-lowest p-5 xl:p-8 h-auto min-h-[450px] xl:h-[600px] flex flex-col border border-outline-variant/10 animate-in fade-in duration-500">
            <div className="absolute top-6 right-6 text-secondary text-2xl">◆</div>
            <div className="mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container block mb-2">API Package</span>
              <h3 className="font-serif text-2xl font-bold leading-tight">RaaS Rate Limiter</h3>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden mb-8 bg-surface-container-low/50 relative">
              <img className="w-full h-full object-cover object-[10%_center] transition-transform duration-700 group-hover:scale-105" alt="RaaS Package" src={raasImg1} />
              <div className="absolute inset-0 bg-surface/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-on-tertiary-container line-clamp-3 mb-4">A fast, scalable NPM package implementing a token bucket rate limiter with a built-in LRU cache.</p>
              <div className="flex flex-wrap gap-2">
                <span className="font-mono text-[10px] px-2 py-1 rounded bg-surface-container">BunJS</span>
                <span className="font-mono text-[10px] px-2 py-1 rounded bg-surface-container">K6</span>
              </div>
            </div>
          </div>
        )}

        {/* Project 4: Wide (Medium) */}
        {(filter === "all" || filter === "ai/dev") && (
          <div className="col-span-12 xl:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container p-5 xl:p-8 h-auto min-h-[450px] xl:h-[600px] flex flex-col transition-all hover:bg-surface-container-high animate-in fade-in duration-500">
            <div className="flex flex-col xl:flex-row gap-12 h-full">
              <div className="xl:w-1/3 flex flex-col justify-between py-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container block mb-2">AI Integration</span>
                  <h3 className="font-serif text-3xl xl:text-4xl font-bold mb-4">LectureMap</h3>
                  <p className="text-sm text-on-tertiary-container">An intelligent chatbot that understands and discusses any YouTube video content.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-xs">analytics</span>
                    </div>
                    <span className="text-xs font-mono">Langchain + Whisper</span>
                  </div>
                </div>
              </div>
              <div className="xl:w-2/3 relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest group/lectureslider">
                <div className="w-full h-full flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeLectureSlide * 100}%)` }}>
                  {lectureImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full flex-[1_0_100%] relative bg-surface-container-low/50">
                      <img className="w-full h-full object-contain p-2 transition-transform duration-1000 group-hover:scale-105" alt={`LectureMap View ${idx + 1}`} src={img} />
                    </div>
                  ))}
                </div>

                {/* Slider Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {lectureImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setActiveLectureSlide(idx); }}
                      className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${activeLectureSlide === idx ? "bg-primary w-6" : "bg-white/50 w-2 hover:bg-white"}`}
                      aria-label={`Go to LectureMap slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-24 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-on-tertiary-container mb-6">Hungry for more?</p>
        <a
          className="inline-flex items-center gap-4 group cursor-pointer"
          href="/journey"
          onClick={(e) => {
            e.preventDefault();
            onPageChange?.("journey");
          }}
        >
          <span className="font-serif text-4xl font-bold group-hover:text-secondary transition-colors">See my journey</span>
          <div className="w-12 h-12 rounded-full border border-on-surface flex items-center justify-center group-hover:bg-on-surface group-hover:text-surface transition-all">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </a>
      </div>
    </div>
  );
};
