import React, { useState } from "react";
import "./App.css";
import heroesObject from "./components/heroesObject";
// import heroesObject from "./components/heroesObject";
import PlayArea from "./components/PlayArea";
import GameOver from "./components/GameOver";
import GameInfo from "./components/GameInfo";

function App() {
    const [isGameOver, setIsGameOver] = useState(false);
    const [level, setLevel] = useState(0);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const heroes = [];
    const [playerClickedPics, setPlayerClickedPics] = useState([]);
    
    let randomNumArr = [];
    while(randomNumArr.length < 5) {
      let randomNum = Math.floor(Math.random() * 16);
      if(!randomNumArr.includes(randomNum)) {
          randomNumArr.push(randomNum);
      } 
    }
    randomNumArr.forEach(num => {
        heroes.push(heroesObject[num]);
    })

    const clicked = (e) => {
        let heroName = e.target.dataset.name;
        if(!playerClickedPics.includes(heroName)) {
          setPlayerClickedPics([...playerClickedPics, e.target.dataset.name]);
          setScore(score + 1);
        } else {
            setIsGameOver(true);
            if(score > highScore) {
                setHighScore(score);
            }
        }
    }
    // const [heroesChoseByPlayer, setHeroesChoseByPlayer] = useState([]);
    
    return (
        <div>
            {isGameOver ? null : <GameInfo score={score}
                                    highScore={highScore}
                                    level={level}/>}
            
            {!isGameOver ? <PlayArea
                            heroes={heroes}
                            score={score} 
                            clicked={clicked} /> 
                         : <GameOver score={score} highScore={highScore} level={level} />}
        </div>
    );
}

export default App;
