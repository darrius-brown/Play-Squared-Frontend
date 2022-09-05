import styled, { css } from 'styled-components'
export function CreateVariables(boardSize){
  var squares = [];
  for (var i = 0; i < boardSize; ++i) {
      squares[i] = styled.div`
      background-color: rgba(212, 209, 209, 0.8);
      border-radius: 2px;
      cursor: pointer;
      padding: 30px;
      font-weight: bold;
      font-size: 22px;
 
        ${props => props.simon && css`
        background: red;
            `}
        ${props => props.squaresInt && css`
        background: pink;
        
            `}
        ${props => props.squaresSquare && css`
        background: purple;
            `}
        ${props => props.squaresSelected && css`
        background: yellow;
            `}
      `
  }
  return squares
}



export const CardImage = styled.button`
  ${props => props.simon && css`
  background: red;
  height: 200;
  width: 200;
  `}
  ${props => props.squares && css`
  background: blue;
  height: 200;
  width: 200;
  `}
  ${props => props.create && css`
  background: yellow;
  height: 200;
  width: 200;
  `}
  ${props => props.personal && css`
  background: purple;
  height: 200;
  width: 200;
  `}
  ${props => props.all && css`
  background: blue;
  height: 200;
  width: 200;
  `}
`;



