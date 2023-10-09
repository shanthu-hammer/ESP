import React from "react";
import "../contact/Contact.css";
import { useParams, useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleBackClick = () => {
    navigate("/dashboard/" + id);
  };

  return (
    <div className="contact">
      <div className="contact_header">
        <div className="contact_header_name">Contact Page</div>
        <div
          className="contact_header_back"
          onClick={() => {
            handleBackClick();
          }}
        >
          Back{" "}
        </div>
      </div>
    </div>
  );
}

export default Contact;
