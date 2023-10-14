import { FlatList, Text } from "react-native";
import { posts } from "../../../constants/posts/posts";
import { Post } from "../../../components/PostComponent/post";
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { Card } from "../../../components/CardComponent/card";
import { InicialBottom } from "../../../styles/Inicial";
import { Button, ButtonText, UserbuttonsContainer } from "../../../styles/forum";

export default function Forum({ navigation }) {
    return (
        <StyledSafeArea>
            <Card data={{ label: "Forum" }}></Card>
            <UserbuttonsContainer>
                <InicialBottom><ButtonText>fazer postagem</ButtonText></InicialBottom>
                <InicialBottom><ButtonText>minhas postagens</ButtonText></InicialBottom>
            </UserbuttonsContainer>
            <Button><ButtonText>Procuro ajuda</ButtonText></Button>
            <Button><ButtonText>Discussões</ButtonText></Button>
            <Button><ButtonText>Em destaque</ButtonText></Button>
        </StyledSafeArea>
    )
}