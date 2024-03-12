import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constant/styles";

const ExpensesSummary = ({expenses, periodName }) => {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount 
    }, 0)
    const formattedAmount = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(expensesSum);

    return (
      <View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>{formattedAmount}</Text>
        {/* <Text>Rp {expensesSum.toFixed(2)}</Text> */}
      </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.forth,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary,
    }
})