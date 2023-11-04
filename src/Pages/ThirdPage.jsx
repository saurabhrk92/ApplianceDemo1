import React from "react";
import "./Style.css";
import image from "./../assests/image.png";
import Faq from "./Faq";
import logo from "./../assests/KenmoreLogoDark.png";
function ThirdPage() {
  return (
    <div className="containerpagetwo">
      <div className="contanerinpage3">
        <div className="contanerinpage3title1">
          Customer Support:{" "}
          <span style={{ color: "#219EBC" }}>
            Your Air Purifier, Our Priority
          </span>
        </div>
        <div className="contanerinpage3title2" style={{ fontSize: "15px" }}>
          Model #:PM4030 Serial #: 01938239938
        </div>
        <div className="contanerinpage3title2">
          Welcome to our{" "}
          <span style={{ color: "#219EBC" }}>Air Purifier Support Center!</span>{" "}
          We're here to help you maintain peak performance for your air
          purifier.
        </div>
      </div>
      <Faq
        q="How often should I replace the filters in my air purifier?"
        a="Typically, every 3 to 6 months, but it depends on usage and filter type. Refer to your user manual for specific guidance."
      />
      <Faq
        q="My air purifier is making a strange noise. What should I do?"
        a="Check for loose parts or debris in the unit. If the issue persists, contact our support for further assistance.
"
      />

      <Faq
        q="Can I use my air purifier in a larger room than recommended?"
        a="It’s best to follow the manufacturer’s room size recommendations for optimal performance. Using it in a larger room may reduce its effectiveness.
        "
      />

      <Faq
        q="Can I clean the filters instead of replacing them to save money?"
        a="Most filters are not washable or reusable. Attempting to clean them may damage the filter and reduce air purification efficiency. It’s generally recommended to replace them as directed.
        "
      />
      <div className="testcontt">
        <div className="accesss">Contact Support</div>
        <div className="accesss11">Chat with support</div>
      </div>
    </div>
  );
}

export default ThirdPage;
