import Logo from "./../assests/KenmoreLogoDark.png";

import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbarcontainer">
      <div className="imagecont">
        <img src={Logo} className="logoimage" />
      </div>
    </div>
  );
}

export default Navbar;
