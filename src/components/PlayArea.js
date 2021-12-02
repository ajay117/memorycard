import { useState } from "react";
import heroesObject from "./heroesObject";
import GameWon from "./GameWon";

function PlayArea(props) {
    const heroes = [heroesObject[0], heroesObject[1]];
    const [score, setScore] = useState(0);
    const clicked = () => {
        setScore(score + 1);
    }
    let addHeroes = heroes.map(hero => 
        <img src={hero.src} onClick={clicked} alt= {hero.name} key={hero.name} />
    );
    return (
        <div>
            <p>Score: {score}</p>
            <p>High Score: </p>
            <p>Level</p>
            <div>
                {(score === 5) ? <GameWon /> : addHeroes};
            </div>
        </div>
    );
}

export default PlayArea;