import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from 'react-native';

import {Coffee} from '../model/coffee';
import item from './item';
import TabBar from './tabbar';
const coffee1 = new Coffee(
  0,
  'cappuchino',
  'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.',
  4.2,
  require('../img/cappuchino.png'),
);
const coffee2 = new Coffee(
  1,
  'cappuchino',
  'With Foam',
  4.2,
  require('../img/cappuchino2.png'),
);
const coffeebeans1 = new Coffee(
  2,
  'Robusta Beans',
  'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
  4.2,
  require('../img/coffeebeans.png'),
);
const coffeebeans2 = new Coffee(
  3,
  'Cappuccino',
  'With Steamed Milk',
  4.2,
  require('../img/coffeebeans.png'),
);
//data
const dataCoffee = [coffee1, coffee2];
const dataCoffeebeans = [coffeebeans1, coffeebeans2];

const colorText = (color: string): TextStyle => ({
  color: color,
});
const sizeText = (size: number): TextStyle => ({
  fontSize: size,
});
const Item = ({item}: {item: Coffee}) => (
  <View style={styles.containerItem}>
    <Image style={styles.imgItem} source={item.img}></Image>
    <View style={styles.centerVerticalItem}>
      <Text style={[colorText('white')]}>{item.name}</Text>
      {/* <Text style={[colorText('white'), , sizeText(10)]}>
        {item.description}
      </Text> */}
      <View style={styles.centerVerticalItem}>
        <Text>
          <Text style={colorText('orange')}>$</Text>{' '}
          <Text style={colorText('white')}>{item.price}</Text>
        </Text>
        <View style={styles.addItem}>
          <Text style={colorText('white')}>+</Text>
        </View>
      </View>
    </View>
  </View>
);

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(12, 15, 20, 1)'} />
      <View style={styles.head}>
        <View style={styles.menu}>
          <Image source={require('../img/menu.png')}></Image>
        </View>
        <Image source={require('../img/Intersect.png')}></Image>
      </View>
      <Text
        style={[
          colorText('rgba(255, 255, 255, 1)'),
          sizeText(28),
          styles.title,
        ]}>
        Find the best{'\n'}
        coffee for you
      </Text>
      <View style={styles.inputContainer}>
        <Image
          style={styles.imgSearch}
          source={require('../img/search.png')}></Image>
        <TextInput
          placeholderTextColor={'rgba(82, 85, 90, 1)'}
          placeholder="Find your coffee..."></TextInput>
      </View>
      <View style={styles.option}>
        <Text style={colorText('orange')}>All</Text>
        <Text style={colorText('rgba(82, 85, 90, 1)')}>Cappuccino</Text>
        <Text style={colorText('rgba(82, 85, 90, 1)')}>Espresso</Text>
        <Text style={colorText('rgba(82, 85, 90, 1)')}>Americano</Text>
      </View>
      <ScrollView>
        <FlatList
          horizontal={true}
          data={dataCoffee}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id.toString()}></FlatList>
        <Text style={[colorText('white'), sizeText(16), styles.title]}>
          Coffe beans
        </Text>
        <FlatList
          horizontal={true}
          data={dataCoffeebeans}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id.toString()}></FlatList>
      </ScrollView>
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
    // alignItems: 'center',
  },
  head: {
    width: 340,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
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
    width: 340,
    alignSelf: 'center',
    marginVertical: 10,
  },
  imgSearch: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    width: 348,
    height: 48,
    backgroundColor: 'rgba(20, 25, 33, 1)',
    marginVertical: 10,
  },
  option: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    width: 340,
    alignSelf: 'center',
    marginVertical: 15,
  },
  containerItem: {
    width: 150,
    height: 246,
    backgroundColor: 'rgba(37, 42, 50, 1)',
    borderRadius: 23,
    justifyContent: 'center',
    marginLeft: 30,
    marginVertical: 20,
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
    margin: 5,
  },
});

export default Home;
