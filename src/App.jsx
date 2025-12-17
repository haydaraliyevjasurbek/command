import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentLang, setCurrentLang] = useState("uz"); // ❗ faqat kichik harf

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

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
