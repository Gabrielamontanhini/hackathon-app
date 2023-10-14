import styled from "styled-components"
import { colors } from "../constants/colors/colors"
export const Title = styled.Text`
font-size:30px;
`
export const Input = styled.TextInput`
 width: 250px;
 height:50px;
 borderRadius:25px;
 backgroundColor: ${colors.inputColor};
 font-size:25px;
`

export const Label = styled.Text`
width:230px;
`

export const Bottom  =styled.View`
 position:absolute;
 bottom:10px;
 width:100%;
 justify-content:space-around;
 flex-direction:row;
 align-items:center;
`
export const TextBottom = styled.Text`
color:white;
text-align:center;
`

export const BackButton = styled.TouchableOpacity`

`
