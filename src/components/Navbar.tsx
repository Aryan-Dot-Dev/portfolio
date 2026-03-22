import { useMemo } from "react";
import CardNav from "./CardNav";

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

/* ─── Logo Content ───────────────────────────────────────────────── */
const SuspiciousLogo = () => (
  <div className="flex items-center gap-2 cursor-pointer select-none">
    <div className="relative w-8 h-8 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 15C32 15 18 29 18 47C18 55 21 62 26 67C26 77 34 85 40 85H60C66 85 74 77 74 67C79 62 82 55 82 47C82 29 68 15 50 15Z" fill="#f5f5f0" />
        <g>
          <rect x="22" y="38" width="26" height="14" rx="3" fill="#1C1917" />
          <rect x="52" y="38" width="26" height="14" rx="3" fill="#1C1917" />
          <path d="M48 44C49 44 51 44 52 44" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
          <rect x="25" y="41" width="10" height="2" rx="1" fill="white" fillOpacity="0.2" />
          <rect x="55" y="41" width="10" height="2" rx="1" fill="white" fillOpacity="0.2" />
        </g>
        <path d="M46 60L50 54L54 60" stroke="rgba(0,0,0,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 76H64" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 72V80M46 72V82M54 72V82M62 72V80" stroke="rgba(0,0,0,0.4)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
    <span className="hidden md:block font-serif text-base text-stone-900 tracking-[-0.02em]">SuspiciousDude</span>
  </div>
);

/* ─── Navbar ─────────────────────────────────────────────────────── */
export const Navbar = ({ activePage, onPageChange }: NavbarProps) => {
  // Conditional logo/text component based on the active page
  const logoNode = useMemo(() => {
    if (activePage === "home") {
      return (
        <div onClick={() => onPageChange("home")}>
          <SuspiciousLogo />
        </div>
      );
    }
    return (
      <div 
        onClick={() => onPageChange("home")}
        className="cursor-pointer select-none"
      >
        <div className="md:hidden">
          <div className="relative w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 15C32 15 18 29 18 47C18 55 21 62 26 67C26 77 34 85 40 85H60C66 85 74 77 74 67C79 62 82 55 82 47C82 29 68 15 50 15Z" fill="#f5f5f0" />
              <g>
                <rect x="22" y="38" width="26" height="14" rx="3" fill="#1C1917" />
                <rect x="52" y="38" width="26" height="14" rx="3" fill="#1C1917" />
                <path d="M48 44C49 44 51 44 52 44" stroke="#1C1917" strokeWidth="3" strokeLinecap="round" />
                <rect x="25" y="41" width="10" height="2" rx="1" fill="white" fillOpacity="0.2" />
                <rect x="55" y="41" width="10" height="2" rx="1" fill="white" fillOpacity="0.2" />
              </g>
              <path d="M46 60L50 54L54 60" stroke="rgba(0,0,0,0.4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M36 76H64" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M38 72V80M46 72V82M54 72V82M62 72V80" stroke="rgba(0,0,0,0.4)" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="hidden md:block font-serif text-xl text-stone-900 tracking-[-0.02em] capitalize">
          {activePage}
        </div>
      </div>
    );
  }, [activePage, onPageChange]);

  const items = useMemo(() => [
    {
      label: "Portfolio",
      bgColor: "#1c1917",
      textColor: "#faf9f6",
      links: [
        {
          label: "Home",
          href: "#home",
          ariaLabel: "Go to Home",
          onClick: () => onPageChange("home"),
        },
        {
          label: "Work",
          href: "#work",
          ariaLabel: "Go to Work",
          onClick: () => onPageChange("work"),
        },
      ],
    },
    {
      label: "About",
      bgColor: "#f0ede6",
      textColor: "#1c1917",
      links: [
        {
          label: "Journey",
          href: "#journey",
          ariaLabel: "Go to Journey",
          onClick: () => onPageChange("journey"),
        },
      ],
    },
    {
      label: "Connect",
      bgColor: "#c5f135",
      textColor: "#1a2200",
      links: [
        {
          label: "Contact",
          href: "#contact",
          ariaLabel: "Go to Contact",
          onClick: () => onPageChange("contact"),
        },
      ],
    },
  ], [onPageChange]);

  return (
    <CardNav
      logoNode={logoNode}
      items={items}
      baseColor="#faf9f6"
      menuColor="#1c1917"
      buttonBgColor="#c5f135"
      buttonTextColor="#1a2200"
      ctaLabel="Let's Talk"
      onCtaClick={() =>
        window.open(
          "https://cal.com/suspiciousdev/secret?overlayCalendar=true",
          "_blank"
        )
      }
      ease="power3.out"
    />
  );
};
