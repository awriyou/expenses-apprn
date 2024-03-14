import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { GlobalStyles } from '../../constant/styles';

const ExpenseForm = () => {
  function amountChangeHandler() {}
  return (
    <View style={styles.form}>
    <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {},
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 80,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary,
        marginVertical: 12,
        textAlign: 'center',
    },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});
