import { useState } from "react";
import Scoreboard from "./Scoreboard";
import '../styles/Header.css'

export default function Header(props){
    return(
        <div className="header">
            <h1>Memory Card Game</h1>
            <Scoreboard />
        </div>
    )
}