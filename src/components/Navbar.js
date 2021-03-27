import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "../css/Navbar.css";
const Navbar = () => {
  const style = {
    background: "linear-gradient(90deg, #f27a54 0%, #a154f2 186.42%)",
    margin: "5px",
    cursor: "pointer",
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <FacebookIcon style={style} />
        <TwitterIcon style={style} />
      </div>
      <div className="navbar__heading">
        <img src="../public/logo192.png" alt="" />
        <h1>News</h1>
      </div>
      <div className="navbar__link">
        <h4>Home</h4>
        <h4>Work</h4>
        <h4>About</h4>
        <h4>Blog</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
};

export default Navbar;
