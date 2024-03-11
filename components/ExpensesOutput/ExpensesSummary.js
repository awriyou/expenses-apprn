import { Text, View } from "react-native";

const ExpensesSummary = ({expenses, periodName }) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount 
    }, 0)
    const formattedAmount = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(expensesSum);

    return (
      <View>
        <Text>{periodName}</Text>
        <Text>Rp {formattedAmount}</Text>
        {/* <Text>Rp {expensesSum.toFixed(2)}</Text> */}
      </View>
    );
}

export default ExpensesSummary;