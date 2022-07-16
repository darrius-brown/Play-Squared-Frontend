// import React from 'react'

// function Board() {
//     const smallBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const mediumBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//     const LargeBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//     const createBoard = (boardSize) => {
//         return boardSize.map((placementSquare) => {
//             return <div className={`gameboard-size${boardSize.length}`} id={` size${boardSize.length}-square${placementSquare}`}></div>
//         })
//     }
//     return (
//         <div className='medium-board'>
//             {createBoard(mediumBoard)}
//         </div>
//     )
// }


// export default Board