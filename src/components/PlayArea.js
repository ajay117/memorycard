// import { useState } from "react";
// import heroesObject from "./heroesObject";
import GameWon from "./GameWon";

function PlayArea(props) {
    let addHeroes = props.heroes.map(hero => 
        <div data-name={hero.name} onClick={props.clicked} key={hero.name}>
          <img data-name={hero.name} src={hero.src}  alt= {hero.name} />
          <p data-name={hero.name}>{hero.name}</p>
        </div>
    );
    return (
        <div className="hero-container">
                {(props.score === 5) ? <GameWon /> : addHeroes};
        </div>
    );
}

export default PlayArea;