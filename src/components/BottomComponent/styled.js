import styled from "styled-components";
import { colors } from "../../constants/colors/colors";
export  const ButtomContainer  =  styled.View`
position:absolute;
bottom:0;
width:100%;
flex:1;
flex-direction:row;
marginBottom:10px;
`
export const MenuButton = styled.TouchableOpacity`
 box-sizing: border-box;
 margin:auto;
 background-color:${(props)=>props.selected? colors.selectedIconColor: colors.nonSelectedIcon};
 width:50px;
 height:50px;
 justifyContent:center;
 alignItems:center;
 borderRadius: 15px;
 border: 4px   solid ${colors.borderIconColor};
 border-bottom-width:8px;
 
`