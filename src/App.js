import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./App.css";
import heroesObject from "./components/heroesObject";
import PlayArea from "./components/PlayArea";

function App() {
    const [heroesChoseByPlayer, setHeroesChoseByPlayer] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [level, setLevel] = useState(0);
    return (
        <PlayArea />
    );
}

export default App;
