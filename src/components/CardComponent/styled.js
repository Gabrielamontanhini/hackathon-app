import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
;



export const StyledCard = styled.View`
min-width: 300px;
height: 100px;
box-sizing: border-box;
border: 2px solid ${colors.bordersColor};
border-radius: 10px;
margin-top: 5px;
margin-bottom: 5px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
background-color: ${colors.thirdColor};
`