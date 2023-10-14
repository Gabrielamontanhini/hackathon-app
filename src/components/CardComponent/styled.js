import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
;



export const StyledCard = styled.View`

box-sizing: border-box;
border-radius: 10px;
margin-top: 5px;
margin-bottom: 5px;
flex-direction: row;
align-items: center;
`
export const TitleCard = styled.View`
backgroundColor: ${colors.nonSelectedIcon};
width:250px; 
height:60px;
borderRadius:18px;
margin-top:15px;
border: 4px solid ${colors.selectedIconColor};
border-bottom-width:8px;
`
export const TitleCardText = styled.Text`
margin:auto;
`
export const CardIcon = styled.View`
margin-top:15px;
height:55px;
width: 55px;
borderRadius:18px;
justify-content:center;
align-items:center;
backgroundColor: ${colors.selectedIconColor}
`