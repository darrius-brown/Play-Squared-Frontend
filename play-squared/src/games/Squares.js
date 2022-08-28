import React, { useState, useEffect } from 'react'
import { CreateVariables } from '../styled-components/styles'
import audio from '../sounds/1.mp3'
import {Howl, Howler} from 'howler'
import Button from 'react-bootstrap/Button'


function Squares({ accessToken, userSignedIn }) {
    const gameNumbers = {
        1: 2,
        2: 4,
        3: 9,
        4: 16,
        5: 25,
        6: 36,
        7: 49,
        8: 64, 
        9: 81, 
        10: 100,
        11: 121,
        12: 144,
        13: 169,
        14: 196,
        15: 225,
        16: 256,
        17: 289,
        18: 324,
        19: 361,
        20: 400,
        21: 441,
        22: 484,
        23: 529,
        24: 576,
        25: 625,
        26: 676,
        27: 729,
        28: 784,
        29: 841,
        30: 900
    }
    const soundPlay = (src) => {
        const sound = new Howl({
            src
        })
        sound.play()
    }
    Howler.volume(1.0)
    const initialState = {
        user_string: userSignedIn ? userSignedIn : "unknown"
      }
    let indexesInPlay = []
    let test = [1]
    const [boardState, setBoardState] = useState(9)
    const [numbersState, setNumbersState] = useState([])
    const [scoreState, setScoreState] = useState(0)
    const [hiddenState, setHiddenState] = useState(false)
    const [squareState, setSquareState] = useState(null)

    const audioClip = {sound: audio, label: 'audio'}
    const changeBoard = (gridValue) => {
        setBoardState(
            gridValue
        )
    }
    const hideButton = () => {
        setHiddenState(true)
    }

    const squareClicked = (squareClicked) => {

    }

    const startGame = async () => {
        let needNewNumber = false
        for (let i = 0; i < Math.floor(boardState / 2); i++) {
        let indexInPlay = Math.floor(Math.random() * 30)
        if(indexesInPlay.includes(indexInPlay)) {
            needNewNumber = true
        } else {
            indexesInPlay.push(indexInPlay)
        }
        while (needNewNumber) {
            let newNumber = Math.Floor(Math.random() * Math.random() * 30  )
            if(!indexesInPlay.includes(newNumber)) {
                needNewNumber = false
                indexesInPlay.push(newNumber)
            }
        }
        }
        console.log(4)
        console.log(gameNumbers[indexesInPlay[1]])
        console.log(gameNumbers[indexesInPlay[2]])
        console.log(gameNumbers[indexesInPlay[3]])
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
                {CreateVariables(boardState).map((Item, index) => (index < Math.floor(boardState / 2) ? <Item id={index} squaresInt > {numbersState[index]}</Item> : <Item squaresSquare id={index} onClick={e => squareClicked(e.target.id)} > a</Item>)
                )}
            </div>
            <h3>Score: {scoreState}</h3>
            <button className={hiddenState === true ? 'hidden' : 'start-game'} onClick={() => { startGame(); hideButton(); }}> Start Game </button>
        </div>
  )
}

export default Squares