import { Alert, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import { GlobalStyles } from '../../constant/styles';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../../utils/date';

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  //   const [amountValue, setAmountValue] = useState('') //! NOTE : VALUE UNTUK FORM HARUS TETAP STRING, NANTI BARU DI KONVERSI KE YANG DINGINKAN
  //? state diatas tidak perlu digunakan lagi karena kita akan menggunakan state yang lebih scalable, yaitu dengan cara dibawah ini
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      //   isValid: defaultValues ? true : false, //!atau kita dapat mengubahnya ke ternary
      //   isValid: !!defaultValues, //ubah nilai ini menjadi true, agar tidak muncul terlebih dahulu saat add expense (karena nilai nya masih string kosong)
      isValid: true,
    },
    // date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '', //kenapa 0 dan 10? karena yang kita ingin ambil dari konversi objet ke string adalah abjad ke 0 sampai 10
    //! atau kita gunakan getFormattedDate yang sudah dibuat pada utils yg sudah dibuat sebelumnya
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      }; //! cara ini akan membuat kita dapat set value secara dinamis
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    //? CREATE VALIDATION
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //show feedback
    //   Alert.alert('Invalid Input', 'Please check your input!!');
        setInputs((curInputs) => {
            return {
                amount: {value: curInputs.amount.value, isValid: amountIsValid},
                date: {value: curInputs.date.value, isValid: dateIsValid},
                description: {value: curInputs.description.value, isValid: descriptionIsValid},
            }
        })
      return;
    }

    onSubmit(expenseData); //! ini adalah cara untuk mengirimkan data yang dimasukan oleh user ke screen manageExpenses yang nantinya akan di proses lagi
  }

  //a helper for valid declaration 3 values
  const formIsInvalid = 
  !inputs.amount.isValid ||
  !inputs.date.isValid ||
  !inputs.description.isValid 
  

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Input Values - Please check your entered data
        </Text>
      )}
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
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error,
    margin: 8,
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
