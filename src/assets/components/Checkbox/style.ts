import styled, { css } from "styled-components";

export const input = styled.input`
  display: flex;
`;
export const divStay = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 70%;
    align-self: center;
    align-items: center;
    justify-content: flex-start;
    label {
      display: flex;

      font-family: ${theme.constants.inputFontFamily};
      position: relative;
      padding-left: 23px;
      margin-bottom: 10px;
      cursor: pointer;
      font-size: .7rem;
    font-weight: 500;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      
    }
    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 15px;
      width: 15px;
      background-color: #eee;
    }
    label:hover input ~ span {
        background-color: #ccc;
    }
    span:after {
      content: "";
      position: absolute;
      display: none;
    }
    label input:checked ~ span{
        background-color: ${theme.colors.detailColor};
    }
    label input:checked ~ span:after {
      display: block;
    }
    span:after {
      left: 5px;
      top: 3px;
      width: 2px;
      height: 5px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  `}
`;
