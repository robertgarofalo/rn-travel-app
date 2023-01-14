import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        margin: 32,

    },
    mainImage: {
        width: '100%',
        height: height / 2,
        // flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(256, 256, 256, 0.35)',
        margin: 15,
        paddingHorizontal: 12
        
    },
    miniImage: {
        width: 40,
        height: 40,
        margin: 4,
    },
})

export default styles;