import styled from "styled-components";
import { colors } from "../constants/colors/colors";

export const InicialBottomsContainer = styled.View`
    /* width: ${(props) => props.width ? props.width : "250px"}; */
    width: 100%;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin-top:40px;
`

export const InicialBottom = styled.TouchableOpacity`
    width:170px;
    height:80px;
    border-radius:25px;
    border: 4px solid ${colors.borderIconColor};
    border-bottom-width:10px;
    background-color: ${colors.selectedIconColor};
    justify-content:center;
    padding: 10px;
    padding-left: 20px;
`

export const InicialBottomText = styled.Text`
    text-align:center;
    color: ${colors.nonSelectedIcon};
    font-weight:600;
    font-size:16px;
    padding:10px;
`