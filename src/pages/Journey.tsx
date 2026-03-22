import React, { useState, useEffect, useRef } from "react";
import nestleLogo from "../assets/nestle/nestle.png";
import transorgLogo from "../assets/transorg.png";
import swipeitLogo from "../assets/swipeit.png";
import krmuLogo from "../assets/krmu.png";
import nestlePlace1Image from "../assets/nestle/nestle-place1.png";
import nestlePlace2Image from "../assets/nestle/nestle-place2.jpg";
import nestlePlace3Image from "../assets/nestle/nestle-place3.jpg";
import nestlePlace4Image from "../assets/nestle/nestle-place4.jpg";
import Stack from "../components/Stack";

export const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackStyle, setTrackStyle] = useState({ top: 0, height: '100%' });
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      year: "June 2025 — Sept 2025",
      role: "Full Stack Intern @ Nestle",
      description: "Created a live business dashboard handling upwards of 1Cr+ data records to accelerate sales and finance decisions.",
      logo: nestleLogo,
      images: [
        nestlePlace1Image,
        nestlePlace2Image,
        nestlePlace3Image,
        nestlePlace4Image
      ],
    },
    {
      year: "Feb 2026 — Present",
      role: "Full Stack Developer Intern @ Transorg Analytics",
      description: "Working as the main frontend dev for a DB orchestration project. Handling 200+ tables, lineages, and live mappings.",
      current: true,
      logo: transorgLogo,
    },
    {
      year: "2025",
      role: "Full Stack Developer @ SwipeIt (Freelance)",
      description: "Built and shipped a Tinder-style job matching platform using semantic analysis of resumes and skills.",
      logo: swipeitLogo,
    },
    {
      year: "2023 — 2027",
      role: "B.Tech FSD @ KR Mangalam University",
      description: "Currently pursuing my degree with a CGPA of 9.3, continuously expanding my knowledge in scalable architectures.",
      logo: krmuLogo,
    },
  ];

  // Calculate the bounds of the track entirely on layout so the browser natively sticks the element
  useEffect(() => {
    const updateMetrics = () => {
      let minY = 0;
      let maxY = 0;
      // Explicitly pull from the first and last expected items
      const firstEl = elementsRef.current[0];
      const lastEl = elementsRef.current[experiences.length - 1];

      if (firstEl) {
        minY = firstEl.offsetTop + firstEl.offsetHeight / 2;
      }
      
      if (lastEl) {
        maxY = lastEl.offsetTop + lastEl.offsetHeight / 2;
      }
      if (maxY > minY) {
        setTrackStyle({ top: minY, height: `${maxY - minY}px` });
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateMetrics();
    });

    if (document.getElementById('journey-list')) {
      resizeObserver.observe(document.getElementById('journey-list')!);
    }

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    const timeout = setTimeout(updateMetrics, 100);
    return () => {
      window.removeEventListener("resize", updateMetrics);
      resizeObserver.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  // Use passive requestAnimationFrame purely for determining which Logo to show
  useEffect(() => {
    let ticking = false;
    let animationFrameId: number;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          // Changed trigger point to match top-48 (192px)
          const triggerPoint = 192;
          let newActiveIndex = 0;

          experiences.forEach((_, index) => {
            const el = elementsRef.current[index];
            if (!el) return;
            const rect = el.getBoundingClientRect();

            // Refined trigger - switch exactly when node center approaches tracker center (192px)
            if (rect.top <= triggerPoint + 30) {
              newActiveIndex = index;
            }
          });

          setActiveIndex((prev) => (prev !== newActiveIndex ? newActiveIndex : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="space-y-12 md:space-y-32">
      <section className="relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/3 relative lg:sticky top-32 h-fit">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-sm">diamond</span>
              Evolution
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">The Journey <br />So Far</h1>
            <p className="text-on-tertiary-container text-lg leading-relaxed max-w-sm">
              A continuous journey of building robust applications and scalable systems. Each node marks a core step in my engineering career.
            </p>
          </div>

          <div className="w-full lg:w-2/3 relative mt-20 lg:mt-0">
            <div className="space-y-32 md:space-y-48 relative pb-16 md:pb-32 pt-12 md:pt-8" id="journey-list">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-16 lg:top-8 bottom-24 w-px border-l-2 border-dashed border-outline-variant/40 -translate-x-1/2">
                <div className="absolute inset-0 border-l-[2px] border-secondary/10 md:hidden"></div>
              </div>

              {/* Native CSS Sticky Tracker */}
              <div
                className="absolute left-4 md:left-1/2 w-px z-20 pointer-events-none"
                style={{ top: `${trackStyle.top}px`, height: trackStyle.height }}
              >
                <div className="sticky top-48 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center w-14 h-14 md:w-16 lg:w-20 md:h-16 lg:h-20">
                  <div className="w-14 h-14 md:w-16 lg:w-20 md:h-16 lg:h-20 bg-white rounded-full shadow-lg border-2 md:border-4 border-outline-variant/30 flex items-center justify-center p-1.5 md:p-3 transition-opacity duration-300">
                    {experiences[activeIndex].logo ? (
                      <img
                        src={experiences[activeIndex].logo}
                        alt="Logo"
                        className="w-full h-full object-contain"
                        key={experiences[activeIndex].logo}
                      />
                    ) : (
                      <div className="w-full h-full rounded-full border-4 border-secondary animate-pulse shadow-[0_0_20px_rgba(175,48,0,0.4)] scale-50"></div>
                    )}
                  </div>
                </div>
              </div>

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (elementsRef.current[index] = el)}
                  className="relative flex flex-col md:flex-row md:items-center pl-16 md:pl-0 transition-all duration-700"
                  style={{ opacity: index === activeIndex ? 1 : 0.4 }}
                >
                  {/* Mobile Static Node (Hidden on md+) */}
                  <div className={`absolute -left-10 top-0 flex items-center justify-center z-10 md:hidden opacity-0`}>
                    {exp.logo && <img src={exp.logo} alt="Logo" className="w-full h-full object-contain" />}
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 lg:pr-24 text-left md:text-right" : "md:pl-12 lg:pl-24 text-left"}`}>
                    <span className={`font-mono text-[10px] md:text-xs ${index === activeIndex ? "text-secondary" : "text-on-tertiary-container"} transition-colors duration-500`}>{exp.year}</span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold mt-1 md:mt-2">{exp.role}</h3>
                    <p className="mt-2 md:mt-4 text-on-tertiary-container text-sm md:text-base leading-relaxed">{exp.description}</p>
                  </div>
                  {index % 2 === 0 ? (
                    <div className="md:w-1/2 hidden md:block pl-12 lg:pl-24">
                      {exp.images && (
                        <div className="w-full max-w-[300px] aspect-square h-auto">
                          <Stack
                            randomRotation
                            sensitivity={200}
                            sendToBackOnClick={true}
                            cards={exp.images.map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                alt={`Workplace ${i + 1}`}
                                className="w-full h-full object-cover rounded-[2rem] shadow-xl border border-outline-variant/10"
                              />
                            ))}
                            autoplay
                            autoplayDelay={3000}
                            pauseOnHover
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="md:w-1/2 order-first hidden md:block pr-12 lg:pr-24 flex justify-end">
                      {exp.images && (
                        <div className="w-full max-w-[300px] aspect-square h-auto ml-auto">
                          <Stack
                            randomRotation
                            sensitivity={200}
                            sendToBackOnClick={true}
                            cards={exp.images.map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                alt={`Workplace ${i + 1}`}
                                className="w-full h-full object-cover rounded-[2rem] shadow-xl border border-outline-variant/10"
                              />
                            ))}
                            autoplay
                            autoplayDelay={2000}
                            pauseOnHover
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary bg-primary-container px-3 py-1 rounded-full mb-4 inline-block">Capabilities</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Services & Expertise</h2>
          <p className="text-on-tertiary-container mt-4 leading-relaxed">Custom-tailored technical solutions focusing on scale, performance, and aesthetic utility.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-surface-container rounded-lg p-8 flex flex-col justify-between h-[320px] hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <div>
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container group-hover:border-transparent transition-all duration-300 mb-6">
                <span className="material-symbols-outlined">code</span>
              </div>
              <h4 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">Full Stack Engineering</h4>
              <p className="text-on-tertiary-container text-sm mt-3 leading-relaxed">End-to-end development handling complex databases, APIs, and heavily interactive frontends.</p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container/60">Module — 01</div>
          </div>

          <div className="group bg-surface-container-highest rounded-lg p-8 flex flex-col justify-between h-[320px] hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-1 md:col-span-2 relative overflow-hidden cursor-pointer">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface group-hover:bg-primary-container group-hover:text-on-primary-container group-hover:border-transparent transition-all duration-300 mb-6">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h4 className="font-serif text-2xl font-bold group-hover:text-primary transition-colors">AI & Data Orchestration</h4>
              <p className="text-on-tertiary-container text-sm mt-3 max-w-sm leading-relaxed">Integrating language models and heavy data handling to build smart, real-time dashboards and chatbots.</p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-on-tertiary-container/60 relative z-10">Module — 02</div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/30 transition-all duration-700"></div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low rounded-xl p-12 md:p-20 text-center border border-outline-variant/15 mb-20">
        <div className="text-secondary mb-8 text-4xl">◆</div>
        <h2 className="font-serif text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight italic">"The details are not the details. They make the system."</h2>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-sans text-base font-bold hover:scale-105 transition-all shadow-lg shadow-primary-container/20 cursor-pointer border-none">Start a Project</button>
          <button className="bg-transparent border border-outline-variant text-on-surface px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-surface-container transition-all cursor-pointer">Download Portfolio</button>
        </div>
      </section>
    </div>
  );
};
