import { BigHeader } from "../../components/HeaderComponents/bigHeader";
import { StyledSafeArea } from "../../styles/styledSafeArea";
import { Card } from "../../components/CardComponent/card";
import { TouchableOpacity } from "react-native";
import { OptionsView } from "../../styles/styledOptions";
import styled from "styled-components";


export default function Inicial({ navigation }) {
    return (
        <StyledSafeArea>
                <TouchableOpacity onPress={() => navigation.navigate('areadoagricultor')}>
                    <Card data={{ label: 'Área do Agricultor' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('noticias')}>
                    <Card data={{ label: 'Notícias' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('capacitação')}>
                    <Card data={{ label: 'Capacitação' }} />
                </TouchableOpacity>



         
        </StyledSafeArea>
    )
}

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
