import { Text, TextInput, View } from "react-native";

const Input = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      {/* <TextInput keyboardType={type} maxLength={maxLength}/> //! ini akan diubah saja menjadi spreadOperator (object props) */}
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;