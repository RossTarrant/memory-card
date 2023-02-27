import { useState } from "react";
import { cards } from "./data"
import '../styles/Gameboard.css'

export default function Gameboard({increaseScore, resetScore}){

    const [selectedCards, setSelectedCards] = useState([]);

    const onCardClick = (id) => {
        if(selectedCards.includes(id)){
            resetScore();
            setSelectedCards([]);
        }
        else{
            increaseScore();
            let x = selectedCards.concat(id);
            setSelectedCards(x);
        }

    }

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
            <div className="card" key={card.id} onClick={ () => onCardClick(card.id)}>
                <h2>{card.text}</h2>
                <img alt="" src={card.url}/>
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