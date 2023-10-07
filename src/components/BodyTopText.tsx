import styled from "styled-components";
import { MyTheme } from "../styles/Theme";

type BodyTopTextPropsType = {
   color: string
}

export const BodyTopText = styled.p<BodyTopTextPropsType>`
font-size: 12px;
font-weight: ${MyTheme.sizes.fontWeightGeneral};
line-height: ${MyTheme.sizes.lineHeightGeneral};
color: ${props => props.color};
margin-bottom: 18px;
`