import { Text } from "react-native";
import { StyledCard } from "./style";
import { FontAwesome5 } from '@expo/vector-icons'
import { colors } from "../../constants/colors/colors";




export function Card({data}){
    
    return (
        <StyledCard>
            <Text>{data.label}</Text>
            <FontAwesome5 name="arrow-right" size={24} color={colors.bordersColor}/>
        </StyledCard>
    )
}

