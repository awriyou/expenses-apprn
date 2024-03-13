import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of Shoes',
    amount: 200000,
    date: new Date('2023-12-19'),
  },
  {
    id: 'e2',
    description: 'A T-shirt',
    amount: 50000,
    date: new Date('2023-12-20'),
  },
  {
    id: 'e3',
    description: 'A Liquid vape',
    amount: 150000,
    date: new Date('2023-12-23'),
  },
  {
    id: 'e4',
    description: 'A Book of programming language',
    amount: 35000,
    date: new Date('2023-12-26'),
  },
  {
    id: 'e5',
    description: 'A book of web programming',
    amount: 55000,
    date: new Date('2022-12-26'),
  },
  {
    id: 'e6',
    description: 'A T-shirt',
    amount: 50000,
    date: new Date('2023-12-20'),
  },
  {
    id: 'e7',
    description: 'A Liquid vape',
    amount: 150000,
    date: new Date('2023-12-23'),
  },
  {
    id: 'e8',
    description: 'A Book of programming language',
    amount: 35000,
    date: new Date('2023-12-26'),
  },
  {
    id: 'e9',
    description: 'A book of web programming',
    amount: 55000,
    date: new Date('2022-12-26'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  deleteExpenses: (id) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => {
        expense.id === action.payload.id;
      });
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem
      return updatedExpenses
    case 'DELETE':
        return state.filter((expense) => expense.id !== action.payload)
        default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
