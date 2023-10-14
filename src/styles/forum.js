import styled from "styled-components";
import { colors } from "../constants/colors/colors";

export const UserbuttonsContainer = styled.View`
    width:90%;
    flex-direction:row;
    justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
    width:90%;
    height:80px;
    background-color: ${colors.selectedIconColor};
    border: 4px solid ${colors.borderIconColor};
    border-bottom-width:12px;
    border-radius:25px;
    margin-top:30px;
    justify-content:center;
    padding: 20px;
`

export const ButtonText = styled.Text`
    color:white;
    font-size: 18px;
    font-weight: 500;
`
