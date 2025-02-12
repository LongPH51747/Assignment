import {Image, StyleSheet, Text, TextStyle, View} from 'react-native';
import item from './item';
import {Cart} from '../model/cart'

const Itemcart = () => {
  const colorText = (color: string): TextStyle => ({
    color: color,
  });
  const sizeText = (size: number): TextStyle => ({
    fontSize: size,
  });
  return (
    <View style={styles.containeritemcart}>
      <Image
        style={styles.imgitemcart}
        source={require('../img/cappuchino.png')}></Image>
      <View>
        <Text style={[sizeText(20), colorText('white')]}>Cappuccino</Text>
        <Text style={[colorText('gray'), sizeText(12)]}>With Steamed Milk</Text>
        <View style={styles.sizeandpriceitemcart}>
          <View style={styles.sizeitemcart}>
            <Text style={[sizeText(20), colorText('white')]}>M</Text>
          </View>
          <View>
            <Text>
              <Text style={[sizeText(20), colorText('orange')]}>$</Text>{' '}
              <Text style={[sizeText(20), colorText('white')]}>6.20</Text>
            </Text>
          </View>
        </View>
        <View style={styles.quantityandtanggiamitemcart}>
          <View style={styles.tanggiamitemcart}>
            <Text style={[sizeText(20), colorText('white')]}>--</Text>
          </View>
          <View style={styles.quantityitemcart}>
            <Text style={[sizeText(20), colorText('white')]}>1</Text>
          </View>
          <View style={styles.tanggiamitemcart}>
            <Text style={[sizeText(20), colorText('white')]}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containeritemcart: {
    flexDirection: 'row',
    backgroundColor: 'rgba(38, 43, 51, 1)',
    borderRadius: 23,
    width: 340,
    height: 155,
    alignItems: 'center',
    marginBottom: 20
  },
  imgitemcart: {
    marginHorizontal: 13,
    width: 126,
    height: 126,
  },
  sizeandpriceitemcart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: 150,
    justifyContent: 'space-between',
  },
  sizeitemcart: {
    width: 72,
    height: 35,
    justifyContent: 'center',
    backgroundColor: 'rgba(12, 15, 20, 1)',
    borderRadius: 10,
    alignItems: 'center',
  },
  quantityandtanggiamitemcart: {
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tanggiamitemcart: {
    width: 28.44,
    height: 28.44,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  quantityitemcart: {
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    backgroundColor: 'rgba(12, 15, 20, 1)',
    borderRadius: 7
  },
});

export default Itemcart;
