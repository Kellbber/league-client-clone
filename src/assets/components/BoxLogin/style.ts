import { colors } from "../../styles/colors";
import styled, { css } from "styled-components";
import logo from "../../images/logo.png";

import facebook from '../../images/icons/facebook.svg'
import google from '../../images/icons/google.svg'
import apple from '../../images/icons/apple.svg'

type Color = {
  clicked: boolean;
}
export const background = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-width: 30%;
    min-height: 100vh;
    background-color: whitesmoke;
  `}
`;

export const riotLogo = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 1.2rem 0;

    img {
      background: url(${logo});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      padding: 3rem;
    }
  `}
`;

export const SignIn = styled.p`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    font-family: ${theme.constants.inputFontFamily};
    font-size: ${theme.constants. headingFontSize};
    font-weight: ${theme.constants.headingLineHeight};
    align-items: center;
    justify-content: center;
    margin-bottom: .5rem;
  `}
`;

export const divInputUser = styled.div<Color>`
${({theme})=>css`
width: 70%;

align-self: center;
margin: .5rem 0 .5rem 0;
p{
  margin: 0;
  font-family: ${theme.constants.headingFontFamily};
  font-weight: ${theme.constants.inputLineHeight};
  font-size: ${theme.constants.inputFontSize};
  color: ${theme.colors.inputColor};
  font-size: .5rem;
}
input{
  width: 80%;
  outline: none;
  border: none;
  background-color: transparent;
  font-family: ${theme.constants.checkboxFontFamily};

  font-weight: 800;
  padding: 0.2rem;
}

`}
background-color: ${(props):any=>{
  if(props.clicked){
    return "whiteSmoke"
  }else{
    return colors.secundaryColor
  }
}};
border-radius: .3rem;
border: ${(props):any=>{
  if(props.clicked){
    return `2px solid rgba(0,0,0,0.8)}`
  }else{
    return "none"
  }

}};
`
export const divInputPass = styled.div<Color>`
${({theme})=>css`
width: 70%;

align-self: center;
margin: .5rem 0 .5rem 0;
p{
  margin: 0;
  font-family: ${theme.constants.inputFontFamily};
  font-weight: ${theme.constants.inputLineHeight};
  font-size: ${theme.constants.inputFontSize};
  color: ${theme.colors.inputColor};
  font-size: .5rem;
}
input{
  width: 80%;
  outline: none;
  border: none;
  background-color: transparent;
  font-family: ${theme.constants.checkboxFontFamily};
  font-weight: 800;
  padding: 0.2rem;
}

`}
background-color: ${(props)=>{
  if(props.clicked){
    return "whiteSmoke"
  }else{
    return colors.secundaryColor
  }

}};
border-radius: .3rem;
border: ${(props):any=>{
  if(props.clicked){
    return `2px solid rgba(0,0,0,0.8)`
  }else{
    return "none"
  }

}};

`
export const divIcons = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 70%;
margin-top: 1rem;
align-self: center;
`

export const divFace = styled.div`
${({theme})=>css`

display: flex;
width: 30%;
background-color: ${theme.colors.facebook};
align-items: center;
justify-content: center;
border-radius: 0.2rem;
transition: ease-in-out .2s;
padding: .5rem 0 .5rem 0;
cursor: pointer;
margin-bottom: 1rem;
img{
  background: url(${facebook});
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: .5rem;
}
:hover{
  background-color: ${theme.colors.facebookHover};
}
`}
`
export const divGoogle = styled.div`
${({theme})=>css`

display: flex;
width: 30%;
background-color: transparent;
align-items: center;
justify-content: center;
border-radius: 0.2rem;
padding: .5rem 0 .5rem 0;
border: 1px solid white;
cursor: pointer;
margin-bottom: 1rem;
img{
  background: url(${google});
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: .5rem;
}
:hover{
  border: 1px solid ${theme.colors.secundaryColor};
}
`}
`
export const divApple = styled.div`
${({theme})=>css`

display: flex;
width: 30%;
background-color: rgba(0,0,0);
align-items: center;
justify-content: center;
border-radius: 0.2rem;
transition: ease-in-out .2s;
padding: .5rem 0 .5rem 0;
cursor: pointer;
margin-bottom: 1rem;
img{
  background: url(${apple});
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: .5rem;
}
:hover{
  background-color: rgba(0,0,0,0.8);
}
`}
`

export const divText = styled.div`
${({theme})=>css`

display: flex;
align-items: center;
justify-content: center;
width: 70%;
flex-direction: column;
align-self: center;
p{
  font-family: ${theme.constants.inputFontFamily};
  font-size: .6rem;
  font-weight: 800;
  cursor: pointer;
  color: ${theme.colors.secundaryColor};
}
p:hover{
  color: ${theme.colors.textColor};
}
`}
`
export const divVersion = styled.div`
${({theme})=>css`
display: flex;
width: 80%;
align-self: center;
justify-content: flex-end;
align-items: flex-end;
p{
  font-family: ${theme.constants.inputFontFamily};
  font-size: .6rem;
  font-weight: 800;
  cursor: pointer;
  color: ${theme.colors.secundaryColor};
}
p:hover{
  color: ${theme.colors.textColor};
}
`}
`