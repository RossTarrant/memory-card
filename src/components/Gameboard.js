import { cards } from "./data"
import '../styles/Gameboard.css'

export default function Gameboard(props){

    const formattedCards = cards.map( card => 
        <div className="card" key={card.id}>
            <h3>{card.text}</h3>
            <img src="https://media.pitchfork.com/photos/63ee3b25a6c6ccc33ce86c05/1:1/w_600/Skrillex-Quest-for-Fire.jpg"/>
        </div>
    )

    return(
        <div className="gameboard">
            <div className="cards">
                {formattedCards}
            </div>
        </div>
        
    )
}