import React, { useState, useEffect } from 'react'
import { CreateVariables } from '../styled-components/styles'
function Simon() { 
    const initialState = {
        boardSize: 16,
        chosenSquare: null,
        round: 1,
        previousSquares: []
        
    }
    const [randomSquareState, setFormState] = useState(initialState)
    const placeSquare = () => {
        setFormState({
            boardSize: 16,
            chosenSquare: Math.floor(Math.random() * randomSquareState.boardSize),
            round: randomSquareState.round + 1,
            previousSquares: randomSquareState.previousSquares.push(randomSquareState.chosenSquare)
        })
        const timeout = setTimeout(() => {
        setFormState({
            boardSize: 16,
            chosenSquare: null,
            round: randomSquareState.round + 1,
            previousSquares: randomSquareState.previousSquares
        })
        }, 3000)
        console.log(randomSquareState.chosenSquare)
    }   
    
    return (
        <div>
        <div className='medium-board'>
            {CreateVariables().map((Item, index) =>  (randomSquareState.chosenSquare === index ? <Item id={index} simon /> : <Item id={index} />)
            )}
        </div>
        <button onClick={placeSquare}>Start Round {randomSquareState.round}</button>
        </div>
    )
}

export default Simon