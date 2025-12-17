import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import ProjectItem from "../ProjectItem/ProjectItem";
import data from "../../db/projects.json";

// Images
import p1a from "../../assets/images/chizmalar/chizma1.webp";
import p2a from "../../assets/images/chizmalar/chizma2.webp";
import p3a from "../../assets/images/chizmalar/chizma3.webp";

import p1b from "../../assets/images/projects/1.webp";
import p2b from "../../assets/images/projects/2.webp";
import p3b from "../../assets/images/projects/3.webp";

const images = [
  { img1: p1a, img2: p1b },
  { img1: p2a, img2: p2b },
  { img1: p3a, img2: p3b },
];

const sectionTitles = {
  uz: "Bajarilgan loyihalar",
  ru: "Выполненные проекты",
  en: "Completed Projects",
};

const loadMoreText = {
  uz: "Yana ko‘rish",
  ru: "Показать ещё",
  en: "Load more",
};

const Projects = ({ currentLang }) => {
  const lang = currentLang.toLowerCase(); // ❗ MUHIM
  const [visible, setVisible] = useState(3);

  const loadMore = () => {
    setVisible((prev) => Math.min(prev + 3, data.length));
  };

  return (
    <section id="projects" className="py-5 bg-white">
      <Container>
        <h2 className="text-center fw-bold mb-5">
          {sectionTitles[lang]}
        </h2>

        <Row className="g-4">
          {data.slice(0, visible).map((item, index) => (
            <ProjectItem
              key={item.id}
              item={{
                ...item,
                images: images[index] || { img1: "", img2: "" },
              }}
              lang={lang}
            />
          ))}
        </Row>

        {visible < data.length && (
          <div className="text-center mt-4">
            <Button onClick={loadMore}>
              {loadMoreText[lang]}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
