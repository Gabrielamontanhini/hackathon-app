import { Text } from "react-native";






export function Card({data}){
    
    return (
        <Text>
        {/*<StyledCard>
           *  <Text>{data.name}</Text>
            <FontAwesome5 name="arrow-right" size={24} color={colors.bordersColor}/>
        </StyledCard>*/}
        {data.name}</Text>
    )
}

