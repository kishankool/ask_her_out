import React from "react";
import Shark from "../../assets/sharkgif.png";
import styles from './game.module.css' 

export default function Game() {
  return (
    <div className={styles.parentDiv}>
        <p className="text">
        Want to play a  <span className="special-text">Valentines</span> Game?
        </p>
      <img src={Shark} alt="Shark" />
    </div>
  );
}
