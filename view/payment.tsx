import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const colorText = (color: string): TextStyle => ({
  color: color,
});
const sizeText = (size: number): TextStyle => ({
  fontSize: size,
});
const fontWeight = (font: any): TextStyle => ({
  fontWeight: font,
});
const Payment = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgb(12, 15, 20)'}></StatusBar>
      <View style={styles.head}>
        <View style={styles.menu}>
          <Image source={require('../img/back.png')}></Image>
        </View>
        <View>
          <Text style={[colorText('white'), sizeText(20), fontWeight('bold')]}>
            Payment
          </Text>
        </View>
      </View>
      <Text style={[colorText('white'), sizeText(17), styles.creditcard]}>
        Credit Card
      </Text>

      <LinearGradient
        colors={['rgba(38, 43, 51, 1)', 'rgba(12, 15, 20, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.card}>
        <View style={styles.visaandchip}>
          <Image source={require('../img/chipcam.png')}></Image>
          <Image source={require('../img/visacard.png')}></Image>
        </View>
        <View style={styles.number}>
          <Text
            style={[
              styles.numbercard,
              colorText('rgba(255, 255, 255, 1)'),
              sizeText(17),
            ]}>
            3897 8923 6745 4638
          </Text>
        </View>
        <View style={styles.nameanddate}>
          <View>
            <Text style={[colorText('rgba(174, 174, 174, 1)')]}>
              Card Holder Name
            </Text>
            <Text style={[colorText('rgba(255, 255, 255, 1)'), sizeText(17)]}>
              Robert Evans
            </Text>
          </View>
          <View>
            <Text style={[colorText('rgba(174, 174, 174, 1)')]}>
              Expiry Date
            </Text>
            <Text
              style={[
                styles.date,
                colorText('rgba(255, 255, 255, 1)'),
                sizeText(17),
              ]}>
              02/30
            </Text>
          </View>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(38, 43, 51, 1)', 'rgba(12, 15, 20, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.paymethod}>
        <View style={styles.row}>
          <Image source={require('../img/walletcam.png')}></Image>
          <Text style={colorText('white')}>{'\t'}Wallet</Text>
        </View>
        <View>
          <Text style={colorText('white')}>$ 100.05</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(38, 43, 51, 1)', 'rgba(12, 15, 20, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.paymethod}>
        <View style={styles.row}>
          <Image source={require('../img/ggpay.png')}></Image>
          <Text style={colorText('white')}>{'\t'}Google Pay</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        colors={['rgba(38, 43, 51, 1)', 'rgba(12, 15, 20, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.paymethod}>
        <View style={styles.row}>
          <Image source={require('../img/applepay.png')}></Image>
          <Text style={colorText('white')}>{'\t'}Apple Pay</Text>
        </View>
      </LinearGradient>
      <View style={styles.addtocart}>
        <View>
          <Text style={[sizeText(14), colorText('rgba(174, 174, 174, 1)')]}>
            Price
          </Text>
          <Text>
            <Text style={[sizeText(20), colorText('orange')]}>$</Text>
            <Text style={[sizeText(20), colorText('white')]}>31.0</Text>
          </Text>
        </View>
        <View style={styles.add}>
          <Text style={[colorText('white'), sizeText(15)]}>Pay from Credit Card</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(12, 15, 20)',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  head: {
    width: 222,
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 15,
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
    marginBottom: 10,
  },
  card: {
    width: 330,
    height: 186,
    // backgroundColor: 'rgba(38, 43, 51, 1)',
    borderRadius: 15,
    padding: 10,
    alignSelf: 'center',
    marginVertical: 15,
  },
  visaandchip: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  number: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameanddate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  numbercard: {
    lineHeight: 20,
    letterSpacing: 6,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  creditcard: {
    marginLeft: 36,
  },
  paymethod: {
    width: 350,
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 25,
    borderColor: 'rgba(38, 43, 51, 1)',
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
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
  },
});

export default Payment;
