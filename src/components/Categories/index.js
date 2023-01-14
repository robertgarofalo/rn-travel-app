import React from "react"
import { FlatList, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    return (
        <FlatList 
            horizontal
            keyExtractor={item => String(item)}
            style={{ marginRight: -32}}
            showsHorizontalScrollIndicator={false}
            data={categories} 
            renderItem={({ item }) => {
               
                const selected = selectedCategory === item
               
               return (
                    <TouchableOpacity onPress={() => onCategoryPress(item)} style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}]}>
                        <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>
                    )
                }
            } 
            
        />
    )
}

export default React.memo(Categories)