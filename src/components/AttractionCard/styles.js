import { StyleSheet, Dimensions } from "react-native";
//  post on screen dimension for images - https://reactnative.dev/docs/dimensions
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    card: {
        marginRight: 6,
        marginBottom: 10,
        padding: 4,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        borderRadius: 15, 
    },
    image: {
        width: (width - 96) / 2,
        height: 120,
        borderRadius: 15, 
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 12,
        marginLeft: 6,
        color: '#000',
    },
    subtitle: {
        fontSize: 8,
        fontWeight: '300',
        color: 'rgba(0,0,0,0.5)',
        marginBottom: 12, 
        marginLeft: 6,
        marginTop: 2

    },
});

export default styles;