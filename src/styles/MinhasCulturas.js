import styled from  "styled-components"
import { colors } from "../constants/colors/colors"


export const MinhasCulturasContainer  = styled.View`
  width: 300px;
  height: ${(props)=>props.height? props.height: "400px"};
  backgroundColor: ${colors.nonSelectedIcon};
  border: 4px solid ${colors.borderIconColor};
  border-radius: 28px;
  border-top-width:0px;
  border-bottom-width: 17px;
  overflow: scroll;
  margin-top:20px;
  align-items: center;
`

export const MinhasCulturasTitle = styled.View`
 border-bottom-width: 4px;
 width:100%;
 border-top-width: 4px;
 `
export const MinhasCultusTitleText = styled.Text`
 text-align:center;
 margin: 15px 15px;
 `
export const  AdicionarCulturas  = styled.View`
width:100%;
position:relative;
height:50px;
margin: 60px 0 60px 0; 
backgroundColor: ${colors.selectedIconColor};
justify-content:center;
align-items:center;
`

export const AdicionarMinhasCulturasText = styled.Text`
color: ${colors.nonSelectedIcon};
text-align:center;
margin: 0 40px 0 0;
`
export const AdicionarCulturasButton = styled.TouchableOpacity`
width:90px;
height:80px;
right:40px;
borderRadius:15px;
position:absolute;
backgroundColor: ${colors.nonSelectedIcon};
align-items:center;
justify-content:center;
border: 4px solid ${colors.borderIconColor}

`

export const CulturasContainerContainer = styled.ScrollView`
width:100%;
height:100%;

`
export const CulturasContainer = styled.View`
   width: 260px;
   height: 80px;
   margin-top:20px;
   border-radius:20px;
   backgroundColor:gray;
   justify-content:center;
   margin: 20px auto 0 auto ;
`
export const CulturaText = styled.Text`
  margin-left:30px;
`