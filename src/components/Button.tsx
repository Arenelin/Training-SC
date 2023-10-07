import styled, { css } from "styled-components";
import { MyTheme } from "../styles/Theme";

type ButtonPropsType = {
   btnType: 'link' | 'button',
   primaryColor?: string,
   secondaryColor?: string
}

export const Button = styled.button<ButtonPropsType>`
font-size: 10px;
font-weight: ${MyTheme.sizes.fontWeightGeneral};
line-height: ${MyTheme.sizes.lineHeightGeneral};
border-radius: 5px;
transition: all .7s;
border: 2px solid ${props => props.primaryColor};

& + button{
   margin-left: 10px;
}

   ${props => props.btnType === 'link' && css<ButtonPropsType>`
      background-color: ${props => props.primaryColor};
      color: ${props => props.secondaryColor};
      padding: 7.5px 18.5px;
      &:hover{
         color: ${props => props.primaryColor};
         background-color: ${props => props.secondaryColor};
      }
   `}

   ${props => props.btnType === 'button' && css<ButtonPropsType>`
      background-color: ${props => props.secondaryColor};
      color: ${props => props.primaryColor};
      padding: 3px 29.5px;
      &:hover{
         color: ${props => props.secondaryColor};
         background-color: ${props => props.primaryColor};
      }
   `}
`