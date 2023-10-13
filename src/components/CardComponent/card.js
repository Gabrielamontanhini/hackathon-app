import { Text } from "react-native";
import { StyledCard, TitleCard,CardIcon } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../constants/colors/colors";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export function Card({ data }) {

    return (
        <Text>
            <StyledCard>
                <TitleCard>{data.label}</TitleCard>
                <CardIcon>
                    <FontAwesomeIcon icon={faChevronRight} size={24} color={colors.bordersColor} />
                </CardIcon>
            </StyledCard>
            {data.name}
        </Text>
    )
}

