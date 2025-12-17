import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const translations = {
  uz: {
    sectionTitle: "Biz bilan bog'laning",
    formTitle: "Xabar yuboring",
    infoTitle: "Aloqa ma'lumotlari",
    placeholders: {
      name: "Ismingiz",
      email: "Email",
      phone: "Telefon",
      message: "Xabar",
    },
    submit: "Yuborish",
    toast: "Xabaringiz yuborildi! Biz yaqin orada aloqaga chiqamiz 🙂",
    info: [
      {
        icon: "📍",
        text: "Toshkent shahar, Amir Temur ko'chasi 107A",
        link: "https://yandex.uz/maps/10335/tashkent/",
      },
      { icon: "📞", text: "+998 71 123 45 67", link: "tel:+998711234567" },
      { icon: "✉️", text: "info@khairon.uz", link: "mailto:info@khairon.uz" },
      { icon: "⏰", text: "Dushanba – Juma: 9:00 – 18:00" },
    ],
  },

  ru: {
    sectionTitle: "Свяжитесь с нами",
    formTitle: "Отправить сообщение",
    infoTitle: "Контактная информация",
    placeholders: {
      name: "Ваше имя",
      email: "Электронная почта",
      phone: "Телефон",
      message: "Сообщение",
    },
    submit: "Отправить",
    toast: "Сообщение отправлено! Мы скоро с вами свяжемся 🙂",
    info: [
      {
        icon: "📍",
        text: "г. Ташкент, ул. Амира Темура 107A",
        link: "https://yandex.uz/maps/10335/tashkent/",
      },
      { icon: "📞", text: "+998 71 123 45 67", link: "tel:+998711234567" },
      { icon: "✉️", text: "info@khairon.uz", link: "mailto:info@khairon.uz" },
      { icon: "⏰", text: "Пн – Пт: 9:00 – 18:00" },
    ],
  },

  en: {
    sectionTitle: "Contact Us",
    formTitle: "Send a Message",
    infoTitle: "Contact Information",
    placeholders: {
      name: "Your Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
    },
    submit: "Send",
    toast: "Your message has been sent! We will contact you soon 🙂",
    info: [
      {
        icon: "📍",
        text: "107A Amir Temur Street, Tashkent",
        link: "https://yandex.uz/maps/10335/tashkent/",
      },
      { icon: "📞", text: "+998 71 123 45 67", link: "tel:+998711234567" },
      { icon: "✉️", text: "info@khairon.uz", link: "mailto:info@khairon.uz" },
      { icon: "⏰", text: "Mon – Fri: 9:00 – 18:00" },
    ],
  },
};

const Contact = ({ currentLang }) => {
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(t.toast, {
      position: "top-center",
      autoClose: 4000,
      theme: "colored",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="text-center display-4 fw-bold text-primary mb-5">
          {t.sectionTitle}
        </h2>

        <Row className="g-4">
          {/* FORM */}
          <Col xs={12} lg={6}>
            <Card className="p-4 shadow-sm border-0 rounded-3 h-100">
              <Card.Title className="fw-bold text-primary mb-4">
                {t.formTitle}
              </Card.Title>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder={t.placeholders.name}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder={t.placeholders.email}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="tel"
                    placeholder={t.placeholders.phone}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder={t.placeholders.message}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button type="submit" className="w-100 fw-semibold">
                  {t.submit}
                </Button>
              </Form>
            </Card>
          </Col>

          {/* INFO */}
          <Col xs={12} lg={6}>
            <Card className="p-4 shadow-sm border-0 rounded-3 h-100">
              <Card.Title className="fw-bold text-primary mb-4">
                {t.infoTitle}
              </Card.Title>

              {t.info.map((item, idx) => (
                <p key={idx} className="mb-2">
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      {item.icon} {item.text}
                    </a>
                  ) : (
                    <>
                      {item.icon} {item.text}
                    </>
                  )}
                </p>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>

      <ToastContainer />
    </section>
  );
};

export default Contact;
