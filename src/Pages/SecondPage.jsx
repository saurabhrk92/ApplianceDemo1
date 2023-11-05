import React, { useState } from "react";

import "./Style.css";
import imageone from "./../assests/image1.png";
import imagetwo from "./../assests/image2.png";
import imagethree from "./../assests/image3.png";
import logo from "./../assests/KenmoreLogoDark.png";
import * as tga from "./../assests/TGA/tga-verifier.js";
import * as tgaURL from "https://engagetest.zblocks.io/token-gated/tga-verifier.js"

function SecondPage() {
   async function checkTrue() {
    if (await verify()) {
      window.location.assign(
        "https://kenmoreone.wastedtreasures.com/Air-Purifie-Card-3"
      );
    }
  }

  async function verify() {
    const conf = {
      code: "Z1698930066905353",
      id: "e8c9e0e6-3220-488b-8d34-5dee71b59dc1",
    };
    const response = await tga.GatedVerifier.verify(conf);
    if (response.status) {
      // response.data.verified true means user has required NFT.
      return response.data.verified;
    } else {
      console.error(response.data.errorMessage);
      return false;
    }
  }
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
            checkTrue()
          }}
        >
          Identify my Air Purifier
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
