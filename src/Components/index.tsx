import React, { useState } from "react";
import ReactLogo from "../Assest/React-icon.png";
import "../Assest/03challenge.css";

function NaveBar(props: any) {
  return (
    <nav className={props.darkMode ? "NavContainer1" : "NavContainer2"}>
      <nav className="NavigationBar">
        <img className="ReactIcon" src={ReactLogo} alt="React-log" />
        <h3>ReactFacts</h3>
      </nav>
      <div className="btn">
        <button onClick={props.toggleDarkMode}>
          {props.darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <h4 className={props.darkMode ? "H4-dark" : "H4-light"}>
        React Course - Project 1
      </h4>
    </nav>
  );
}

function Content(props: any) {
  const style = props.darkMode ? "span1" : "span2";
  return (
    <article className={props.darkMode ? "article1" : "article2"}>
      <h1 className={props.darkMode ? "h1--dark" : "h1--light"}>
        Fun fact about React
      </h1>
      <ul>
        <li>
          <span className={style}>Was first released in 2013</span>
        </li>
        <li>
          <span className={style}> Was originally created by Jorden Walke</span>
        </li>
        <li>
          <span className={style}>Has well over 1000k stars on G</span>
        </li>
        <li>
          <span className={style}>Is mainted by Facebook</span>
        </li>
        <li>
          <span className={style}>
            Powers thousand of enterprise apps, including monbile apps.
          </span>
        </li>
      </ul>
    </article>
  );
}

export default function Container() {
  const [darkMode, setDarkMode] = useState(true);
  function HandleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <div className="mainContent">
      <NaveBar darkMode={darkMode} toggleDarkMode={HandleClick} />
      <Content darkMode={darkMode} />
    </div>
  );
}
