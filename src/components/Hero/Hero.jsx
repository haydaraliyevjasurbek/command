import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "./hero.css";
import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../../assets/images/hero/hero1.png";
import hero2 from "../../assets/images/hero/hero2.png";
import hero3 from "../../assets/images/hero/hero3.png";
import hero4 from "../../assets/images/hero/hero4.png";

const images = [hero1, hero2, hero3, hero4];

// Translate object
const translations = {
  uz: {
    title: "Kelajakni Quramiz",
    description:
      "Professional qurilish xizmatlari bilan orzuingizdagi binolarni hayotga tatbiq etamiz",
    button: "Biz bilan bog'laning",
  },
  ru: {
    title: "Строим Будущее",
    description:
      "С профессиональными строительными услугами воплотим в жизнь здания вашей мечты",
    button: "Связаться с нами",
  },
  en: {
    title: "Building the Future",
    description:
      "With professional construction services, we bring your dream buildings to life",
    button: "Contact Us",
  },
};

const Hero = ({ scrollToSection, currentLang }) => {
  const t = translations[currentLang]; // tanlangan tilga mos matn

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        scrollMarginTop: "70px",
      }}
    >
      {/* BACKGROUND SLIDER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        className="hero-swiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                backgroundImage: `
                  linear-gradient(
                    rgba(0, 0, 0, 0.2), 
                    rgba(0, 0, 0, 0.2)
                  ),
                  url(${img})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CONTENT */}
      <Container
        className="position-absolute top-50 start-50 translate-middle w-100"
        style={{ zIndex: 2 }}
      >
        <Row className="align-items-center">
          <Col lg={6} className="text-white text-center text-lg-start">
            <h1 className="fw-bold display-4 mb-3">{t.title}</h1>

            <p className="fs-5 fw-light mb-4">{t.description}</p>

            <Button
              variant="light"
              size="lg"
              className="text-primary fw-semibold"
              onClick={() => scrollToSection("contact")}
            >
              {t.button}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
