import React, { useState, useEffect } from 'react'
import { CreateVariables } from '../styled-components/styles'
function Simon() {
    
    const initialState = {
        boardSize: 16,
        chosenSquare: null,
    }
    
    const [squareState, setSquareState] = useState(initialState)
    const newSquare = Math.floor(Math.random() * squareState.boardSize)
    const [squareStateHistory, setSquareStateHistory] = useState([newSquare])
    const [solutionState, setSolutionState] = useState(squareStateHistory)
    const [hiddenState, setHiddenState] = useState(false)

    const squareClicked = (squareClicked) => {
        const newArr = [...solutionState]
        const correctSquare = newArr.shift()
        setSolutionState(newArr)
        if (correctSquare == squareClicked) {
            if(newArr.length === 0) {
                const newArray = [...squareStateHistory, newSquare]
                setSquareStateHistory(newArray)
                setSolutionState(newArray)
            } 
        } else {
            alert('game over')
            let newGameSquare = newSquare
            setSquareStateHistory([newGameSquare])
            setSolutionState([newGameSquare])
            setHiddenState(false)
        }
    }
    
    const placeHistory = (square) => {
        return new Promise(resolve => {
            setSquareState({
                boardSize: 16,
                chosenSquare: square,
            })
            setTimeout(() => {
                setSquareState({
                    boardSize: 16,
                    chosenSquare: null,
                })
                setTimeout(() => {
                    resolve()
                }, 100)
            }, 1000)
        })
    }

    const startGame = async () => {
        for (const square of squareStateHistory) {
            await placeHistory(square)
        }
    }
    
    const hideButton = () => {
        setHiddenState(true)
        console.log('now hidden')
    }
   
    return (
        <div>
            <div className='medium-board'>
                {CreateVariables().map((Item, index) => (squareState.chosenSquare === index ? <Item id={index} simon /> : <Item id={index} onClick = {e => squareClicked(e.target.id)} />)
                )}
            </div>
            <button className = {hiddenState === true ? 'hidden' : 'start-game'} onClick={() => { startGame(); hideButton();}}> Start Game </button>
            <button className = {hiddenState === false ? 'hidden' : 'start-round'} onClick={() => startGame()}> Start Round </button>
        </div>
    )
}

export default Simon

//execute a func that goes through new array (for loop)