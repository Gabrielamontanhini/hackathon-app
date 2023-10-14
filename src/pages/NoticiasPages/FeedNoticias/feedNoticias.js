import { Button, FlatList } from "react-native"
import { notices } from "../../../constants/noticias/noticias"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { Notice } from "../../../components/NoticeComponent/notice"
import styled from "styled-components"


export default function FeedNoticias({ navigation }) {
    return (
        <StyledSafeArea>
            <StyledNoticias>
                <FlatList
                    data={notices}
                    keyExtractor={(noticia) => String(noticia.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <Notice data={item} />}
                />
            </StyledNoticias>
        </StyledSafeArea>
    )
}

const StyledNoticias = styled.View`
    
`;