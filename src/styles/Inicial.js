import styled from "styled-components";
import { colors } from "../constants/colors/colors";

export const InicialBottomsContainer = styled.View`
width: 250px;
flex-direction:row;
justifyContent:space-between;
margin-top:20px;
`

export const InicialBottom = styled.TouchableOpacity`
width:100px;
height:80px;
borderRadius:15px;
backgroundColor: ${colors.selectedIconColor};
justify-content:center;
`
export const InicialBottomText = styled.Text`
 text-align:center;
 color: ${colors.nonSelectedIcon}
`