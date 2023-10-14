
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import {TouchableOpacity } from "react-native"
import { Card } from "../../../components/CardComponent/card"
import { InicialBottomsContainer,InicialBottom,InicialBottomText } from "../../../styles/Inicial"


export default function Agricultor({ navigation }) {

    return (
        <StyledSafeArea>
            <TouchableOpacity onPress={() => { navigation.navigate("minhas culturas") }}>
                <Card icon={false} data={{ label: "Minhas culturas" }}></Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("salvos") }}>
                <Card icon={false} data={{ label: "Salvos" }}></Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("minhas culturas") }}>
                <Card icon={false} data={{ label: "Minhas culturas" }}></Card>
            </TouchableOpacity>
            <InicialBottomsContainer width={"100px"}>
                <InicialBottom>
                    <InicialBottomText>
                        Validar Cultura
                    </InicialBottomText>
                </InicialBottom>
            </InicialBottomsContainer>
        </StyledSafeArea>
    )
}