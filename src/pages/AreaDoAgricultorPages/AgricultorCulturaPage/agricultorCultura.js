
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
        {id:1,name:"cultura"},
        {id:2,name:"cultura"},
        {id:3,name:"cultura"},
        {id:4,name:"cultura"},
        {id:5,name:"cultura"},
        {id:6,name:"cultura"},
        {id:7,name:"cultura"},
        {id:8,name:"cultura"},
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
                    return <Culturas key={cultura.id} data={cultura}/>
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