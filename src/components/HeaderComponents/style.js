import styled from "styled-components";
import { colors } from "../../constants/colors/colors";



export const BigHeaderView = styled.View`
    width: 95%;
    height: 120px;
    box-sizing: border-box;
    border: 2px solid ${colors.bordersColor};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.secondColor};
`

export const TinyHeaderView = styled.View`
    width: 95%;
    height: 70px;
    box-sizing: border-box;
    border: 2px solid ${colors.bordersColor};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.secondColor}
`