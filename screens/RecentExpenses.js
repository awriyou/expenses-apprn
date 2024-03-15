import { Text } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { useContext, useEffect } from 'react';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../utils/date';
import { fetchExpenses } from '../utils/http';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]) //!gajadi

  useEffect(() => {
    async function getExpenses(){
      const expenses = await fetchExpenses()
      // setFetchedExpenses(expenses) //! gajadi, pakai ctx
      expensesCtx.setExpenses(expenses)
    }

    getExpenses();
  }, [])

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
  // const recentExpenses = fetchedExpenses.filter((expense) => {//!gajadi
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  }); //! ini digunakan untuk memfilter expenses yang masuk dalam 7 hari terakhir
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses added for the last 7 days."
    />
  );
};

export default RecentExpenses;
