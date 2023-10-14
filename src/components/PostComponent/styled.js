import styled from "styled-components";
import { colors } from "../../constants/colors/colors";


export const StyledPost = styled.View`
    min-width: 300px;
    min-height: 150px;
    box-sizing: border-box;
    border: 2px solid ${colors.bordersColor};
    border-radius: 10px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    background-color: ${colors.thirdColor};
`