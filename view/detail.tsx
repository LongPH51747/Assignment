import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import item from './item';
import {Cart} from '../model/cart';

const Detail = () => {
  const colorText = (color: string): TextStyle => ({
    color: color,
  });
  const sizeText = (size: number): TextStyle => ({
    fontSize: size,
  });
  const lineHeight = (line: number): TextStyle => ({
    lineHeight: line,
  });
  const margintop = (top: number): TextStyle => ({
    marginVertical: top,
  });
  return (
    <View style={styles.containeritemcart}>
      <StatusBar backgroundColor={'transparent'} translucent></StatusBar>
      <View>
        <Image
          style={styles.imgitemcart}
          source={require('../img/cappuccinodetail.png')}></Image>
        <View style={styles.back}>
          <Image source={require('../img/back.png')}></Image>
        </View>
        <View style={styles.hearth}>
          <Image source={require('../img/Vector.png')}></Image>
        </View>
        <View style={styles.overlay}>
          <View style={styles.name}>
            <Text style={[colorText('white'), sizeText(20)]}>Cappuccino</Text>
            <Text style={[colorText('rgba(174, 174, 174, 1)'), sizeText(12)]}>
              With Steamed Milk
            </Text>
          </View>

          <View>
            <View style={styles.row}>
              <View style={styles.milkandcoffee}>
                <Image source={require('../img/coffeorange.png')}></Image>
                <Text style={colorText('rgba(174, 174, 174, 1)')}>Coffee</Text>
              </View>
              <View style={styles.milkandcoffee}>
                <Image source={require('../img/drop.png')}></Image>
                <Text style={colorText('rgba(174, 174, 174, 1)')}>Milk</Text>
              </View>
            </View>
            <View style={styles.title}>
              <Text style={[colorText('rgba(174, 174, 174, 1)')]}>
                Medium Roasted
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text
          style={[
            sizeText(17),
            colorText('rgba(174, 174, 174, 1)'),
            margintop(10),
          ]}>
          Description
        </Text>
        <Text style={[colorText('white'), sizeText(15), lineHeight(20)]}>
          Cappuccino is a latte made with more foam than steamed milk, often
          with a sprinkle of cocoa powder or cinnamon on top.
        </Text>
      </View>
      <View style={styles.size}>
        <Text style={[colorText('rgba(174, 174, 174, 1)'), sizeText(17)]}>
          Size
        </Text>
        <View style={styles.row}>
          <View style={styles.gram}>
            <Text style={colorText('rgba(174, 174, 174, 1)')}>250gm</Text>
          </View>
          <View style={styles.gram}>
            <Text style={colorText('rgba(174, 174, 174, 1)')}>500gm</Text>
          </View>
          <View style={styles.gram}>
            <Text style={colorText('rgba(174, 174, 174, 1)')}>1000gm</Text>
          </View>
        </View>
      </View>
      <View style={styles.addtocart}>
        <View>
          <Text style={[sizeText(14), colorText('rgba(174, 174, 174, 1)')]}>
            Total price
          </Text>
          <Text>
            <Text style={[sizeText(20), colorText('orange')]}>$</Text>
            <Text style={[sizeText(20), colorText('white')]}>31.0</Text>
          </Text>
        </View>
        <View style={styles.add}>
          <Text style={[colorText('white'), sizeText(15)]}>Pay</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containeritemcart: {
    flexDirection: 'column',
    backgroundColor: 'rgba(12, 15, 20, 1)',
    width: '100%',
    height: '100%',
    marginBottom: 20,
  },
  imgitemcart: {
    width: '100%',
    height: 510,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  description: {
    width: 355,
    minHeight: 60,
    alignSelf: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  milkandcoffee: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'rgba(20, 25, 33, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  title: {
    minWidth: 100,
    maxWidth: 200,
    paddingHorizontal: 9,
    minHeight: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(20, 25, 33, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 25,
  },
  name: {
    marginVertical: 20,
  },
  hearth: {
    width: 33.43,
    height: 33.43,
    backgroundColor: 'rgba(33, 38, 46, 1)',
    position: 'absolute',
    top: 50,
    right: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(12, 15, 20, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    width: 33.43,
    height: 33.43,
    backgroundColor: 'rgba(33, 38, 46, 1)',
    position: 'absolute',
    top: 50,
    left: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(12, 15, 20, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  size: {
    width: 355,
    alignSelf: 'center',
    marginTop: 20,
  },
  gram: {
    width: 100,
    height: 40,
    backgroundColor: 'rgba(20, 25, 33, 1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  addtocart: {
    width: 350,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
  },
  add: {
    width: 240,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(209, 120, 66, 1)',
    borderRadius: 20
  }
});

export default Detail;
