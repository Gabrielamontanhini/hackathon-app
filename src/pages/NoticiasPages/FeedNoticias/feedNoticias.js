import { Button, FlatList } from "react-native"
import { notices } from "../../../constants/Noticias/noticias"
import { BigHeader } from "../../../components/HeadersComponents/BigHeader"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { Notice } from "../../../components/NoticeComponent/Notice"
import Bottom from "../../../components/BottomComponent/bottom"

export default function FeedNoticias({ navigation }) {


    return (
        <StyledSafeArea>
            <BigHeader />
            <FlatList
                data={notices}
                keyExtractor={(noticia) => String(noticia.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Notice data={item}/>} />
            <Button title="Área do Agricultor" onPress={() => navigation.navigate('areadoagricultor')} />
            <Bottom navigation={navigation}/>
        </StyledSafeArea>
    )
}