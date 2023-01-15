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
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 8
    },
    moreImages: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20
    },
    moreImagesContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.38)',
        width: 40,
        height: 40,
        top: 8,
        left: 4,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles;