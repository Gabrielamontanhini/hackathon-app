import { Text } from "react-native";
import { StyledCard } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../../constants/colors/colors";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


export function Card({ data }) {

    return (
        <Text>
            <StyledCard>
                <Text>{data.label}</Text>
                <FontAwesomeIcon  icon={faChevronRight} size={24} color={colors.bordersColor} />
            </StyledCard>
            {data.name}
        </Text>
    )
}

