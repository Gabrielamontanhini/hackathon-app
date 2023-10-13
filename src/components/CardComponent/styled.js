import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
;



export const StyledCard = styled.View`
min-width: 300px;
height: 100px;
box-sizing: border-box;
border-radius: 10px;
margin-top: 5px;
margin-bottom: 5px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
background-color: ${colors.thirdColor};
`
export const TitleCard = styled.Text`
 backgroundColor: ${colors.nonSelectedIcon};
 width:200px;

`
export const CardIcon = styled.View`

`