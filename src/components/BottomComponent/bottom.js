import { MenuButton} from "./styled"
import { ButtomContainer } from "./styled"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faBars,faBookmark } from "@fortawesome/free-solid-svg-icons"
export default Bottom = ({ navigation,selected = "menu" }) => {
    return (
        <ButtomContainer>
            <MenuButton selected={selected === "menu"? true: false}
                onPress={() => navigation.openDrawer()}
            ><FontAwesomeIcon icon={faBars} size={"30px"} style={selected === "menu" ?{color:"white"}:{color:"black"}}/></MenuButton>
            <MenuButton selected={selected === "salvos"? true: false}
                onPress={() => navigation.navigate('minhas culturas')}
            ><FontAwesomeIcon icon={faBookmark} size={"30px"} style={selected === "salvos" ?{color:"white"}:{color:"black"}}/></MenuButton>
             <MenuButton selected={selected === "salvos"? true: false}
                onPress={() => navigation.navigate('Área do Agricultor')}
            ></MenuButton>
        </ButtomContainer >
    )
}
