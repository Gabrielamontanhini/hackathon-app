
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
    const [passo, setPasso] = useState("nome")
    return (
        <StyledSafeArea>
            {passo === "nome" ? <MinhasCulturasContainer height={"250px"}>
                <Title>Criação de Conta</Title>
                <Label>Qual o seu nome ?</Label>
                <Input defaultValue={"  ..."} />
                <Label>Como prefere  ser  Chamado ?</Label>
                <Input defaultValue={"  ..."} />
            </MinhasCulturasContainer> : ""}
            {passo === "email" ? <MinhasCulturasContainer height={"250px"}>
                <Title>Criação de Conta</Title>
                <Label>Qual o seu email ?</Label>
                <Input defaultValue={"  ..."} />
            </MinhasCulturasContainer> : ""}
            {passo === "senha" ? <MinhasCulturasContainer height={"250px"}>
                <Title>Criação de Conta</Title>
                <Label>crie uma senha </Label>
                <Input defaultValue={"  ..."} />
                <Label>Repita sua senha</Label>
                <Input defaultValue={"  ..."} />
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
                {passo==="senha"?<InicialBottom onPress={()=>{alert("cadastrar")}}>
                    <TextBottom>enviar cadastro</TextBottom>
                </InicialBottom>:""}
            </Bottom>
        </StyledSafeArea>
    )
}