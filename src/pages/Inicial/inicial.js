import { InicialBottom, InicialBottomText, InicialBottomsContainer } from "../../styles/Inicial";
import { StyledSafeArea } from "../../styles/styledSafeArea";
import { Card } from "../../components/CardComponent/card";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";


export default function Inicial({ navigation }) {
    return (
        <StyledSafeArea>
            <ButtonsWrapper>
                <TouchableOpacity onPress={() => navigation.navigate('areadoagricultor')}>
                    <Card icon={true} data={{ label: 'ÁREA DO AGRICULTOR' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('noticias')}>
                    <Card icon={true} data={{ label: 'NOTÍCIAS ABC+' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('capacitação')}>
                    <Card icon={true} data={{ label: 'CAPACITACAO' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('forum')}>
                    <Card icon={true} data={{ label: 'FÓRUM' }} />
                </TouchableOpacity>
            </ButtonsWrapper>
            <InicialBottomsContainer>
                <InicialBottom onPress={() => navigation.navigate('login')}>
                    <InicialBottomText>
                        Entrar
                    </InicialBottomText>
                </InicialBottom>
                <InicialBottom onPress={() => navigation.navigate('cadastro')}>
                    <InicialBottomText>
                        Cadastrar
                    </InicialBottomText>
                </InicialBottom>
            </InicialBottomsContainer>
        </StyledSafeArea>
    )
}

const ButtonsWrapper = styled.View`
    padding-right: 35%;
`

const InicialText = styled.View`
    width: 90%;
    height: fit-content;
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
`

const Texto = styled.Text`
    font-size: 18px;
    padding-top: 5%;
    padding-bottom: 5%;
`
const TouchablesStyled = styled.View`
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    padding-bottom: 55px;
`
