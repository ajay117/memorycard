import React, { useState } from "react";
import "./App.css";
import heroesObject from "./components/heroesObject";
// import heroesObject from "./components/heroesObject";
import PlayArea from "./components/PlayArea";

function App() {
    const [score, setScore] = useState(0);
    const heroes = [heroesObject[0], heroesObject[1]];
    const clicked = () => {
        setScore(score + 1);
    }
    // const [heroesChoseByPlayer, setHeroesChoseByPlayer] = useState([]);
    // const [highScore, setHighScore] = useState(0);
    // const [level, setLevel] = useState(0);
    return (
        <PlayArea heroes={heroes} score={score} clicked={clicked} />
    );
}

export default App;
