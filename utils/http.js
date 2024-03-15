import axios from 'axios';

const BACKEND_URL = 'https://expense-apprn-default-rtdb.firebaseio.com';

export function storeExpense(expenseData) {
  axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
}

export function getExpenses(){
    axios.get(
      `${BACKEND_URL}/expenses.json`
    );
}