
import { TinyHeader } from "../../../components/HeaderComponents/tinyHeader"
import Bottom from "../../../components/BottomComponent/bottom"
import { StyledSafeArea } from "../../../styles/styledSafeArea"
import { Text, TouchableOpacity } from "react-native"
import { OptionsView } from "../../../styles/styledOptions"


export default function Agricultor({ navigation }) {
  
    return (
        <StyledSafeArea>
            <TinyHeader />
            <Text>Olá Agricultore</Text>
            <OptionsView>
               <TouchableOpacity onPress={()=>{navigation.navigate("minhas culturas")}}>
                    <Text>Minhas culturas</Text>
               </TouchableOpacity>
            </OptionsView>



        <Bottom navigation={navigation}/>
        </StyledSafeArea>
    )
}