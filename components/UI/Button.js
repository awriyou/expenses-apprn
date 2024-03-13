import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constant/styles";

const Button = ({children, onPress, mode, style}) => {
    return (
        <View style={style}>
        {/* style props diatas digunakan untuk menambahkan style yang diinginkan untuk parent button */}
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed }>
                <View style={[styles.button, mode === 'flat' && styles.flat]}> 
                {/* ini digunakan untuk menentukan style button transparant atau yang primary (seperti style yang sudah ada) */}
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
                    {/* sama seperti parent nya, bisa memilih 2 style yang diinginkan */}
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.third,
    },
    flat: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: GlobalStyles.colors.third
    },
    buttonText: {
        color: GlobalStyles.colors.fiveth,
        textAlign: 'center'
    },
    flatText: {
        color: GlobalStyles.colors.third
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.fourth,
        borderRadius: 4,
    }
    
})