import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 14,
        marginRight: 17,
    },
    selectedItemContainer: {
        borderBottomColor: '#4681A3',
        borderBottomWidth: 1
    },
    item: {
        fontSize: 14,
        color: 'rgba(0,0,0,0.5)',
        fontWeight:'bold',
        paddingVertical: 2,
    },
    selectedItem: {
        // textDecorationLine: 'underline',
        color: '#000',
    }
});

export default styles;