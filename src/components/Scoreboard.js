import '../styles/Scoreboard.css'

export default function Scoreboard(props){

    const {score, bestScore} = props

    return(
        <div className="scoreboard">
            <h2>Current Score: {score}</h2>
            <h2>Best Score: {bestScore}</h2>
        </div>
    )
}