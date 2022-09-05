import React, { useState, useEffect } from 'react'
import { CreateVariables } from '../styled-components/styles'
import audio from '../sounds/1.mp3'
import {Howl, Howler} from 'howler'
import Button from 'react-bootstrap/Button'
import { postScore } from '../api/Api'



function Squares({ accessToken, userSignedIn }) {

    const audioClip = {sound: audio, label: 'audio'}
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

    const [secondsState, setSecondsState] = useState('60')
    const [boardState, setBoardState] = useState(9)
    const [hiddenState, setHiddenState] = useState(false)
    const [selectedState, setSelectedState] = useState([])
    const [gameNumbers, setGameNumbers] = useState([])
    const [solutionNumbers, setSolutionNumbers] = useState([])
    const [solvedState, setSolvedState] = useState([])
    const halfBoard = Math.floor(boardState / 2)
    const [interval, settingInterval] = useState(null)
    let tens = 0
    let seconds = 60
    
    const changeBoard = (gridValue) => {
        setBoardState(
            gridValue
        )
    }

    const startTime  = () => {
        if(seconds === 0) {
            settingInterval(clearInterval(interval))
        }
        tens++
        if(tens > 99) {
        seconds--
        setSecondsState('0' + seconds)
        tens = 0
        }
        if(seconds > 9) {
            setSecondsState(seconds)
        }
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    
    const hideButton = () => {
        setHiddenState(true)
    }

    const startGame = async () => {
        settingInterval(setInterval(startTime, 10))
        let needNewNumber = false
        let numbersInPlay = []
        let numbersInPlaySquared = []
        for (let i = 0; i < halfBoard; i++) {
        let indexInPlay = Math.floor(Math.random() * (30) + 1)
        if(numbersInPlay.includes(indexInPlay)) {
            needNewNumber = true
        } else {
            numbersInPlay.push(indexInPlay)
            numbersInPlaySquared.push(indexInPlay * indexInPlay)
        }
        while (needNewNumber) {
            let newNumber = Math.floor(Math.random() * (30) + 1)
            if(!numbersInPlay.includes(newNumber)) {
                needNewNumber = false
                numbersInPlay.push(newNumber)
                numbersInPlaySquared.push(newNumber * newNumber)
            }
        }
        }
        let shuffledArray = shuffle(numbersInPlaySquared)
        setGameNumbers(numbersInPlay)
        setSolutionNumbers(shuffledArray)
    }

    const squareClicked = (squareClicked) => {
        const newArray = [...selectedState, parseInt(squareClicked)] 
        setSelectedState(newArray) 
        if(selectedState.length === 1) {
            if((gameNumbers[selectedState[0]] * gameNumbers[selectedState[0]])  === solutionNumbers[squareClicked - halfBoard]){
                const solutionArray = [...solvedState, selectedState[0], parseInt(squareClicked)]
                setSolvedState(solutionArray)
                soundPlay(audioClip.sound)
            }

            if((solutionNumbers[selectedState[0] - halfBoard] / gameNumbers[squareClicked])  === gameNumbers[squareClicked]){
                const solutionArray = [...solvedState, selectedState[0], parseInt(squareClicked)]
                setSolvedState(solutionArray)
                soundPlay(audioClip.sound)
            }
            console.log(solvedState.length)
            setSelectedState([])
            if(solvedState.length >= boardState - 3){
                endGame()
            }
        }
    }
    
    const endGame = () => {
        postScore({
            game: 'Squares',
            amount: secondsState,
            board: boardState,
            author: 'testing'}, 
            accessToken)
            settingInterval(clearInterval(interval))
        alert(`You scored ${secondsState}! Try again!`)
        setHiddenState(false)
        setGameNumbers([])
        setSolutionNumbers([])
        setSolvedState([])
        setSecondsState('60')
        seconds = 60
        tens = 0
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
            {CreateVariables(boardState).map((Item, index) => (
                index < halfBoard ? 
                selectedState.includes(index) ?
                <Item  squaresSelected id={index} onClick={e => squareClicked(e.target.id)}  className = {solvedState.includes(index) ? 'hidden' : ''}> {gameNumbers[index]}</Item>:
                <Item  squaresInt id={index} onClick={e => squareClicked(e.target.id)}  className = {solvedState.includes(index) ? 'hidden' : ''}> {gameNumbers[index]}</Item>:
                selectedState.includes(index) ?
                <Item squaresSelected id={index} onClick={e => squareClicked(e.target.id)} className = {solvedState.includes(index) ? 'hidden' : ''}> {solutionNumbers[index - halfBoard]}</Item> :
                <Item squaresSquare id={index} onClick={e => squareClicked(e.target.id)} className = {(solvedState.includes(index) || boardState % 2 !== 0 && index === boardState - 1)  ? 'hidden' : ''}> {solutionNumbers[index - halfBoard]}</Item>
                )
            )}
        </div>  
        <h3>Score: {secondsState}</h3>
        <button className={hiddenState === true ? 'hidden' : 'start-game'} onClick={() => { startGame(); hideButton(); }}> Start Game </button>
    </div>
  )
}

export default Squares