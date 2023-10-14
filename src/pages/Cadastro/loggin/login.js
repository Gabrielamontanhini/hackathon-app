import { useContext, useRef, useState } from "react"
import { InicialBottom } from "../../../styles/Inicial"
import { MinhasCulturasContainer } from "../../../styles/MinhasCulturas"
import { BackButton, Bottom, Input, TextBottom, Title } from "../../../styles/cadastro"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { UserContext } from "../../../context/UserContext/usercontext"

export const LoginPage = ({ navigation }) => {
    const {login} = useContext(UserContext)
     const emailRef = useRef()
     const senhaRef = useRef()
     const logar  = async () => {
      await login(emailRef.current.value,senhaRef.current.value)
      navigation.navigate("areadoagricultor")
     }
    return (
        <StyledSafeArea>
            <MinhasCulturasContainer height={"150px"}>
                <Title>Digite seu email:</Title>
                <Input  onChangeText={(e) => emailRef.current.value = e} ref={emailRef} defaultValue={"  ..."} />
            </MinhasCulturasContainer>
            <MinhasCulturasContainer height={"150px"}>
                <Title>Digite sua senha:</Title>
                <Input onChangeText={(e) => senhaRef.current.value = e} ref={senhaRef} defaultValue={"  ..."} />
            </MinhasCulturasContainer>
            <Bottom>
                <BackButton width={"100px"} height={"100px"} onPress={() => logar()}><TextBottom color={"black"}>Entrar</TextBottom></BackButton>
                <InicialBottom onPress={() => navigation.navigate("cadastro")}><TextBottom>Não tenho  cadastro</TextBottom></InicialBottom>
            </Bottom>
        </StyledSafeArea>
    )
}