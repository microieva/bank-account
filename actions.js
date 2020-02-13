// USER ACTIONS

buttonAdd.addEventListener('click', () => {
    if (selectType.value === 'INCOME' && description.value !='' && amount.value !='') {
        
        if (!(localStorage.getItem('customer'))) {
            const personAccountStr = JSON.stringify(personAccount, undefined, 4)
            localStorage.setItem('customer', personAccountStr)
        } 
        personAccount.addIncome();
        displayIncomes();
    } 
    if (selectType.value === 'EXPENSE' && description.value !='' && amount.value !='') {
        
        if (!(localStorage.getItem('customer'))) {
            const personAccountStr = JSON.stringify(personAccount, undefined, 4)
            localStorage.setItem('customer', personAccountStr)
        } 
        personAccount.addExpense();
        displayExpenses();
    } 
    appendBalance();
    amount.value = '';
    description.value = '';
})