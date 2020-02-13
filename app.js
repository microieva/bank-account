
const buttonAdd = document.querySelector('.button-add');
const description = document.querySelector('.user-input-description');
const amount = document.querySelector('.user-input-amount');
const selectType = document.querySelector('.select');
const incomeEntry = document.querySelector('.entry-incomes');
const expenseEntry = document.querySelector('.entry-expenses');
const info = document.querySelector('.balance-info');

const appendBalance = () => {
    info.innerHTML = '';
    const balance = `<div>You have ${personAccount.accountBalance()} € on your account.</div>`
    info.innerHTML += balance;
}
//ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

const appendIncomeDescription = () => {
    const data = JSON.parse(localStorage.getItem('customer'))
    //getting rid of the first empty dummy entry, in initial state object blueprint
    const splicedDataIncomes = data.incomes.splice(1, data.incomes.length)
    // NEED TO CHECK IF ALREADY PRINTED,
    // COMPARE TIME - PRINT ONLY LAST ONE???? LATEST ONE????
    splicedDataIncomes.forEach((description) => {
        const userDescription = `<div>${description.description}</div>`;
        const incomeDescription = document.querySelector('.income-description');
        incomeDescription.innerHTML += userDescription;
    });
    
}

const appendIncomeAmount = () => {
    const data = JSON.parse(localStorage.getItem('customer'))
    const splicedDataIncomes = data.incomes.splice(1, data.incomes.length)

    splicedDataIncomes.forEach((amount) => {
        const userAmount = `<div>${amount.amount}</div>`;
        const incomeAmount = document.querySelector('.income-amount');
        incomeAmount.innerHTML += userAmount;
    });   
}

const appendExpenseDescription = () => {
    const data = JSON.parse(localStorage.getItem('customer'))
    const splicedDataExpenses = data.expenses.splice(1, data.incomes.length)

    splicedDataExpenses.forEach((description) => {
        const userDescription = `<div>${description.description}</div>`;
        const expenseDescription = document.querySelector('.expense-description');
        expenseDescription.innerHTML += userDescription;
    });
}

const appendExpenseAmount = () => {
    const data = JSON.parse(localStorage.getItem('customer'))
    const splicedDataExpenses = data.expenses.splice(1, data.incomes.length)

    splicedDataExpenses.forEach((amount) => {
        const userAmount = `<div>${amount.amount}</div>`;
        const expenseAmount = document.querySelector('.expense-amount');
        expenseAmount.innerHTML += userAmount;
    });
}

const appendIncomeDate = () => {
    const incomeDate = document.querySelector('.income-date');
    incomeDate.innerHTML += `<div>${personAccount.date()}</div>`
}

const appendExpenseDate = () => {
    const expenseDate = document.querySelector('.expense-date');
    expenseDate.innerHTML += `<div>${personAccount.date()}</div>`
}



console.log("BEGIN localStorage :", localStorage);
