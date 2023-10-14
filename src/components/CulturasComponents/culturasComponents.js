import { CulturasContainer, CulturaText } from "../../styles/MinhasCulturas"

export const Culturas = ({ data,navigation }) => {
    return (
        <CulturasContainer  onPress={()=>navigation.navigate("cultura")}>
            <CulturaText>{data.name}</CulturaText>
        </CulturasContainer>
    )
}