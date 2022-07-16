import React, { useState, useEffect } from 'react'
import { CreateVariables } from '../styled-components/styles'
function Simon() {
    const initialState = {
        boardSize: 16,
        chosenSquare: null,
        round: 1,
        previousSquares: []

    }
    const [squareState, setSquareState] = useState(initialState)
    const [squareStateHistory, setSquareStateHistory] = useState([])

    const removeSquare = () => {
        setTimeout(() => {
            setSquareState({
                boardSize: 16,
                chosenSquare: null,
                round: squareState.round + 1,
            })
        }, 1000)
    }

    const placeSquare = () => {
        const newSquare = Math.floor(Math.random() * squareState.boardSize)
        setSquareState({
            boardSize: 16,
            chosenSquare: newSquare,
            round: squareState.round + 1,
        })
        const newArray = [...squareStateHistory, newSquare]
        setSquareStateHistory(newArray)
        // changePrevSqrArr()
        // removeSquare()
    }
    const kingFunction  = () => {
        setTimeout(placeSquare, 10);
        setTimeout(removeSquare, 30);
    }

    return (
        <div>
            <div className='medium-board'>
                {CreateVariables().map((Item, index) => (squareState.chosenSquare === index ? <Item id={index} simon on /> : <Item id={index} />)
                )}
            </div>
            <button onClick={kingFunction}>Start Round {squareState.round}</button>
        </div>
    )
}

export default Simon

//execute a func that goes through new array (for loop)