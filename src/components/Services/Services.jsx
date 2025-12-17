import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceItem from "../ServiceItem/ServiceItem";
import servicesData from "../../db/services.json";

const Services = ({ currentLang }) => {
  return (
    <section
      id="services"
      className="py-5 bg-light"
      style={{ scrollMarginTop: "70px" }}
    >
      <Container>
        <h2 className="text-center display-4 fw-bold text-primary mb-5">
          {{
            uz: "Bizning xizmatlar",
            ru: "Наши услуги",
            en: "Our Services"
          }[currentLang]}
        </h2>

        <Row className="g-4">
          {servicesData.map((service) => (
            <Col key={service.id} lg={4} md={6}>
              <ServiceItem
                service={service}
                currentLang={currentLang}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
