import { Text } from "react-native";
import { StyledCall, StyledNotice, StyledTitle } from "./styled";

export function Notice({ data }) {

    return (
        <StyledNotice>
            <StyledTitle>
                <Text>{data.title}</Text>
            </StyledTitle>
            <StyledCall>
                <Text> {data.text}</Text>
            </StyledCall>
            <Text>Fontes: {data.source}</Text>
        </StyledNotice>
    )
}