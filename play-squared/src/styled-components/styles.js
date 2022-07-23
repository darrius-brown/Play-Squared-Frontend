import styled, { css } from 'styled-components'
export function CreateVariables(boardSize){
  var squares = [];
  for (var i = 0; i < boardSize; ++i) {
      squares[i] = styled.div`
      background-color: rgba(212, 209, 209, 0.8);
      border-radius: 2px;
      padding: 10px;
      cursor: pointer;
 
        ${props => props.simon && css`
        background: red;
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



