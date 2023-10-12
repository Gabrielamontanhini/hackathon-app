import { Text } from "react-native";
import { StyledCall, StyledNotice, StyledTitle } from "./styled";

export function Notice({data}) {
   
    return (
        <StyledNotice>
            <StyledTitle>
                <Text>{data.titulo}</Text>
            </StyledTitle>
            <StyledCall>
                <Text> {data.chamada}</Text>
            </StyledCall>
            
        </StyledNotice>
    )
}