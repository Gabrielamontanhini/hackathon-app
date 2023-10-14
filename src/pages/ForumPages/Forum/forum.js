import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { InicialBottom } from "../../../styles/Inicial";
import { Button, ButtonText, UserbuttonsContainer } from "../../../styles/forum";
import { colors } from "../../../constants/colors/colors.js";
import styled from "styled-components";


export default function Forum({ navigation }) {
    return (
        <StyledSafeArea>
            <StyledForum>
                <StyledCard>
                    <TitleCard>
                        <TitleCardText>FÓRUM</TitleCardText>
                    </TitleCard>
                </StyledCard>
                <UserbuttonsContainer>
                    <InicialBottom><ButtonText>FAZER POSTAGEM</ButtonText></InicialBottom>
                    <InicialBottom><ButtonText>MINHAS POSTAGENS</ButtonText></InicialBottom>
                </UserbuttonsContainer>
                <Button><ButtonText>Procuro ajuda</ButtonText></Button>
                <Button><ButtonText>Discussões</ButtonText></Button>
                <Button><ButtonText>Em destaque</ButtonText></Button>
            </StyledForum>
        </StyledSafeArea>
    )
}

const StyledForum = styled.View`
    flex: 1;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`


export const StyledCard = styled.View`
    box-sizing: border-box;
    border-radius: 25px;
    margin-top: 5px;
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center;
`

export const TitleCard = styled.View`
    background-color: ${colors.nonSelectedIcon};
    height:85px;
    border-radius:25px;
    margin-top:15px;
    border: 4px solid ${colors.selectedIconColor};
    border-bottom-width:10px;
    width: 90%;
`

export const TitleCardText = styled.Text`
    margin:auto;
    font-weight:700;
    font-size:24px;
`
