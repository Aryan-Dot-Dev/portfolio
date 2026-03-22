import React, { useState, useEffect } from "react";
import "./index.css";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { Journey } from "./pages/Journey";
import { Contact } from "./pages/Contact";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home onPageChange={setActivePage} />;
      case "work":
        return <Work onPageChange={setActivePage} />;
      case "journey":
        return <Journey />;
      case "contact":
        return <Contact />;
      default:
        return <Home onPageChange={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} onPageChange={setActivePage}>
      {renderPage()}
      <Analytics />
    </Layout>
  );
}

export default App;
