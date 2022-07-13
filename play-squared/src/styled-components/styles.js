import styled, { css } from 'styled-components'
//POTENTIAL DRY CODE
export function CreateVariables(){
  var squares = [];

  const flashSquare = () => {
    setTimeout(() => 'background: green', 1000)
  }

  const test = () => {
    return 'background: green'
  }

  

  for (var i = 0; i < 16; ++i) {
      squares[i] = styled.div`
      background-color: rgba(212, 209, 209, 0.8);
      border-radius: 2px;
      padding: 10px;
 
        ${props => props.simon && css`
        background: red;
          ${flashSquare};
            `}
      `
      
  }
  console.log(squares)
  return squares
}



