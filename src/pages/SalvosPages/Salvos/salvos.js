
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { CulturasContainerContainer, MinhasCulturasContainer, MinhasCulturasTitle, MinhasCultusTitleText } from "../../../styles/MinhasCulturas";
import { Culturas } from "../../../components/CulturasComponents/culturasComponents";
import { SalvosContainerContainer } from "../../../styles/salvosPages";
import { ItensSalvos } from "../../../components/SalvosComponents/salvosComponents.js";

export default function Salvos() {
    const salvos = [
        { id: 1, name: " item salvo" },
        { id: 2, name: " item salvo" },
        { id: 3, name: " item salvo" },
        { id: 4, name: " item salvo" },
        { id: 5, name: " item salvo" },
        { id: 6, name: " item salvo" }
    ]

    return (
        <StyledSafeArea>
            <MinhasCulturasContainer maxHeight={"94%"}>
                <MinhasCulturasTitle><MinhasCultusTitleText>NOTÍCIAS SALVAS</MinhasCultusTitleText></MinhasCulturasTitle>
                <SalvosContainerContainer>
                    {salvos.map((cultura) => {
                        return <ItensSalvos key={cultura.id} data={cultura} />
                    })}
                </SalvosContainerContainer>
                <MinhasCulturasTitle><MinhasCultusTitleText>POSTS SALVOS</MinhasCultusTitleText></MinhasCulturasTitle>
                <SalvosContainerContainer>
                    {salvos.map((cultura) => {
                        return <ItensSalvos key={cultura.id} data={cultura} />
                    })}
                </SalvosContainerContainer>
            </MinhasCulturasContainer>
        </StyledSafeArea>
    )
}