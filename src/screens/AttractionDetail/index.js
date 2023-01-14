import { View, ImageBackground, SafeAreaView, Text, Image, Pressable } from 'react-native'
import styles from './styles';

const AttractionDetails = ({ route, navigation }) => {
const { item } = route?.params 
const mainImage = item?.images?.length ? item?.images[0] : null

const onGalleryNavigate = () => {
  navigation.navigate('Gallery', {images: item?.images})
}

  return (
      <SafeAreaView style={styles.container}>
        <ImageBackground 
          source={{uri: mainImage}} 
          style={styles.mainImage} 
          imageStyle={{borderRadius: 20}}
        >
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
              <Image style={styles.icon} source={require('../../assets/back.png')} />
            </Pressable>
            <Pressable hitSlop={8}>
              <Image style={styles.icon} source={require('../../assets/share.png')} />
            </Pressable>
          </View>

          <View style={styles.footer}>
            {item?.images?.length ? item?.images.map((image, index) => {

            if (index >= 4){
              return
                }

                console.log(image)

              return (
              <Pressable onPress={() => onGalleryNavigate()}>
                <Image key={image} source={{uri: image}} style={styles.miniImage}
                />
              </Pressable>
            )
                
          
          }
            
            ) : null}
          </View>

        </ImageBackground>
          <Text>{item.name}</Text >
      </SafeAreaView>
  )
}

export default AttractionDetails