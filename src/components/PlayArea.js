// import { useState } from "react";
import heroesObject from "./heroesObject";

function PlayArea(props) {
    const heroes = [heroesObject[0], heroesObject[1]];
    let addHeroes = heroes.map(hero => 
        <img src={hero.src} alt= {hero.name} />
    );
    return (
        <div>
            {addHeroes};
        </div>
    );
}

export default PlayArea;