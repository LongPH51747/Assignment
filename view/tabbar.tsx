import { Image, StyleSheet, View } from "react-native"

const TabBar = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../img/home.png')}></Image>
            <Image source={require('../img/cart.png')}></Image>
            <Image source={require('../img/hearth.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(12, 15, 20, 1)',
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
    }
})

export default TabBar