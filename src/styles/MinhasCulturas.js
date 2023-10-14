import styled from "styled-components"
import { colors } from "../constants/colors/colors"


export const MinhasCulturasContainer = styled.View`
  width: 90%;
  max-height: ${(props) => props.maxHeight || "80%"};
  background-color: ${colors.nonSelectedIcon};
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
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin: 15px;
`

export const AdicionarCulturas = styled.View`
  width:100%;
  position:relative;
  height:50px;
  margin: 40px 0 30px 0; 
  background-color: ${colors.selectedIconColor};
  justify-content:center;
  align-items:center;
`

export const AdicionarMinhasCulturasText = styled.Text`
  color: ${colors.nonSelectedIcon};
  text-align:center;
  font-size: 18px;
  font-weight:700;
  margin: 0 40px 0 0;
`

export const AdicionarCulturasButton = styled.TouchableOpacity`
  width:90px;
  height:80px;
  right:25px;
  border-radius:25px;
  position:absolute;
  background-color: ${colors.nonSelectedIcon};
  align-items:center;
  justify-content:center;
  border-bottom-width:12px;
  border: 6px solid ${colors.selectedIconColor};

`
export const CulturasContainerContainer = styled.ScrollView`
  width:100%;
  height:100%;
  
`
export const CulturasContainer = styled.TouchableOpacity`
  width: 80%;
  height: 65px;
  margin-top:20px;
  border-radius:40px;
  background-color:${colors.backgroundSecondaryColor};
  justify-content:center;
  margin: 20px auto 0 auto;
`

export const CulturaText = styled.Text`
  margin-left:25px;
  font-size: 18px;
  font-weight:400;
`
