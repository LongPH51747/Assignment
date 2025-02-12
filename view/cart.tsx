import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import Itemcart from '../view/itemcart';
import TabBar from './tabbar';
import item from './item';
// import {Cart} from '../model/cart'
const colorText = (color: string): TextStyle => ({
  color: color,
});
const sizeText = (size: number): TextStyle => ({
  fontSize: size,
});
const dataCart = [1, 1, 1, 1, 1];
const Cart = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(12, 15, 20, 1)'}></StatusBar>
      <View style={styles.head}>
        <View style={styles.menu}>
          <Image source={require('../img/menu.png')}></Image>
        </View>
        <Text style={[colorText('white'), sizeText(20), styles.title]}>
          Cart
        </Text>
        <Image source={require('../img/Intersect.png')}></Image>
      </View>
      <FlatList
        style={styles.listcart}
        data={dataCart}
        renderItem={({item}) => <Itemcart />}></FlatList>
      <View style={styles.totalprice}>
        <View>
          <Text style={[sizeText(14), colorText('rgba(174, 174, 174, 1)')]}>
            Total price
          </Text>
          <Text>
            <Text style={[sizeText(20), colorText('orange')]}>$</Text>
            <Text style={[sizeText(20), colorText('white')]}>31.0</Text>
          </Text>
        </View>
        <View style={styles.pay}>
          <Text style={[colorText('white'), sizeText(15)]}>Pay</Text>
        </View>
      </View>
      <TabBar></TabBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(12, 15, 20, 1)',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  head: {
    width: 340,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center',
  },
  menu: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(33, 38, 46, 1)',
    borderStyle: 'solid',
    borderColor: 'rgba(33, 38, 46, 0)',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  listcart: {
    alignSelf: 'center',
  },
  totalprice: {
    width: 350,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  pay: {
    width: 240,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(209, 120, 66, 1)',
    borderRadius: 20,
  },
});

export default Cart;
