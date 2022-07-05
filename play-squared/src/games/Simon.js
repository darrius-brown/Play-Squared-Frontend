import React, {useState} from 'react'

function Simon() {
    let boardSize = 16
    const initialState = {
        row: 0,
        column:  0,
        location: 0
    }
    const [randomSquareState, setFormState] = useState(initialState)
    const placeRandomSquare = () => {
        // let row = 0
        // let column = 0
        // let location = 0
        const getRandomSquare = () => {
            setFormState({
            location: Math.floor(Math.random() * boardSize),
            row: Math.floor((randomSquareState.location / 4) + 1),
            column: Math.floor((randomSquareState.location % 4) + 1)
        })
        // location = Math.floor(Math.random() * boardSize)
        // row = Math.floor((location / 4) + 1)
        // column = Math.floor((location % 4) + 1)
        }
        getRandomSquare()
        // return <div className={`game-square`} grid-column={column} grid-row={row} id={`game-square-location${location}`} >Hi There</div>
        return <div className={`game-square`} grid-column={randomSquareState.column} grid-row={randomSquareState.row} id={`game-square-location${randomSquareState.location}`} >Hi There</div>
    }
    return (
        <button onClick={placeRandomSquare}>Click Me</button>
    )
}

export default Simon