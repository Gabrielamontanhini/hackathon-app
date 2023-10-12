import { Text } from "react-native"
import { StyledPratica } from "./styled"

export default function Pratica({ data }) {
    return (
        <StyledPratica>
            <Text>{data.content}</Text>
        </StyledPratica>
    )
}

