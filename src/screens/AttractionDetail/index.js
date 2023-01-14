import { Button, ImageBackground, SafeAreaView, Text } from 'react-native'
import styles from './styles';

const AttractionDetails = ({ route, navigation }) => {
const { item } = route?.params 
const mainImage = item?.images?.length ? item?.images[0] : null
// const mainImage = item.images[0]
console.log('item ->', item)

  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={{uri: mainImage}} style={styles.mainImage} imageStyle={{borderRadius: 20}} />
          <Text>{item.name}</Text >
          <Button title="Back" onPress={() => navigation.goBack()}></Button>
      </SafeAreaView>
  )
}

export default AttractionDetails