import React from 'react'
import PlayerCardFront from './PlayerCardFront'
import PlayerCardBack from './PlayerCardBack'
import './../rotatable-card.css'
import { useState } from 'react'

const PlayerCard = (props) => {
    const player = props.player;
    const [isFlipped, setIsFlipped] = useState(false);
    function rotateHandler() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div class="flip-card">
            <div class={"flip-card-inner "+ (isFlipped?"rotate":"rotate-forward")}>
                <PlayerCardFront class="flip-card-front" player={player} onRotate={rotateHandler}/>
                  
                <PlayerCardBack class="flip-card-back" player={player} onRotate={rotateHandler}/>
            </div>
        </div>
    )
}

export default PlayerCard
