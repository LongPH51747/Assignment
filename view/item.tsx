import {Image, StyleSheet, Text, TextStyle, View} from 'react-native';

const item = () => {
  const colorText = (color: string): TextStyle => ({
    color: color,
  });
  return (
    <View style={styles.containerItem}>
      <Image
        style={styles.imgItem}
        source={require('../img/cappuchino.png')}></Image>
      <View style={styles.centerVerticalItem}>
        <Text style={colorText('white')}>Cappuchino</Text>
        <Text style={colorText('white')}>With Steamed Milk</Text>
        <View style={styles.centerVerticalItem}>
          <Text>
            <Text style={colorText('orange')}>$</Text> <Text style={colorText('white')}>4.20</Text>
          </Text>
          <View style={styles.addItem}>
            <Text style={colorText('white')}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    width: 150,
    height: 246,
    backgroundColor: 'rgba(37, 42, 50, 1)',
    borderRadius: 23,
    justifyContent: 'center',
  },
  imgItem: {
    alignSelf: 'center',
  },
  addItem: {
    flex: 1,
    width: 28.44,
    height: 28.44,
    backgroundColor: 'orange',
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    fontSize: 15,
  },
  viewItem: {
    width: '100%',
  },
  centerVerticalItem: {
    justifyContent: 'center',
    margin: 5
  }
});

export default item;
