import {Image, StyleSheet, Text, TextStyle, View} from 'react-native';
import item from './item';
import {Cart} from '../model/cart';

const ItemLove = () => {
  const colorText = (color: string): TextStyle => ({
    color: color,
  });
  const sizeText = (size: number): TextStyle => ({
    fontSize: size,
  });
  const lineHeight = (line: number): TextStyle => ({
    lineHeight: line
  })
  const backgroundColor = (color: string): TextStyle => ({
    backgroundColor: color
  })
  return (
    <View style={styles.containeritemcart}>
      <View>
        <Image
          style={styles.imgitemcart}
          source={require('../img/cappuccinodetail.png')}></Image>
          <View style={styles.hearth}>
            <Image source={require('../img/Vector.png')}></Image>
          </View>
        <View style={styles.overlay}>
          <View style={styles.name}>
            <Text style={[colorText('white'),sizeText(20)]}>Cappuccino</Text>
            <Text style={[colorText('rgba(174, 174, 174, 1)'),sizeText(12)]}>With Steamed Milk</Text>
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
        <Text style={[sizeText(14), colorText('rgba(174, 174, 174, 1)')]}>Description</Text>
        <Text style={[colorText('white'), sizeText(12),lineHeight(20)]}>
          Cappuccino is a latte made with more foam than steamed milk, often
          with a sprinkle of cocoa powder or cinnamon on top.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containeritemcart: {
    flexDirection: 'column',
    backgroundColor: 'rgba(38, 43, 51, 1)',
    borderRadius: 23,
    width: 350,
    minHeight: 575,
    marginBottom: 20,
  },
  imgitemcart: {
    width: 350,
    height: 475,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  description: {
    width: 301,
    minHeight: 60,
    alignSelf: 'center',
    marginTop: 10,
    lineHeight: 20
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
    marginVertical: 10
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
    marginBottom: 10
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
    marginVertical: 20
  },
  hearth: {
    width: 33.43,
    height: 33.43,
    backgroundColor: 'rgba(33, 38, 46, 1)',
    position: 'absolute',
    top: 26,
    right: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(12, 15, 20, 1)',
    justifyContent:'center',
    alignItems: 'center',
  }
});

export default ItemLove;
