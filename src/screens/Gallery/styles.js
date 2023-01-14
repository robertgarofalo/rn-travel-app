import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 32,
        flex: 1
    },
    subtitle: {
        fontSize: 20,
        color: '#000',
        marginTop: 40,
        marginBottom: 18
    },
    row: {
        flexDirection: "row",
        flexWrap: 'wrap'
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 34,
        fontSize: 13,
        color: 'rgba(0,0,0,0.5)'
    }
});

export default styles;