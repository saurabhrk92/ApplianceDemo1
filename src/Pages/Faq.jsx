import React, { useState } from "react";
import "./Style.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
function Faq(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="faqcontainer">
      <div
        className="questioniscoll"
        style={{ borderBottom: show ? "2px rgba(33, 37, 41, 0.70) solid" : "" }}
      >
        <div className="question" style={{ fontWeight: show ? "600" : "500" }}>
          {props.q}
        </div>
        <div onClick={() => setShow(!show)}>
          {!show ? (
            <MdOutlineKeyboardArrowDown color="#212529" size={30} />
          ) : (
            <MdOutlineKeyboardArrowUp color="#212529" size={30} />
          )}
        </div>
      </div>
      <div className="answer">{show ? props.a : ""}</div>
    </div>
  );
}

export default Faq;
