import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constant/styles";




const ExpensesOutput = ({expenses, expensesPeriod}) => {
    return (
      <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
        <ExpensesList expenses={expenses} />
      </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.sixth,

    }
})