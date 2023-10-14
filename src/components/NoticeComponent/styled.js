import styled from "styled-components"
import { colors } from "../../constants/colors/colors"


export const StyledNotice = styled.View`
    width: 95%;
    max-height: 400px;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 4px solid ${colors.selectedIconColor};
    border-bottom-width:12px;
    border-radius: 25px;
    margin-top: 15px;
`

export const StyledTitle = styled.View`
    width: 100%;
    min-height: 80px;
    display: flex;
    align-items: space-evenly;
    justify-content: center;
    background-color: ${colors.textSecondaryColor};
    border-radius: 20px 20px 0 0;
    border-bottom-width: 4px;
    padding: 13px;
`

export const StyledCall = styled.View`
    width: 100%;
    display: flex;
    align-items: space-evenly;
    justify-content: flex-start;
    background-color: ${colors.nonSelectedIcon};
    padding: 15px;
`

export const TextHeader = styled.Text`
    font-size: 17px;
    font-weight: 700;
`

export const TextP = styled.Text`
    font-size: 17px;
    font-weight: 400;
`

export const TextFont = styled.Text`
    width: 100%;
    text-align: center;
    background-color: ${colors.nonSelectedIcon};
    border-radius: 0 0 25px 25px;
`
