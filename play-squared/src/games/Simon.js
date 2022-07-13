import React, { useState, useEffect } from 'react'
import { CreateVariables } from '../styled-components/styles'
function Simon() { 
    const initialState = {
        boardSize: 16,
        chosenSquare: 2,
        round: 1,
        
    }

    const [randomSquareState, setFormState] = useState(initialState)
    const placeRandomSquare = () => {
        setFormState({
            boardSize: 16,
            chosenSquare: Math.floor(Math.random() * randomSquareState.boardSize),
            round: randomSquareState.round + 1
        })
    }
    console.log()
    return (
        <div>
        <div className='medium-board'>
            {CreateVariables().map((Item, index) =>  (randomSquareState.chosenSquare === index ? <Item id={index} simon flash/> : <Item id={index} />)
            
            )}
        </div>
        <button onClick={placeRandomSquare}>Start Round {randomSquareState.round}</button>
        </div>
    )
}

export default Simon