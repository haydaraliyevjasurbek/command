import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const translations = {
  uz: {
    title: "Biz Haqimizda",
    description1:
      "Khairon qurilish kompaniyasi 15 yildan ortiq tajribaga ega bo'lib, O'zbekiston bo'ylab yuzlab muvaffaqiyatli loyihalarni amalga oshirgan.",
    description2:
      "Bizning jamoamiz professional muhandislar, arxitektorlar va qurilish mutaxassislaridan iborat bo'lib, har bir loyihaga yuqori mas'uliyat bilan yondashadi.",
    projectsLabel: "Bajarilgan loyihalar",
    experienceLabel: "Yillik tajriba",
  },
  ru: {
    title: "О нас",
    description1:
      "Компания Khairon имеет более 15 лет опыта и успешно реализовала сотни проектов по всему Узбекистану.",
    description2:
      "Наша команда состоит из профессиональных инженеров, архитекторов и строительных специалистов, подходящих к каждому проекту с высокой ответственностью.",
    projectsLabel: "Выполненные проекты",
    experienceLabel: "Лет опыта",
  },
  en: {
    title: "About Us",
    description1:
      "Khairon construction company has over 15 years of experience and has successfully completed hundreds of projects across Uzbekistan.",
    description2:
      "Our team consists of professional engineers, architects, and construction specialists, approaching each project with high responsibility.",
    projectsLabel: "Completed Projects",
    experienceLabel: "Years of Experience",
  },
};

const About = ({ currentLang }) => {
  const t = translations[currentLang];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // COUNTERS
  const projects = useMotionValue(0);
  const experience = useMotionValue(0);

  const roundedProjects = useTransform(projects, Math.round);
  const roundedExperience = useTransform(experience, Math.round);

  useEffect(() => {
    if (!isInView) return;

    const controls1 = animate(projects, 500, {
      duration: 2,
      ease: "easeOut",
    });

    const controls2 = animate(experience, 15, {
      duration: 2,
      ease: "easeOut",
    });

    return () => {
      controls1.stop();
      controls2.stop();
    };
  }, [isInView, projects, experience]);

  return (
    <section
      ref={ref}
      id="about"
      className="py-5 bg-primary text-white border-bottom"
      style={{ scrollMarginTop: "70px" }}
    >
      <Container>
        <Row className="align-items-center g-4">
          {/* TEXT */}
          <Col lg={6}>
            <h2 className="display-5 fw-bold mb-4">{t.title}</h2>

            <p className="mb-3">{t.description1}</p>
            <p className="mb-4">{t.description2}</p>

            <Row className="text-center">
              <Col xs={6}>
                <h3 className="display-4 fw-bold">
                  <motion.span>{roundedProjects}</motion.span>+
                </h3>
                <p>{t.projectsLabel}</p>
              </Col>

              <Col xs={6}>
                <h3 className="display-4 fw-bold">
                  <motion.span>{roundedExperience}</motion.span>+
                </h3>
                <p>{t.experienceLabel}</p>
              </Col>
            </Row>
          </Col>

          {/* IMAGE / MAP */}
          <Col lg={6} className="d-none d-lg-flex justify-content-center">
            <Card
              className="border-0 rounded-3 d-flex align-items-center justify-content-center"
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "400px",
                fontSize: "80px",
              }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <a
                  href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: 0,
                  }}
                >
                  Toshkent
                </a>
                <a
                  href="https://yandex.uz/maps/geo/1543141586/?ll=69.204906%2C41.274355&utm_medium=mapframe&utm_source=maps&z=16.11"
                  style={{
                    color: "#eee",
                    fontSize: "12px",
                    position: "absolute",
                    top: "14px",
                  }}
                >
                  Chilonzor metro bekati — Yandex Xarita
                </a>
                <iframe
                  src="https://yandex.uz/map-widget/v1/?ll=69.204906%2C41.274355&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTQzMTQxNTg2EkVPyrt6YmVraXN0b24sIFRvc2hrZW50LCBDaGlsb256b3IgeW_Ku25hbGlzaGksIENoaWxvbnpvciBtZXRybyBiZWthdGkiCg3qaIpCFfEYJUI%2C&z=16.11"
                  width="560"
                  height="400"
                  frameBorder="1"
                  allowFullScreen={true}
                  style={{ position: "relative" }}
                  title="Toshkent Map"
                ></iframe>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
