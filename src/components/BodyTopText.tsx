import styled from "styled-components";

type BodyTopTextPropsType = {
   color: string
}

export const BodyTopText = styled.p<BodyTopTextPropsType>`
font-size: 12px;
font-weight: 500;
line-height: 20px;
color: ${props => props.color};
`