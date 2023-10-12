import styled from "styled-components"
import { colors } from "../../constants/colors/colors"


export const StyledNotice = styled.View`
width: 90%;
height: 200px;
display: flex;
align-self: center;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
box-sizing: border-box;
border: 2px solid ${colors.secondColor};
border-radius: 10px;
margin-top: 15px;
background-color: ${colors.firstColor};
`

export const StyledTitle = styled.View`
width: 100%;
height: 30%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.secondColor};
`
export const StyledCall = styled.View`
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: flex-start;
padding-top: 15px;
padding-right: 2%;
padding-left: 2%;
background-color: ${colors.firstColor};
`

