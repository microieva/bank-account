// USER ACTIONS

buttonAdd.addEventListener('click', () => {
    if (selectType.value === 'INCOME' && description.value !='' && amount.value !='') {
        
        if (!(localStorage.getItem('customer'))) {
            const personAccountStr = JSON.stringify(personAccount, undefined, 4)
            localStorage.setItem('customer', personAccountStr)
        } 
        personAccount.addIncome();
        appendIncomeDescription();
        appendIncomeAmount();
        appendIncomeDate()
    } 
    if (selectType.value === 'EXPENSE' && description.value !='' && amount.value !='') {
        
        if (!(localStorage.getItem('customer'))) {
            const personAccountStr = JSON.stringify(personAccount, undefined, 4)
            localStorage.setItem('customer', personAccountStr)
        } 
        personAccount.addExpense();
        appendExpenseDescription();
        appendExpenseAmount();
        appendExpenseDate();
    } 
    appendBalance();
    amount.value = '';
    description.value = '';
})