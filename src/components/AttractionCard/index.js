import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const AttractionCard = ({imageSrc, title, subtitle, item}) => {
const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('AttractionDetails', {item})} style={styles.card}>
            <Image style={styles.image} source={{ uri: imageSrc}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(AttractionCard)