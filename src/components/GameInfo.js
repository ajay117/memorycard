function GameInfo(props) {
    return (
        <div className="score-container">
            <div>
                <p>Score: {props.score}</p>
                <p>Level: {props.level}</p>
            </div>

            <p>High Score: {props.highScore}</p>

            {/* <p>Level</p> */}
        </div>
    );
}

export default GameInfo;