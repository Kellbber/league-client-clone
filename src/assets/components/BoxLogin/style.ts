import styled, {css} from 'styled-components'

export const background = styled.div`
${({theme})=>css`
display: flex;
flex-direction: column;
min-width: 30%;
min-height: 100%;
background-color: ${theme.colors.primaryColor};

`}
`