
import { StyledSafeArea } from "../../../styles/styledSafeArea";
import Bottom from "../../../components/BottomComponent/bottom";
import { MinhasCulturasContainer, MinhasCulturasTitle } from "../../../styles/MinhasCulturas";

export default function Cultura({navigation}) {
    return (
        <StyledSafeArea>
              <MinhasCulturasContainer>
                 <MinhasCulturasTitle>
                    <Text>Minhas Culturas</Text>
                 </MinhasCulturasTitle>
            </MinhasCulturasContainer>  
        <Bottom navigation={navigation} />
        </StyledSafeArea>
    )
}