import React from "react";
import { Link } from "react-router-dom";
import classes from "./Colors.module.css";

function Colors(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/homie"></Link>
          </li>
        </ul>
      </nav>
      <div className={classes.img}>
        <h2>colors</h2>
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="img"
        />
        <h2>colors</h2>
        <h4>Special price ₹39</h4>
        <p>ratings 5 star</p>
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          alt="img"
        />
        <h2>black</h2>
        <h4>Special price ₹38</h4>
        <p>ratings 5 star</p>
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          alt="img"
        />
        <h2>yellow</h2>
        <h4>Special price ₹34</h4>
        <p>ratings 5 star</p>
      </div>
    </div>
  );
}

export default Colors;
