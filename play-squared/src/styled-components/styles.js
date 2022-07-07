import styled, { css } from 'styled-components'
//POTENTIAL DRY CODE
// export function CreateVariables(){
//   var squares = [];

//   for (var i = 0; i <= 16; ++i) {
//       squares[i] = styled.div`
//       background-color: rgba(212, 209, 209, 0.8);
//       border-radius: 2px;
//       padding: 10px; 
      
      
//         ${props => props.simon && css`
//               background: red;
//               color: blue;
//             `}
//       `
//       console.log(squares)
//   }

//   return <div>Hi </div>;
  
//}
export const GameSquare1 = styled.button`
background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
grid-column: 1 ;
grid-row: 1;


  ${props => props.simon && css`
        background: red;
        color: blue;
      `}

  ${props => props.secondary && css`
  background: yellow;
  color: blue;
`}
`

export const GameSquare2 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 2 ;
  grid-row: 1;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
  
`

export const GameSquare3 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 3 ;
  grid-row: 1;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare4 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 4 ;
  grid-row: 1;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare5 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 1 ;
  grid-row: 2;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare6 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 2 ;
  grid-row: 2;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare7 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 3 ;
  grid-row: 2;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare8 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 4 ;
  grid-row: 2;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare9 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 1 ;
  grid-row: 3;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare10 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 2 ;
  grid-row: 3;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare11 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 3 ;
  grid-row: 3;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare12 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 4 ;
  grid-row: 3;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare13 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 1 ;
  grid-row: 4;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare14 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 2 ;
  grid-row: 4;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare15 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 3 ;
  grid-row: 4;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`

export const GameSquare16 = styled.div`
  background-color: rgba(212, 209, 209, 0.8);
border-radius: 2px;
padding: 10px; 
  grid-column: 4 ;
  grid-row: 4;
  

  ${props => props.simon && css`
        background: red;
        color: blue;
      `}
`