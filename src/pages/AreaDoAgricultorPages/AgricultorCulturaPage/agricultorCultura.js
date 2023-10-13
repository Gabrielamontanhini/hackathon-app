
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import { AdicionarCulturas, AdicionarCulturasButton, AdicionarMinhasCulturasText, CulturasContainerContainer, MinhasCulturasContainer, MinhasCulturasTitle, MinhasCultusTitleText } from "../../../styles/MinhasCulturas";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Culturas } from "../../../components/CulturasComponents/culturasComponents";
export default function Cultura({ navigation }) {
    const adicionarCultura = () => {
        alert("cria a cultura")
    }

    const culturas = [
        {name:"cultura"},
        {name:"cultura"},
        {name:"cultura"},
        {name:"cultura"},
        {name:"cultura"},
        {name:"cultura"},
        {name:"cultura"},
        {name:"cultura"},
    ]
    return (
        <StyledSafeArea>
            <MinhasCulturasContainer>
                <MinhasCulturasTitle>
                    <MinhasCultusTitleText>
                        Minhas Culturas
                    </MinhasCultusTitleText>
                </MinhasCulturasTitle>
               <CulturasContainerContainer>
               {culturas.map((cultura)=>{
                    return <Culturas data={cultura}/>
                })}
               </CulturasContainerContainer>
            </MinhasCulturasContainer>
            <AdicionarCulturas >
                <AdicionarMinhasCulturasText>
                    Adicionar Cultura
                </AdicionarMinhasCulturasText>
                <AdicionarCulturasButton onPress={()=>{adicionarCultura()}}>
                    <FontAwesomeIcon icon={faPlus} size={60}/>
                </AdicionarCulturasButton>
            </AdicionarCulturas>
        </StyledSafeArea>
    )
}