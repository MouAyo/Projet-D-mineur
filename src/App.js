import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "./composants/Grid";
import Score from "./composants/Score";
import Title from "./images/title.png";
import Title2 from "./images/title-x2.png";
import Popup from "./composants/Popup";
import packageJson from "../package.json";

let interval = null;
let timer = 0;

function App() {
  const [game, setGame] = useState(0); // 0 = jeu en attente, 1 = jeu démarré, 2 = gagné, -1 = perdu, 3 = redémarrer pour changer de niveau
  const [bombLeft, setBombLeft] = useState(0);
  const [secElapsed, setSecElapsed] = useState(0);
  const [smiley, setSmiley] = useState(1);
  const [theme, setTheme] = useState("theme");
  const [menuOpen, setMenuOpen] = useState(false);
  const [level, setLevel] = useState("beginner");
  const [showInfo, setShowInfo] = useState(false);

  const version = packageJson.version;

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideMenu);
  }, []);

  useEffect(() => {
    if (game === 1) {
      startTimer();
    } else if (game === 2 || game === -1) {
      stopTimer();
    } else if (game === 3) {
      stopTimer();
      setSmiley(1);
      setBombLeft(0);
      setSecElapsed(0);
      setGame(0);
    }
  }, [game]);

  useEffect(() => {
    if (smiley === 1) {
      if (game === 2) {
        setSmiley(4);
      } else if (game === -1) {
        setSmiley(3);
      }
    }
  }, [smiley]);

  const onStartButton = () => {
    stopTimer();
    setSmiley(1);
    setBombLeft(0);
    setSecElapsed(0);
    setGame(0);
  };

  const incTimer = () => {
    timer++;
    setSecElapsed(timer);
  };

  const startTimer = () => {
    timer = 0;
    interval = setInterval(() => {
      incTimer();
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval);
    timer = 0;
  };

  const clickOutsideMenu = e => {
    if (
      !e.target.className.includes("theme-menu-item") &&
      !e.target.className.includes("theme-menu") &&
      !e.target.className.includes("theme-menu-ul")
    ) {
      setMenuOpen(false);
    }
  };

  return (
    <div className={theme + "-app disable-selection"}>
      <div className={theme + "-window-outer"}>
        <div className={theme + "-window-title"}>
          <div
            className="invisible-menu"
            onClick={event => {
              setMenuOpen(!menuOpen);
            }}
          ></div>
          {menuOpen && (
            <div className="theme-menu">
              <ul className="theme-menu-ul">
                
                <hr />
                <div className="desktop-only">
                  <li
                    className={level === "beginner" ? "theme-menu-item select" : "theme-menu-item"}
                    onClick={() => {
                      setMenuOpen(false);
                      setLevel("beginner");
                    }}
                  >
                    Niveau débutant
                  </li>
                  <li
                    className={level === "intermediate" ? "theme-menu-item select" : "theme-menu-item"}
                    onClick={() => {
                      setMenuOpen(false);
                      setLevel("intermediate");
                    }}
                  >
                    Niveau intermédiaire
                  </li>
                  <li
                    className={level === "expert" ? "theme-menu-item select" : "theme-menu-item"}
                    onClick={() => {
                      setMenuOpen(false);
                      setLevel("expert");
                    }}
                  >
                    Niveau expert
                  </li>
                  <hr />
                </div>
                <li
                  className="theme-menu-item"
                  onClick={() => {
                    setMenuOpen(false);
                    setShowInfo(true);
                  }}
                >
                  Informations...
                </li>
              </ul>
            </div>
          )}
          <img
            src={
              theme === "theme" && level === "beginner" ? Title :
              theme === "theme" && level === "intermediate" ? Title :
              Title2
            }
            className="theme-title-img"
            alt=""
          />
          <div className={theme + "-window-title-text"}>Démineur</div>
        </div>
        <div className={theme + "-grid-container"}>
          <Score onStartButton={onStartButton} smiley={smiley} bombLeft={bombLeft} secElapsed={secElapsed} />
          <Grid
            setSmiley={setSmiley}
            game={game}
            setGame={setGame}
            bombLeft={bombLeft}
            setBombLeft={setBombLeft}
            level={level}
          />
        </div>
      </div>
      <Popup show={showInfo} setShow={setShowInfo}>
        <div>
          <h1>Démineur</h1>
          <p>
            <u>Instructions :</u>
            <br />
            Click gauche pour découvrir une case.
            <br />
            Click droit pour poser ou enlever un drapeau. <br />
            Vous disposez de 3 niveaux .
          </p>
          
          <p>
            <small>&copy; Marouane MARHRANI - Ayoub MOUADIL \ B3 DEV</small>
          </p>
        </div>
      </Popup>
    </div>
  );
}

export default App;
