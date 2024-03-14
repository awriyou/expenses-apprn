import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { GlobalStyles } from '../../constant/styles';
import { useState } from 'react';
import Button from '../UI/Button';

const ExpenseForm = ({onCancel, onSubmit, submitButtonLabel}) => {
  //   const [amountValue, setAmountValue] = useState('') //! NOTE : VALUE UNTUK FORM HARUS TETAP STRING, NANTI BARU DI KONVERSI KE YANG DINGINKAN
  //? state diatas tidak perlu digunakan lagi karena kita akan menggunakan state yang lebih scalable, yaitu dengan cara dibawah ini
  const [inputValues, setInputValues] = useState({
    amount: '',
    date: '',
    description: '',
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return { ...curInputValues, [inputIdentifier]: enteredValue }; //! cara ini akan membuat kita dapat set value secara dinamis
    });
  }

  function submitHandler() {
      
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
