import React, { useState } from 'react'
import { CreateVariables } from '../styled-components/styles'
import Button from 'react-bootstrap/Button'
import audio from '../sounds/1.mp3'
import {Howl, Howler} from 'howler'
import { postScore } from '../api/Api'
function Simon({ accessToken, userSignedIn }) {

    const [squareState, setSquareState] = useState(null)
    const [boardState, setBoardState] = useState(9)
    const newSquare = Math.floor(Math.random() * boardState)
    const [squareStateHistory, setSquareStateHistory] = useState([newSquare])
    const [solutionState, setSolutionState] = useState(squareStateHistory)
    const [hiddenState, setHiddenState] = useState(false)
    const [scoreState, setScoreState] = useState(0)
    const [canClick, setCanClick] = useState(false)
    const audioClip = {sound: audio, label: 'audio'}
    
    const soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }
    Howler.volume(1.0)

    const changeBoard = (gridValue) => {
        setBoardState(
            gridValue
        )
    }

    const startGame = async (newArray) => {
        setCanClick(false)
        let updatedArray = squareStateHistory
        if (newArray) {
            updatedArray = newArray
        }
        for (const square of updatedArray) {
            await placeHistory(square)
        }
        setCanClick(true)
    }

    const squareClicked = (squareClicked) => {
        if (!canClick) return
        const newArr = [...solutionState]
        const correctSquare = newArr.shift()
        soundPlay(audioClip.sound)
        setSolutionState(newArr)
        if (correctSquare == squareClicked) {
            if (newArr.length === 0) {
                const newArray = [...squareStateHistory, newSquare]
                setSquareStateHistory(newArray)
                setSolutionState(newArray)
                setScoreState(scoreState + 1)
                startGame(newArray)
            }
        } else {
            endGame() 
        }
    }

    const endGame = () => {
        console.log(userSignedIn)
        postScore({
            game: 'Simon',
            amount: scoreState,
            board: boardState,
        }, 
            accessToken)
        alert(`You scored ${scoreState}! Try again!`)
        let newGameSquare = newSquare
        setSquareStateHistory([newGameSquare])
        setSolutionState([newGameSquare])
        setHiddenState(false)
        setScoreState(0)
        setCanClick(false)
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

   

    const hideButton = () => {
        setHiddenState(true)
    }
    
    return (
        <div className='simon-game'>
            <h3 className={hiddenState === true ? 'hidden' : ''} >Choose your board size below!</h3>
            <div className={hiddenState === true ? 'hidden' : 'board-size-buttons'}>
                <Button className='board-size-button' onClick={() => changeBoard(9)}>9</Button >
                <Button className='board-size-button' onClick={() => changeBoard(16)}>16</Button>
                <Button className='board-size-button' onClick={() => changeBoard(25)}>25</Button>
            </div>
            <div className={boardState === 9 ? 'small-board' : boardState === 16 ? 'medium-board' : boardState === 25 ? 'large-board' : 'medium-board'}>
                {CreateVariables(boardState).map((Item, index) => (squareState === index ? <Item id={index} simon /> : <Item id={index} onClick={e => squareClicked(e.target.id)} />)
                )}
            </div>
            <h3>Score: {scoreState}</h3>
            <button className={hiddenState === true ? 'hidden' : 'start-game'} onClick={() => { startGame(); hideButton(); }}> Start Game </button>
        </div>
    )
}

export default Simon