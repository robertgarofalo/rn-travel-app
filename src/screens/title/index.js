import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import styles from './styles';

const Title = ({ text, style }) => {
  return (
        <View>
             <Text style={[styles.title, style]}>{text}</Text>
        </View>
  )
}
export default Title