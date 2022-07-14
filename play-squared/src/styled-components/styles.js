import styled, { css } from 'styled-components'
export function CreateVariables(){
  var squares = [];
  for (var i = 0; i < 16; ++i) {
      squares[i] = styled.div`
      background-color: rgba(212, 209, 209, 0.8);
      border-radius: 2px;
      padding: 10px;
 
        ${props => props.simon && css`
        background: red;
            `}
      `
  }
  console.log(squares)
  return squares
}



