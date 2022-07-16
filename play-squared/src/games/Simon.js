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

    const timeout = (delay, history) => {
        return new Promise( res => setTimeout(setSquareState({
            boardSize: 16,
            chosenSquare: history,
            round: squareState.round,
        }), delay ))
    }
    const timeout2 = (delay) => {
        return new Promise( res => setTimeout(setSquareState({
            boardSize: 16,
            chosenSquare: null,
            round: squareState.round,
        }), delay ))
    }
    const historyPlacement = async (history) => {
        for(let i = 0; i <=history.length; i++) {
            console.log('running for loop')
            await timeout(1000, history[i])
            await timeout2(1000)
            // await setTimeout(() => {
            //     setSquareState({
            //         boardSize: 16,
            //         chosenSquare: history[i],
            //         round: squareState.round,
            //     })
            // }, 1000)
            // await setTimeout(() => {
            //     setSquareState({
            //         boardSize: 16,
            //         chosenSquare: null,
            //         round: squareState.round,
            //     })
            // }, 1000)
            console.log(history[i] + " should be in array")
        }
    }
    
    const placeSquare = () => {
        // if(squareStateHistory.length !== 0) {
        //     historyPlacement(squareStateHistory)
        // } else {
        //     console.log('No History!')
        // }
        const newSquare = Math.floor(Math.random() * squareState.boardSize)
        setSquareState({
            boardSize: squareState.boardSize,
            chosenSquare: newSquare,
            round: squareState.round + 1,
        })
        const newArray = [...squareStateHistory, newSquare]
        setSquareStateHistory(newArray)
        setTimeout(() => {
            setSquareState({
                boardSize: squareState.boardSize,
                chosenSquare: null,
                round: squareState.round + 1,
            })
        }, 1000)
        console.log(squareStateHistory)
    }
    const startRound =  () => {
        let myHistory = historyPlacement(squareStateHistory)
        console.log(myHistory)
        if(squareStateHistory.length !== 0) {
            historyPlacement(squareStateHistory)
        } else {
            console.log('No History!')
        }
        placeSquare()
    }
    return (
        <div>
            <div className='medium-board'>
                {CreateVariables().map((Item, index) => (squareState.chosenSquare === index ? <Item id={index} simon /> : <Item id={index} />)
                )}
            </div>
            <button onClick={startRound}>Start Round {squareState.round}</button>
        </div>
    )
}

export default Simon

//execute a func that goes through new array (for loop)