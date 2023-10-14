
import { StyledCard, TitleCard,CardIcon, TitleCardText } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../constants/colors/colors";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export function Card({ data,icon }) {

    return (
            <StyledCard>
                <TitleCard><TitleCardText>{data.label}</TitleCardText></TitleCard>
               
                {icon?<CardIcon>
                    <FontAwesomeIcon icon={faChevronRight} size={24} color={colors.nonSelectedIcon} />
                </CardIcon>:""}
            </StyledCard>
       
    )
}

