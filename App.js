import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bottom from './src/components/BottomComponent/bottom';
import UserProvider from './src/context/UserContext/usercontext';

export default function App() {
  const lsSessao = JSON.parse(localStorage.getItem("sessao"))

  return (
    <UserProvider>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
     
      <StatusBar style="auto" />
    </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
