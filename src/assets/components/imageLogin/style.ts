import styled, {css} from 'styled-components'
import lol from '../../images/lol.png'
export const background = styled.section`
display: flex;
width: 70%;
background: url(${lol});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const icon = styled.div`
${({theme})=>css`

display: flex;
width: 5%;
height: 5vh;
align-items: center;
justify-content: center;
background-color: ${theme.colors.backgroundColor};
border-radius: .2rem;
`}
`
export const admDiv = styled.div`
display: flex;
width: 100%;
align-items: flex-start;
justify-content: flex-end;
margin: 1rem;
`