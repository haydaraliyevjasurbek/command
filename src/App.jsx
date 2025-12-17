import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader"; // 🔥 Loader import

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentLang, setCurrentLang] = useState("uz"); // ❗ faqat kichik harf
  const [loading, setLoading] = useState(true); // loader state

  useEffect(() => {
    // Minimum 2 soniya loader ko‘rsatish
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  if (loading) {
    return <Loader />; // Loader doimiy 3s
  }

  return (
    <div className="font-sans">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

      <main>
        <Hero currentLang={currentLang} scrollToSection={scrollToSection} />
        <Services currentLang={currentLang} />
        <Projects currentLang={currentLang} />
        <About currentLang={currentLang} />
        <Contact currentLang={currentLang} />
      </main>

      <Footer currentLang={currentLang} />
    </div>
  );
};

export default App;
