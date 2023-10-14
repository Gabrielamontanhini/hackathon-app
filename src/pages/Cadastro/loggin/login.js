import { InicialBottom } from "../../../styles/Inicial"
import { MinhasCulturasContainer } from "../../../styles/MinhasCulturas"
import { BackButton, Bottom, Input, TextBottom, Title } from "../../../styles/cadastro"
import { StyledSafeArea } from "../../../styles/styledSafeArea"

export const LoginPage = ({ navigation }) => {
    return (
        <StyledSafeArea>
            <MinhasCulturasContainer height={"150px"}>
                <Title>Digite seu email:</Title>
                <Input defaultValue={"  ..."} />
            </MinhasCulturasContainer>
            <MinhasCulturasContainer height={"150px"}>
                <Title>Digite sua senha:</Title>
                <Input defaultValue={"  ..."} />
            </MinhasCulturasContainer>
            <Bottom>
                <BackButton width={"100px"} height={"100px"} onPress={() => navigation.navigate("areadoagricultor")}><TextBottom color={"black"}>Entrar</TextBottom></BackButton>
                <InicialBottom onPress={() => navigation.navigate("cadastro")}><TextBottom>Não tenho  cadastro</TextBottom></InicialBottom>
            </Bottom>
        </StyledSafeArea>
    )
}