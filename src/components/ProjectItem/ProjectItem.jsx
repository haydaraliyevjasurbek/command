import React, { useState } from "react";
import { Col, Card, Button } from "react-bootstrap";

const buttonText = {
  uz: "Batafsil",
  ru: "Подробнее",
  en: "Details",
};

const ProjectItem = ({ item, lang }) => {
  const [hover, setHover] = useState(false);

  if (!item) return null; // ❗ xavfsizlik

  return (
    <Col md={6} lg={4}>
      <Card
        className="h-100 shadow-sm"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Card.Img
          variant="top"
          src={hover ? item.images?.img2 : item.images?.img1}
          style={{ height: "250px", objectFit: "cover" }}
        />

        <Card.Body>
          <Card.Title>
            {item.title?.[lang]}
          </Card.Title>

          <Card.Text className="text-muted">
            {item.description?.[lang]}
          </Card.Text>

          {item.price?.[lang] && (
            <Card.Text className="fw-bold text-primary">
              {item.price[lang]}
            </Card.Text>
          )}

          <Button className="w-100">
            {buttonText[lang]}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectItem;
