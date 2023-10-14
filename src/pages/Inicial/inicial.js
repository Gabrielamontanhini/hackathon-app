import { InicialBottom, InicialBottomText, InicialBottomsContainer } from "../../styles/Inicial";
import { StyledSafeArea } from "../../styles/styledSafeArea";
import { Card } from "../../components/CardComponent/card";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { colors } from "../../constants/colors/colors.js";


export default function Inicial({ navigation }) {
    return (
        <StyledSafeArea>
            <LevelContainer>
                <LevelWrapper>
                    {/* <Image
                        source={require('../../../assets/icones_gerais/exp_bar.svg')}
                        style={StyleExpBar}
                    /> */}
                    <TextLevel>Lv. 00</TextLevel>
                </LevelWrapper>
            </LevelContainer>
            <ButtonsWrapper>
                <TouchableOpacity onPress={() => navigation.navigate('areadoagricultor')}>
                    <Card icon={true} data={{ label: 'ÁREA DO AGRICULTOR' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('noticias')}>
                    <Card icon={true} data={{ label: 'NOTÍCIAS ABC+' }} />
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

// const StyleExpBar = styled.svg`
//     width: 20px;
//     height: 20px;
// `

const ButtonsWrapper = styled.View`
    padding-right: 35%;
    margin-bottom:40%;
`

const LevelContainer = styled.View`
    box-sizing: border-box;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 55%;
    margin-bottom:10%;
    flex-direction: row;
    align-items: center;
`

const LevelWrapper = styled.View`
    background-color: ${colors.nonSelectedIcon};
    height:70px;
    width: 150px;
    border-radius:18px;
    border: 4px solid ${colors.selectedIconColor};
    border-bottom-width:10px;
    padding-bottom: 5px;
    padding-right: 8px;
`

const TextLevel = styled.Text`
    margin-top:auto;
    text-align: right;
    /* text-align: bottom; */
    font-weight:700;
    font-size:20px;
`