import styled, { css } from "styled-components";

type Color = {
    clicked: boolean;
  }

export const ButtonSubmit = styled.button`

${({theme})=>css`
    display: flex;
    align-self: center;
    background-color:  ${theme.colors.detailColor};
    cursor: pointer;
   
    border: 2px solid  ${theme.colors.detailColor};
    border-radius: .8rem;
    margin-bottom: 1rem;
    padding: .5rem;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
`}

`