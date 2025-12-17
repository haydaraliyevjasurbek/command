import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/khaironLogo3.png";
import golobusIcon from "../../assets/images/icons/globusIcon.svg";

import "./navbar.css";

// Translate object
const translations = {
  uz: {
    hero: "Bosh sahifa",
    services: "Xizmatlar",
    projects: "Loyihalar",
    about: "Biz haqimizda",
    contact: "Aloqa",
  },
  ru: {
    hero: "Главная",
    services: "Услуги",
    projects: "Проекты",
    about: "О нас",
    contact: "Контакты",
  },
  en: {
    hero: "Home",
    services: "Services",
    projects: "Projects",
    about: "About Us",
    contact: "Contact",
  },
};

const sections = [
  { id: "hero" },
  { id: "services" },
  { id: "projects" },
  { id: "about" },
  { id: "contact" },
];

const languages = ["uz", "ru", "en"];

const Navbar = ({ activeSection, scrollToSection, currentLang, setCurrentLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLangs, setShowLangs] = useState(false);

  const handleClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  const handleLangChange = (lang) => {
    setCurrentLang(lang); // App state’ini o’zgartiradi
    setShowLangs(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div
        className="logo-content"
        onClick={() => handleClick("hero")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
        }}
      >
        <img src={logo} alt="logo" style={{ height: "40px", width: "auto" }} />
        <span
          style={{
            paddingTop: "14px",
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          KHAIRON
        </span>
      </div>

      {/* DESKTOP MENU */}
      <div className="desktop-menu">
        <div className="tabs-wrapper">
          {sections.map((section) => (
            <div
              key={section.id}
              className="tab"
              onClick={() => handleClick(section.id)}
            >
              <motion.span
                animate={{ color: activeSection === section.id ? "#fff" : "#fff" }}
                transition={{ duration: 0.3 }}
                className="tab-label"
              >
                {translations[currentLang][section.id]}
              </motion.span>
              {activeSection === section.id && (
                <motion.div
                  className="active-tab"
                  layoutId="underline"
                  initial={false}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* DESKTOP LANGUAGE */}
        <div
          className="lang-switcher"
          onMouseEnter={() => setShowLangs(true)}
          onMouseLeave={() => setShowLangs(false)}
        >
          <button className="lang-btn">
            <span>
              <img
                style={{ width: "30px", paddingRight: "5px" }}
                src={golobusIcon}
                alt=""
              />
            </span>
            {currentLang.toUpperCase()}
          </button>
          <AnimatePresence>
            {showLangs && (
              <motion.div
                className="lang-list"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {languages.map((lang) => (
                  <div
                    key={lang}
                    className={`lang-item ${currentLang === lang ? "active" : ""}`}
                    onClick={() => handleLangChange(lang)}
                  >
                    {lang.toUpperCase()}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* HAMBURGER */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {sections.map((section) => (
              <motion.div
                key={section.id}
                className={`mobile-item ${activeSection === section.id ? "active" : ""}`}
                onClick={() => handleClick(section.id)}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                {translations[currentLang][section.id]}
              </motion.div>
            ))}

            <motion.div className="mobile-lang-toggle" variants={itemVariants}>
              <button
                className="mobile-lang-btn"
                onClick={() => setShowLangs(!showLangs)}
              >
                <span>
                  <img src={golobusIcon} alt="" />
                </span>
                {currentLang.toUpperCase()}
              </button>

              <AnimatePresence>
                {showLangs && (
                  <motion.div
                    className="mobile-lang-list"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang) => (
                      <div
                        key={lang}
                        className={`mobile-lang-item ${currentLang === lang ? "active" : ""}`}
                        onClick={() => handleLangChange(lang)}
                      >
                        {lang.toUpperCase()}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
