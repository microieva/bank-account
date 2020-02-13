// USER ACTION

buttonAdd.addEventListener('click', () => {
    if (selectType.value === 'INCOME' && description.value !='' && amount.value !='') { 
        personAccount.addIncome();
        displayIncomes();
    } 
    if (selectType.value === 'EXPENSE' && description.value !='' && amount.value !='') {
        personAccount.addExpense();
        displayExpenses();
    } 
    appendBalance();
    amount.value = '';
    description.value = '';
})