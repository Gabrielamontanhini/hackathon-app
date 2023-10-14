import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { TouchableOpacity } from "react-native"
import { Card } from "../../../components/CardComponent/card"
import { InicialBottomsContainer, InicialBottom, InicialBottomText } from "../../../styles/Inicial"
import styled from "styled-components"
import { colors } from "../../../constants/colors/colors.js"


export default function Agricultor({ navigation }) {

    return (
        <StyledSafeArea>
            <Header>
                <TextHeader>ÁREA DO AGRICULTOR</TextHeader>
            </Header>
            <ButtonsWrapper>
                <TouchableOpacity onPress={() => { navigation.navigate("minhas culturas") }}>
                    <Card icon={false} data={{ label: "Minhas culturas" }}></Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("salvos") }}>
                    <Card icon={false} data={{ label: "Itens Salvos" }}></Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("minhas culturas") }}>
                    <Card icon={false} data={{ label: "Informações de Perfil" }}></Card>
                </TouchableOpacity>
            </ButtonsWrapper>
            <InicialBottomsContainer width={"100px"}>
                <ButtonValidationWrapper>
                    <ValidationButton>
                        VALIDAÇÃO{'\n'}DE PRÁTICAS
                    </ValidationButton>
                </ButtonValidationWrapper>
            </InicialBottomsContainer>
        </StyledSafeArea>
    )
}

const Header = styled.View`
    background-color: ${colors.selectedIconColor};
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
`

const TextHeader = styled.Text`
    color: ${colors.textSecondaryColor};
    font-size: 20px;
    font-weight: 600;
`

const ButtonsWrapper = styled.View`
    width: 90%;
`

const ValidationButton = styled(InicialBottomText)`
    text-align:left;
    line-height: 24px;
    padding-left: 20px;
`

const ButtonValidationWrapper = styled(InicialBottom)`
    width: 220px;
`