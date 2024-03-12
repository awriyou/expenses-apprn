import { useLayoutEffect } from "react";
import { Text } from "react-native";

const ManageExpenses = ({route, navigation}) => {
    const editedExpenseId = route.params?.expenseId
    const isEditing = !!editedExpenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense' 
        }) //! ini digunakan untuk set apapun yang ada pada header/etc navigation pada screen nya

    }, [navigation, isEditing]) //! gunakan useEffect untuk merefresh agar bisa reflect langsung


    return (
        <Text>Manage Expenses</Text>
    );
}

export default ManageExpenses;