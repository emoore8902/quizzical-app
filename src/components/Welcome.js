function Welcome(props) {
    return (
        <div className="welcome">
            <h1 className="welcome-title">Quizzical</h1>
            <p className="welcome-sub-title">Test your knowledge about the whole world!</p>
            <button onClick={props.startNewGame} className="welcome-start">Start quiz</button>
        </div>
    )
}

export default Welcome