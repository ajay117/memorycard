import { useEffect } from "react"; 
// import heroesObject from "./heroesObject";
import GameWon from "./GameWon";

function PlayArea(props) {
    useEffect(() => {
        let heroContainer = document.querySelector('.hero-container');
        let fadeEffect = setTimeout(() => {
                             heroContainer.classList.add('full-opacity');
                         },300);
        return () => {
            heroContainer.classList.remove('full-opacity');
            clearTimeout(fadeEffect);
        }
    });
    let addHeroes = props.heroes.map(hero => 
        <div className="hero" data-name={hero.name} onClick={props.clicked} key={hero.name}>
          <img className="hero-img" data-name={hero.name} src={hero.src}  alt= {hero.name} />
          <p className="hero-name" data-name={hero.name}>{hero.name}</p>
        </div>
    );
    return (
        <div className="hero-container">
                {(props.score === 5) ? <GameWon /> : addHeroes};
        </div>
    );
}

export default PlayArea;