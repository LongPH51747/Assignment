import { Image, StyleSheet, Text, View } from "react-native"

const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("./img/logo.png")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(12, 15, 20, 1)'
  },
  img: {
    width: 189,
    height:189
  }
})

export default App