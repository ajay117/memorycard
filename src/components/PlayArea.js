// import { useState } from "react";
// import heroesObject from "./heroesObject";
import GameWon from "./GameWon";

function PlayArea(props) {
    let addHeroes = props.heroes.map(hero => 
        <img src={hero.src} onClick={props.clicked} alt= {hero.name} key={hero.name} />
    );
    return (
        <div>
            <p>Score: {props.score}</p>
            <p>High Score: </p>
            <p>Level</p>
            <div>
                {(props.score === 5) ? <GameWon /> : addHeroes};
            </div>
        </div>
    );
}

export default PlayArea;