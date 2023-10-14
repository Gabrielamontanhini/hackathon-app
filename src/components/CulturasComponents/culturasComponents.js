import { CulturasContainer, CulturaText } from "../../styles/MinhasCulturas"

export const Culturas = ({ data }) => {
    return (
        <CulturasContainer>
            <CulturaText>{data.name}</CulturaText>
        </CulturasContainer>
    )
}