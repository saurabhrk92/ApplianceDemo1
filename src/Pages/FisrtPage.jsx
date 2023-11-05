import React from "react";
import "./Style.css";
import image from "./../assests/222 1.png";
import logo from "./../assests/KenmoreLogoDark.png";
import { BsMicrosoft } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";

function FirstPage() {
  return (
    <div className="container">
      <div className="title1">Claim Your Air Purifier Card</div>

      <div>
        <img src={image} alt="image" />
      </div>
      <div className="bothbutton">
        <button
          className="button1"
          onClick={() => {
            window.location.href =
              "https://wallettest.zblocks.io?gift=4265e84d65f9e43d7a9a69f59824&hint=microsoft";
          }}
        >
          <BsMicrosoft color="#219EBC" />
          Continue with Microsoft
        </button>
        <button
          className="button1"
          onClick={() => {
            window.location.href =
              "https://wallettest.zblocks.io?gift=4265e84d65f9e43d7a9a69f59824&hint=google";
          }}
        >
          <AiOutlineGoogle color="#219EBC" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
