
import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constant/styles";
import Button from "./Button";

const ErrorOverlay = ({message, onConfirm}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.text]}>An Error Occured</Text>
            <Text style={styles.text}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.forth
    },
    text: {
        color: GlobalStyles.colors.primary,
        textAlign: 'center',
        marginBottom: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
})