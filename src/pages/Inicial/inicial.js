import { BigHeader } from "../../components/HeaderComponents/bigHeader";
import { StyledSafeArea } from "../../styles/styledSafeArea";
import { Card } from "../../components/CardComponent/card";
import Bottom from "../../components/BottomComponent/bottom";
import { TouchableOpacity } from "react-native";


export default function Inicial({ navigation }) {
    return (
        <StyledSafeArea>
            <BigHeader />
            <TouchableOpacity onPress={() => navigation.navigate('areadoagricultor')}>
                <Card data={{ label: 'Área do Agricultor' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('noticias')}>
                <Card data={{ label: 'Notícias' }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('capacitação')}>
                <Card data={{ label: 'Capacitação' }} />
            </TouchableOpacity>
            <Bottom navigation={navigation} />
        </StyledSafeArea>
    )
}