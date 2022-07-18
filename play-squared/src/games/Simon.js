import React, { useState} from 'react'
import { CreateVariables } from '../styled-components/styles'
function Simon() {
    
    const [squareState, setSquareState] = useState(null)
    const [boardState, setBoardState] = useState(9)
    const newSquare = Math.floor(Math.random() * boardState)
    const [squareStateHistory, setSquareStateHistory] = useState([newSquare])
    const [solutionState, setSolutionState] = useState(squareStateHistory)
    const [hiddenState, setHiddenState] = useState(false)
    const [scoreState, setScoreState] = useState(0)
    
    const changeBoard = (gridValue) => {
        setBoardState(
            parseInt(gridValue)
        )
    }
    const squareClicked = (squareClicked) => {
        const newArr = [...solutionState]
        const correctSquare = newArr.shift()
        setSolutionState(newArr)
        if (correctSquare == squareClicked) {
            if(newArr.length === 0) {
                const newArray = [...squareStateHistory, newSquare]
                setSquareStateHistory(newArray)
                setSolutionState(newArray)
                setScoreState(scoreState + 1)
            } 
        } else {
            alert('game over')
            //Push the score into the database
            let newGameSquare = newSquare
            setSquareStateHistory([newGameSquare])
            setSolutionState([newGameSquare])
            setHiddenState(false)
        }
    }
    
    const placeHistory = (square) => {
        return new Promise(resolve => {
            setSquareState(
                square
            )
            setTimeout(() => {
                setSquareState(   
                    null
                )
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
            {/* <button onClick = {e => changeBoard(e.target.value)}>9</button>
            <button onClick = {e => changeBoard(e.target.value)}>16</button>
            <button onClick = {e => changeBoard(e.target.value)}>25</button> */}
            <div className={boardState === 9 ? 'small-board' : boardState === 16 ? 'medium-board' : boardState === 25 ? 'large-board' : 'medium-board'}>
                {CreateVariables(boardState).map((Item, index) => (squareState === index ? <Item id={index} simon /> : <Item id={index} onClick = {e => squareClicked(e.target.id)} />)
                )}
            </div>
            <button className = {hiddenState === true ? 'hidden' : 'start-game'} onClick={() => { startGame(); hideButton();}}> Start Game </button>
            <button className = {hiddenState === false ? 'hidden' : 'start-round'} onClick={() => startGame()}> Start Round </button>
            <h3>Score: {scoreState}</h3>
            
        </div>
    )
}

export default Simon

//execute a func that goes through new array (for loop)