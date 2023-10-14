import styled from "styled-components";
import { colors } from "../../constants/colors/colors";


export const StyledCard = styled.View`
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    flex-direction: row;
    align-items: center;
`
export const TitleCard = styled.View`
    background-color: ${colors.nonSelectedIcon};
    height:70px;
    border-radius:18px;
    margin-top:15px;
    margin-right:15px;
    border: 4px solid ${colors.selectedIconColor};
    border-bottom-width:10px;
    width: 100%;
`
export const TitleCardText = styled.Text`
    margin:auto;
    font-weight:700;
    font-size:16px;
`
export const CardIcon = styled.View`
    margin-top:15px;
    height:70px;
    width: 70px;
    border-radius:18px;
    justify-content:center;
    align-items:center;
    background-color: ${colors.selectedIconColor};
    border: 4px solid ${colors.borderIconColor};
    border-bottom-width:10px;
`