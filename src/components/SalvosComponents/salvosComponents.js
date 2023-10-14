import { SalvoText, SalvosContainer } from "./salvoStyle.js"

export const ItensSalvos = ({ data }) => {
    return (
        <SalvosContainer>
            <SalvoText>{data.name}</SalvoText>
        </SalvosContainer>
    )
}