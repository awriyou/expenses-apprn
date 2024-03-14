import { StyleSheet, Text, TextInput, View } from 'react-native';
import { GlobalStyles } from '../../constant/styles';

const Input = ({ label, style, textInputConfig }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  } //! kondisi ini akan mengatur, jika input component digunakan untuk input multiline
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      {/* <TextInput keyboardType={type} maxLength={maxLength}/> //! ini akan diubah saja menjadi spreadOperator (object props) */}
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.fiveth,
    color: GlobalStyles.colors.secondary,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
