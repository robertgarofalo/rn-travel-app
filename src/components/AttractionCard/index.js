import React from "react"
import { View, Text, Image, Pressable } from "react-native"
import styles from "./styles"

const AttractionCard = ({imageSrc, title, subtitle}) => {
    return (
        <Pressable style={styles.card}>
            <Image style={styles.image} source={{ uri: imageSrc}}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </Pressable>
    )
}

export default React.memo(AttractionCard)