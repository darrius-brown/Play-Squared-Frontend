import React, { useState, useEffect } from 'react'
import { GameSquare1, GameSquare2, GameSquare3, GameSquare4, GameSquare5, GameSquare6, GameSquare7, GameSquare8, GameSquare9, GameSquare10, GameSquare11, GameSquare12, GameSquare13, GameSquare14, GameSquare15, GameSquare16 } from '../styled-components/styles'

function Simon() {
    let boardSize = 16
    const initialState = {
        chosenSquare: 0,
        round: 1,
        
    }
    const [randomSquareState, setFormState] = useState(initialState)
    const placeRandomSquare = () => {
        setFormState({
            chosenSquare: `GameSquare${Math.floor(Math.random() * boardSize + 1)}`,
            round: randomSquareState.round + 1
        })
    }

    // const FlashSquare = (squareNumber) => {
    //     return <GameSquare1 simon/>
//         const timerRef = 'timeout';
// const sendMessage = (e) => {
//   e.preventDefault();
//   timerRef.current = setTimeout(() => alert('Hey ??'), 1000);
// }

// useEffect(() => {
//   // Clear the interval when the component unmounts
//   return () => clearTimeout(timerRef.current);
// }, []);
//         setTimeout(() => {<GameSquare1 />}, 1500)
    // }   
    const hello = () => (
        console.log('hello')
    )
    return (
        <div>
        <div className='medium-board'>
            {randomSquareState.chosenSquare === 'GameSquare1' ? <GameSquare1 simon  onClick ={hello()} onBeforePrint={setTimeout(() => {<GameSquare1 />}, 3000)}/> : <GameSquare1 onClick ={<GameSquare1 simon/> }/>}
            {randomSquareState.chosenSquare === 'GameSquare2' ? <GameSquare2 simon/> : <GameSquare2 />}
            {randomSquareState.chosenSquare === 'GameSquare3' ? <GameSquare3 simon/> : <GameSquare3 />}
            {randomSquareState.chosenSquare === 'GameSquare4' ? <GameSquare4 simon/> : <GameSquare4 />}
            {randomSquareState.chosenSquare === 'GameSquare5' ? <GameSquare5 simon/> : <GameSquare5 />}
            {randomSquareState.chosenSquare === 'GameSquare6' ? <GameSquare6 simon/> : <GameSquare6 />}
            {randomSquareState.chosenSquare === 'GameSquare7' ? <GameSquare7 simon/> : <GameSquare7 />}
            {randomSquareState.chosenSquare === 'GameSquare8' ? <GameSquare8 simon/> : <GameSquare8 />}
            {randomSquareState.chosenSquare === 'GameSquare9' ? <GameSquare9 simon/> : <GameSquare9 />}
            {randomSquareState.chosenSquare === 'GameSquare10' ? <GameSquare10 simon/> : <GameSquare10 />}
            {randomSquareState.chosenSquare === 'GameSquare11' ? <GameSquare11 simon/> : <GameSquare11 />}
            {randomSquareState.chosenSquare === 'GameSquare12' ? <GameSquare12 simon/> : <GameSquare12 />}
            {randomSquareState.chosenSquare === 'GameSquare13' ? <GameSquare13 simon/> : <GameSquare13 />}
            {randomSquareState.chosenSquare === 'GameSquare14' ? <GameSquare14 simon/> : <GameSquare14 />}
            {randomSquareState.chosenSquare === 'GameSquare15' ? <GameSquare15 simon/> : <GameSquare15 />}
            {randomSquareState.chosenSquare === 'GameSquare16' ? <GameSquare16 simon/> : <GameSquare16 />}
        </div>
        <button onClick={placeRandomSquare}>Start Round {randomSquareState.round}</button>
        </div>
    )
}

export default Simon