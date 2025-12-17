import React from "react";
import { Card } from "react-bootstrap";

const ServiceItem = ({ service, currentLang }) => {
  return (
    <Card
      className="h-100 text-center p-4 rounded-3 shadow-sm bg-white"
      style={{
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
      }}
    >
      <div style={{ fontSize: "3rem" }} className="mb-3">
        {service.icon}
      </div>

      <h5 className="fw-semibold mb-2">
        {service.title[currentLang]}
      </h5>

      <p className="text-muted">
        {service.desc[currentLang]}
      </p>
    </Card>
  );
};

export default ServiceItem;
