import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import instagaramIcon from "../../assets/images/icons/instagaramIcon.png";
import telegramIcon from "../../assets/images/icons/telegram.svg";
import youtubeIcon from "../../assets/images/icons/youtubeIcon.svg";

const translations = {
  uz: {
    company: "KHAIRON",
    description: "Professional qurilish xizmatlari",
    quickLinks: "Tezkor havolalar",
    links: [
      { text: "Bosh sahifa", href: "#hero" },
      { text: "Xizmatlar", href: "#services" },
      { text: "Loyihalar", href: "#projects" },
    ],
    social: "Ijtimoiy tarmoqlar",
    copyright: "© 2025 Khairon. Barcha huquqlar himoyalangan.",
  },
  ru: {
    company: "KHAIRON",
    description: "Профессиональные строительные услуги",
    quickLinks: "Быстрые ссылки",
    links: [
      { text: "Главная", href: "#hero" },
      { text: "Услуги", href: "#services" },
      { text: "Проекты", href: "#projects" },
    ],
    social: "Социальные сети",
    copyright: "© 2025 Khairon. Все права защищены.",
  },
  en: {
    company: "KHAIRON",
    description: "Professional construction services",
    quickLinks: "Quick Links",
    links: [
      { text: "Home", href: "#hero" },
      { text: "Services", href: "#services" },
      { text: "Projects", href: "#projects" },
    ],
    social: "Social Media",
    copyright: "© 2025 Khairon. All rights reserved.",
  },
};

const Footer = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <footer className="bg-primary text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="fw-bold">{t.company}</h5>
            <p>{t.description}</p>
          </Col>

          <Col lg={4} className="mb-4 mb-lg-0">
            <h6 className="fw-bold">{t.quickLinks}</h6>
            <ul className="list-unstyled">
              {t.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-white text-decoration-none">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4}>
            <h6 className="fw-bold">{t.social}</h6>
            <div className="d-flex gap-3 fs-4">
              <a href="#" className="text-white text-decoration-none">
                <img src={instagaramIcon} style={{ width: "30px" }} alt="Instagram" />
              </a>
              <a href="#" className="text-white text-decoration-none">
                <img src={telegramIcon} style={{ width: "30px" }} alt="Telegram" />
              </a>
              <a href="#" className="text-white text-decoration-none">
                <img src={youtubeIcon} style={{ width: "38px" }} alt="YouTube" />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <p className="text-center mb-0">{t.copyright}</p>
      </Container>
    </footer>
  );
};

export default Footer;
