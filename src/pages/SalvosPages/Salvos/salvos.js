
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { CulturasContainerContainer, MinhasCulturasContainer, MinhasCulturasTitle, MinhasCultusTitleText } from "../../../styles/MinhasCulturas";
import { Culturas } from "../../../components/CulturasComponents/culturasComponents";
import { SalvosContainerContainer } from "../../../styles/salvosPages";
export default function Salvos(){
    const salvos = [
        {id:1,name:" item salvo"},
        {id:2,name:" item salvo"}
    ]
    
    return (
        <StyledSafeArea>
            <MinhasCulturasContainer>
                <MinhasCulturasTitle><MinhasCultusTitleText>Noticias Salvas</MinhasCultusTitleText></MinhasCulturasTitle>
                <SalvosContainerContainer height={50}>
                {salvos.map((cultura)=>{
                    return <Culturas key={cultura.id} data={cultura}/>
                })}
                </SalvosContainerContainer>
                <MinhasCulturasTitle><MinhasCultusTitleText>Noticias Salvas</MinhasCultusTitleText></MinhasCulturasTitle>
                <SalvosContainerContainer height={50}>
                {salvos.map((cultura)=>{
                    return <Culturas key={cultura.id} data={cultura}/>
                })}
                </SalvosContainerContainer>
            </MinhasCulturasContainer>
        </StyledSafeArea>
    )
}