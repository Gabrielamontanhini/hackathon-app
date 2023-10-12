import { Button, FlatList, Text, View } from "react-native";
import { posts } from "../../constants/Posts/posts";
import { Post } from "../../components/PostComponent/Post";
import { StyledSafeArea } from "../../styles/styledSafeArea";
import Bottom from "../../components/BottomComponent/bottom";

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


          <Bottom navigation={navigation}/>
        </StyledSafeArea>
    )
}