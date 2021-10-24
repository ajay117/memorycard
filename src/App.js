// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import "./App.css";
import heroesObject from "./components/heroesObject";

function App() {
	let randomIndex = Math.floor(Math.random() * 16);
	const [isGameOver, setIsGameOver] = useState(false);
	const [image, setImage] = useState(heroesObject[randomIndex]);
	const [clickedPictures, setClickedPictures] = useState([]);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	let generateRandomImage = () => {
		randomIndex = Math.floor(Math.random() * 16);
		setImage(heroesObject[randomIndex]);
	};

	let firstTimeClickingIt = () => {
		if (clickedPictures.indexOf(image.name) === -1 && !isGameOver) {
			setClickedPictures((clickedPictures) => [...clickedPictures, image.name]);
			generateRandomImage();
			setScore(score + 1);
		} else {
			if (highScore < score) setHighScore(score);
			setIsGameOver(true);
			alert("You Lose");
		}
	};

	let alreadyClicked = () => {
		if (clickedPictures.indexOf(image.name) !== -1) {
			generateRandomImage();
			setScore(score + 1);
		} else alert("You Lose");
	};

	let playAgain = () => {
		setIsGameOver(false);
		setScore(0);
		setClickedPictures([]);
		generateRandomImage();
	};

	return (
		<div>
			<p>Score:{score}</p>
			<p>High Score:{highScore}</p>
			<p
				style={{
					textAlign: "center",
					fontWeight: "600",
					fontSize: "30px",
				}}
			>
				Hero: {image.name}
			</p>
			<div>
				<img src={image.src} alt={image.name}></img>
			</div>
			<button disabled={isGameOver} onClick={firstTimeClickingIt}>
				First Time{" "}
			</button>
			<button disabled={isGameOver} onClick={alreadyClicked}>
				Second Time
			</button>
			<button onClick={playAgain}>Play Again</button>
		</div>
	);
}

export default App;
