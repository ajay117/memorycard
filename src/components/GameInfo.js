function GameInfo(props) {
    return (
        <div>
            <p>Score: {props.score}</p>
            <p>High Score: {props.highScore}</p>
            <p>Level</p>
        </div>
    );
}

export default GameInfo;