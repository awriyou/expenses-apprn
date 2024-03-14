import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';

const RecentExpenses = () => {
    const expensesCtx = useContext(ExpensesContext)
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo
    }) //! ini digunakan untuk memfilter expenses yang masuk dalam 7 hari terakhir
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />;
};

export default RecentExpenses;
