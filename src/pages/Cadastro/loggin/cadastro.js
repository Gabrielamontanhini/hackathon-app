
import { MinhasCulturasContainer } from "../../../styles/MinhasCulturas"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { Bottom, Input, Label, Title, TextBottom, BackButton } from "../../../styles/cadastro"
import { useContext, useRef, useState } from "react"
import { InicialBottom } from "../../../styles/Inicial"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faArrowAltCircleLeft, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { UserContext } from "../../../context/UserContext/usercontext"
export const Cadastro = ({navigation}) => {

    const {cadastro} =  useContext(UserContext)
    const nomeRef = useRef()
    const emailRef = useRef()
    const senhaRef = useRef()
    const nicknameRef = useRef()
    var passo = "nome"
    function setPasso(passo){
        passo = passo
    }

    const  cadastrar = () => {
        cadastro(nomeRef.current.value,nicknameRef.current.value,emailRef.current.value,senhaRef.current.value)
    }
    return (
        <StyledSafeArea>
            {passo === "nome" ? <MinhasCulturasContainer height={"250px"}>
                <Title>Criação de Conta</Title>
                <Label>Qual o seu nome ?</Label>
                <Input onChangeText={(e)=> nomeRef.current.value = e} ref={nomeRef} defaultValue={"  ..."} />
                <Label>Como prefere  ser  Chamado ?</Label>
                <Input onChangeText={(e)=> nicknameRef.current.value = e} ref={nicknameRef} defaultValue={"  ..."} />
            </MinhasCulturasContainer> : ""}
            {passo === "email" ? <MinhasCulturasContainer height={"250px"}>
                <Title>Criação de Conta</Title>
                <Label>Qual o seu email ?</Label>
                <Input onChangeText={(e)=> emailRef.current.value = e} ref={emailRef} defaultValue={"  ..."} />
            </MinhasCulturasContainer> : ""}
            {passo === "senha" ? <MinhasCulturasContainer height={"250px"}>
                <Title>Criação de Conta</Title>
                <Label >crie uma senha </Label>
                <Input onChangeText={(e)=> senhaRef.current.value = e} ref={senhaRef} defaultValue={"  ..."} />
            </MinhasCulturasContainer> : ""}
            <Bottom>
                {passo==="nome"?<BackButton  onPress={()=>{navigation.goBack()}}><FontAwesomeIcon size={50}  icon={faCircleArrowLeft}/></BackButton>:""}
                {passo==="email"?<BackButton width={"100px"} height={"200px"}  onPress={()=>{setPasso("nome")}}><FontAwesomeIcon size={50}  icon={faCircleArrowLeft}/></BackButton>:""}
                {passo==="senha"?<BackButton  onPress={()=>{setPasso("email")}}><FontAwesomeIcon size={50}  icon={faCircleArrowLeft}/></BackButton>:""}
               
                {passo==="nome"?<InicialBottom onPress={()=>{setPasso("email")}}>
                    <TextBottom>inserir email</TextBottom>
                </InicialBottom>:""}
                {passo==="email"?<InicialBottom onPress={()=>{setPasso("senha")}}>
                    <TextBottom>inserir senha</TextBottom>
                </InicialBottom>:""}
                {passo==="senha"?<InicialBottom onPress={()=>{cadastrar()}}>
                    <TextBottom>enviar cadastro</TextBottom>
                </InicialBottom>:""}
            </Bottom>
        </StyledSafeArea>
    )
}