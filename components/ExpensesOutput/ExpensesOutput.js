import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description : 'A pair of Shoes',
        amount: 200000,
        date: new Date('2023-12-19')
    },
    {
        id: 'e2',
        description : 'A T-shirt',
        amount: 50000,
        date: new Date('2023-12-20')
    },
    {
        id: 'e3',
        description : 'A Liquid vape',
        amount: 150000,
        date: new Date('2023-12-23')
    },
    {
        id: 'e4',
        description : 'A Book of programming language',
        amount: 35000,
        date: new Date('2023-12-26')
    },
    {
        id: 'e5',
        description : 'A book of web programming',
        amount: 55000,
        date: new Date('2022-12-26')
    },
]


const ExpensesOutput = ({expenses, expensesPeriod}) => {
    return (
      <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList />
      </View>
    );
}

export default ExpensesOutput;