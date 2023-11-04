import React, { useState } from "react";

import "./Style.css";
import imageone from "./../assests/image1.png";
import imagetwo from "./../assests/image2.png";
import imagethree from "./../assests/image3.png";
import logo from "./../assests/KenmoreLogoDark.png";
function SecondPage() {
  return (
    <div className="containerpagetwo">
      <div className="contanerinpage3">
        <div className="contanerinpage3title1">
          Customer Support:{" "}
          <span style={{ color: "#219EBC" }}>
            Your Air Purifier, Our Priority
          </span>
        </div>
        <div className="contanerinpage3title2">
          Welcome to our{" "}
          <span style={{ color: "#219EBC" }}>Air Purifier Support Center!</span>{" "}
          We're here to help you maintain peak performance for your air
          purifier.
        </div>
      </div>
      <div className="threimages">
        <img src={imageone} className="imageone" />
        <img src={imagetwo} className="imageone" />
        <img src={imagethree} className="imageone" />
      </div>

      <div className="testcontt">
        <div className="accesss">Access Support</div>
        <div
          className="accesss11"
          onClick={() => {
          }}
        >
          Identify my Air Purifier
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
