import { Button, FlatList } from "react-native"
import { notices } from "../../../constants/noticias/noticias"
import { BigHeader } from "../../../components/HeaderComponents/bigHeader"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { Notice } from "../../../components/NoticeComponent/notice"
import Bottom from "../../../components/BottomComponent/bottom"

export default function FeedNoticias({ navigation }) {
    return (
        <StyledSafeArea>
            <FlatList
                data={notices}
                keyExtractor={(noticia) => String(noticia.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Notice data={item}/>} />
            <Button title="Área do Agricultor" onPress={() => navigation.navigate('areadoagricultor')} />
        </StyledSafeArea>
    )
}