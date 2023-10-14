import styled from "styled-components";
import { colors } from "../../constants/colors/colors.js";

export const SalvosContainer = styled.View`
  width: 95%;
  max-height: 80%;
  background-color:${colors.backgroundSecondaryColor};
  justify-content:center;
  margin: 10px auto 5px auto;
  padding: 15px;
`
export const SalvoText = styled.Text`
  font-size: 18px;
  font-weight:400;
`