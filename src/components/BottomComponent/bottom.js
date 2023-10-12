import { Button } from "./styled"
import { ButtomContainer } from "./styled"
import { Text } from "react-native"
export default Bottom = ({ navigation }) => {
    console.log(navigation)

    return (
        <ButtomContainer>

            <Button
                onPress={() => navigation.navigate('forum')}
            >
                <Text>
                    Forum
                </Text></Button>
            <Button
                onPress={() => navigation.navigate('areadoagricultor')}
            >
                <Text>
                    Area do  agricultor
                </Text></Button>
            <Button
                onPress={() => navigation.navigate('capacitação')}
            >
                <Text>
                    capacitação
                </Text></Button>

        </ButtomContainer >
    )
}
