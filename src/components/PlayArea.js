import { useState,useEffect } from "react";
import heroesObject from "./heroesObject";

function PlayArea(props) {
    const [loadHeroesArr, setLoadHeroesArr] = useState(heroesObject[0].src);
    useEffect(() => {
        while(loadHeroesArr.length <= 5) {
            let randomNum = Math.floor(Math.random() * 17);
        }
    },[]);
    return (
        <div>
            <img src={loadHeroesArr} alt="hero" />
        </div>
    );
}

export default PlayArea;