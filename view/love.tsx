import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import ItemLove from './itemlove';
import TabBar from './tabbar';

const dataLove = [1, 1, 1, 1];
const colorText = (color: string): TextStyle => ({
  color: color,
});
const sizeText = (size: number): TextStyle => ({
  fontSize: size,
});
const Love = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(12, 15, 20, 1)'}></StatusBar>
      <View style={styles.head}>
        <View style={styles.menu}>
          <Image source={require('../img/menu.png')}></Image>
        </View>
        <Text style={[colorText('white'), sizeText(20), styles.title]}>
          Favorites
        </Text>
        <Image source={require('../img/Intersect.png')}></Image>
      </View>
      <FlatList
        style={styles.list}
        data={dataLove}
        renderItem={({item}) => <ItemLove />}></FlatList>
      <TabBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(12, 15, 20, 1)',
    flex: 1
  },
  list: {
    alignSelf: 'center',
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
});

export default Love;
