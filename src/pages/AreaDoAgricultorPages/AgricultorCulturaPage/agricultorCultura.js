import { FlatList } from "react-native";
import { TinyHeader } from "../../../components/HeaderComponents/tinyHeader";
import { OptionsView } from "../../../styles/styledOptions";
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import Pratica from "../../../components/PraticaComponent/pratica";
import Bottom from "../../../components/BottomComponent/bottom";

export default function Cultura({navigation}) {
    return (
        <StyledSafeArea>
            <TinyHeader />
            <Text>Minhas Cultura</Text>
            <OptionsView>
               
                <FlatList
                    data={culturaEscolhida}
                    keyExtractor={(item) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Pratica data={item} />
                    )}
                />
            </OptionsView>
        <Bottom navigation={navigation} />
        </StyledSafeArea>
    )
}