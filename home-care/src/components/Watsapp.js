import React from "react";
import WatsappIcon from "../images/icons/social-media/whatsapp-icon.png";

export default function Watsapp() {
  const phoneNumber = "9888559955";
  const message = "I Want Home care service";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <a
        className="watsapp-icon"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={WatsappIcon} alt="wats app icon"/>
      </a>
    </>
  );
}
