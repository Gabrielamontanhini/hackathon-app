import { FlatList, Text} from "react-native";
import { posts } from "../../../constants/posts/posts";
import { Post } from "../../../components/PostComponent/post";
import { StyledSafeArea } from "../../../styles/styledSafeArea";

export default function Forum({ navigation }) {
    return (
        <StyledSafeArea>
            <Text>
                Fórum
            </Text>
            <FlatList
                data={posts}
                keyExtractor={(post) => String(post.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Post data={item}/>} />


         
        </StyledSafeArea>
    )
}