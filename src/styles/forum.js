import styled from "styled-components";
import { colors } from "../constants/colors/colors";

export const UserbuttonsContainer = styled.View`
 flex-direction:row;
 width:250px;
 gap:50px;
`
export const Button = styled.TouchableOpacity`
width:250px;
height:50px;
backgroundColor: ${colors.selectedIconColor};
borderRadius:15px;
margin-top:50px;
justifyContent:center;
`
export const ButtonText = styled.Text`
color:white;
text-align:center
`