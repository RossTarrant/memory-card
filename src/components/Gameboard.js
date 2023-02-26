import { useEffect } from "react";
import { cards } from "./data"
import '../styles/Gameboard.css'

export default function Gameboard(props){



    const shuffleCards = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards
    }

    const getCards = () => {
        const shuffledCards = shuffleCards(cards);
        const formattedCards = shuffledCards.map( card => 
            <div className="card" key={card.id}>
                <h3>{card.text}</h3>
                <img alt="" src="https://media.pitchfork.com/photos/63ee3b25a6c6ccc33ce86c05/1:1/w_600/Skrillex-Quest-for-Fire.jpg"/>
            </div>
        )
        return formattedCards;
    }

    return(
        <div className="gameboard">
            <div className="cards">
                {getCards()}
            </div>
        </div>
        
    )
}