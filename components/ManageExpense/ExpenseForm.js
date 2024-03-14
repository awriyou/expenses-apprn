import { StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { GlobalStyles } from '../../constant/styles';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../../utils/date';

const ExpenseForm = ({onCancel, onSubmit, submitButtonLabel, defaultValues}) => {
  //   const [amountValue, setAmountValue] = useState('') //! NOTE : VALUE UNTUK FORM HARUS TETAP STRING, NANTI BARU DI KONVERSI KE YANG DINGINKAN
  //? state diatas tidak perlu digunakan lagi karena kita akan menggunakan state yang lebih scalable, yaitu dengan cara dibawah ini
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '', //kenapa 0 dan 10? karena yang kita ingin ambil dari konversi objet ke string adalah abjad ke 0 sampai 10
    //! atau kita gunakan getFormattedDate yang sudah dibuat pada utils yg sudah dibuat sebelumnya
    date: defaultValues ? getFormattedDate(defaultValues.date) : '',
    description: defaultValues ? defaultValues.description : '',
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
      return { ...curInputValues, [inputIdentifier]: enteredValue }; //! cara ini akan membuat kita dapat set value secara dinamis
    });
  }

  function submitHandler() {
      const expenseData = {
        amount : + inputValues.amount,
        date   : new Date(inputValues.date),
        description : inputValues.description,
      }
      onSubmit(expenseData) //! ini adalah cara untuk mengirimkan data yang dimasukan oleh user ke screen manageExpenses yang nantinya akan di proses lagi
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
