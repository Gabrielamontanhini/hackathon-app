
import { TinyHeader } from "../../../components/HeaderComponents/tinyHeader";
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import Bottom from "../../../components/BottomComponent/bottom";
import { Text } from "react-native";
export default function Cultura({navigation}) {
    return (
        <StyledSafeArea>
            <TinyHeader />
            <Text>Minhas Cultura</Text>
        <Bottom navigation={navigation} />
        </StyledSafeArea>
    )
}