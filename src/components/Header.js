import Scoreboard from "./Scoreboard";
import '../styles/Header.css'

export default function Header(props){
    return(
        <div className="header">
            <h1>Formula 1 Memory Card Game</h1>
            <Scoreboard score={props.score} bestScore={props.bestScore}/>
        </div>
    )
}