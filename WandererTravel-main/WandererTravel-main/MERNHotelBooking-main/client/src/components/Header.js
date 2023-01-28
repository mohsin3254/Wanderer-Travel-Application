import React from "react";
import Headerimg from "../../src/images/Headerimage.svg";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className="hero">
      <div className="hero--text">
        <h3 className="hero--title">{props.title}</h3>
        <p
          className="hero--para"
          style={{
            marginRight: "25px",
            fontSize: "18px",
            letterSpacing: "1px",
            lineHeight: "26px",
            textTransform: "capitalize",
          }}
        >
          A team of devoted and experienced tourism professionals
          <br /> will provide you with the best advice and tips.
        </p>
        <Link
          to="/tour"
          className="header--link"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "15px 25px ",
            fontWeight: "bold",
            borderRadius: "22px",
          }}
        >
          Visit Tours
        </Link>
      </div>
      <img src={Headerimg} className="header--img" alt="Header" />
    </div>
  );
}
