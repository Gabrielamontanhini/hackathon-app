import { Button, FlatList } from "react-native"
import { notices } from "../../../constants/noticias/noticias"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { Notice } from "../../../components/NoticeComponent/notice"


export default function FeedNoticias({ navigation }) {
    return (
        <StyledSafeArea>
            <FlatList
                data={notices}
                keyExtractor={(noticia) => String(noticia.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Notice data={item} />}
            />
        </StyledSafeArea>
    )
}