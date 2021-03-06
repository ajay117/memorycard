function GameOver(props) {
    return (
        <div className="game-over">
            <p className="game-result">Game Over</p>
            <p>Best Score: {props.highScore}</p>
            <p>Score: {props.score}</p>
            <p>Level: {props.level}</p>
        </div>
    );
}

export default GameOver;