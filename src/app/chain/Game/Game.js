import React from "react";
import Shark from "../../../assets/sharkgif.png";
import "./game.css";

export default function Game() {
  return (
    <div className="parentDiv">
      <p className="text">
        Want to play a <br /> <span className="specialText">Valentines</span>
        <br /> Game?
      </p>
      <div className="down">
        <div className="btnGroup">
          <button className="button">PLAY 3 </button>
          <button className="button">No.....</button>
        </div>
        <img className="image" src={Shark} alt="Shark" />
      </div>
    </div>
  );
}
