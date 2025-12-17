import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import ProjectItem from "../ProjectItem/ProjectItem";
import data from "../../db/projects.json";

// Images
import p1a from "../../assets/images/chizmalar/chizma1.webp";
import p2a from "../../assets/images/chizmalar/chizma2.webp";
import p3a from "../../assets/images/chizmalar/chizma3.webp";
import p4a from "../../assets/images/chizmalar/chizma4.webp";
import p5a from "../../assets/images/chizmalar/chizma5.webp";
import p6a from "../../assets/images/chizmalar/chizma6.webp";
import p7a from "../../assets/images/chizmalar/chizma7.webp";
import p8a from "../../assets/images/chizmalar/chizma8.png";
import p9a from "../../assets/images/chizmalar/chizma9.png";
import p10a from "../../assets/images/chizmalar/chizma10.png";

import p1b from "../../assets/images/projects/1.webp";
import p2b from "../../assets/images/projects/2.webp";
import p3b from "../../assets/images/projects/3.webp";
import p4b from "../../assets/images/projects/4.webp";
import p5b from "../../assets/images/projects/5.webp";
import p6b from "../../assets/images/projects/6.webp";
import p7b from "../../assets/images/projects/7.webp";
import p8b from "../../assets/images/projects/8.webp";
import p9b from "../../assets/images/projects/9.webp";
import p10b from "../../assets/images/projects/10.webp";

const images = [
  { img1: p1a, img2: p1b },
  { img1: p2a, img2: p2b },
  { img1: p3a, img2: p3b },
  { img1: p4a, img2: p4b },
  { img1: p5a, img2: p5b },
  { img1: p6a, img2: p6b },
  { img1: p7a, img2: p7b },
  { img1: p8a, img2: p8b },
  { img1: p9a, img2: p9b },
  { img1: p10a, img2: p10b },
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
