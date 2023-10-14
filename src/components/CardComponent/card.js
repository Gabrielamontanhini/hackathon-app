import { Text } from "react-native";
import { StyledCard, TitleCard,CardIcon, TitleCardText } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../constants/colors/colors";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export function Card({ data }) {

    return (
            <StyledCard>
                <TitleCard><TitleCardText>{data.label}</TitleCardText></TitleCard>
                <CardIcon>
                    <FontAwesomeIcon icon={faChevronRight} size={24} color={colors.nonSelectedIcon} />
                </CardIcon>
            </StyledCard>
       
    )
}

