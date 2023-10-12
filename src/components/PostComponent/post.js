import { Text } from "react-native";
import { StyledPost } from "./styled";

export function Post({data}){
    return (
        <StyledPost>
            <Text>{data.titulo}</Text>
            <Text>{data.usuario}</Text>
            <Text>{data.comentario}</Text>
        </StyledPost>
    )
}