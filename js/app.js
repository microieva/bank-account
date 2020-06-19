const data = JSON.parse(localStorage.getItem('customer'));

const buttonAdd = document.querySelector('.button-add');
const description = document.querySelector('.user-input-description');
const amount = document.querySelector('.user-input-amount');
const selectType = document.querySelector('.select');
const entry = document.querySelector('.entry');
const incomeEntry = document.querySelector('.entry-incomes');
const expenseEntry = document.querySelector('.entry-expenses');

const run = () => {
    displayIncomes();
    displayExpenses();
    appendBalance();
}

const displayIncomes = () => {
    appendIncomeDescription();
    appendIncomeAmount();
    appendIncomeDate();   
}

const displayExpenses = () => {
    appendExpenseDescription();
    appendExpenseAmount();
    appendExpenseDate();
}

// --------------------------------display incomes---------------------------------------
const appendIncomeDescription = () => {
    const incomeDescription = document.querySelector('.income-description');
    incomeDescription.innerHTML = ''

    data.incomes.forEach((description) => {
        const userDescription = `<div>${description.description}</div>`;
        incomeDescription.innerHTML += userDescription;
    });
    
}

const appendIncomeAmount = () => {
    const incomeAmount = document.querySelector('.income-amount');
    incomeAmount.innerHTML = ''

    data.incomes.forEach((amount) => {
        const userAmount = `<div>${amount.amount}</div>`;
        incomeAmount.innerHTML += userAmount;
    });   
}

const appendIncomeDate = () => {
    const incomeDate = document.querySelector('.income-date');
    incomeDate.innerHTML = ''

    data.incomes.forEach((date) => {
        incomeDate.innerHTML += `<div>${date.date}</div>`
    });
}

// -------------------------------display expenses---------------------------------------
const appendExpenseDescription = () => {
    const expenseDescription = document.querySelector('.expense-description');
    expenseDescription.innerHTML = ''

    data.expenses.forEach((description) => {
        const userDescription = `<div>${description.description}</div>`;
        expenseDescription.innerHTML += userDescription;
    });
}

const appendExpenseAmount = () => {
    const expenseAmount = document.querySelector('.expense-amount');
    expenseAmount.innerHTML = ''

    data.expenses.forEach((amount) => {
        const userAmount = `<div>${amount.amount}</div>`;
        expenseAmount.innerHTML += userAmount;
    });
}

const appendExpenseDate = () => {
    const expenseDate = document.querySelector('.expense-date');
    expenseDate.innerHTML = ''
    
    data.expenses.forEach((date) => {
        expenseDate.innerHTML += `<div>${date.date}</div>`
    })
    
}

// -----------------------------------balance-------------------------------------------
const appendBalance = () => {
    const info = document.querySelector('.balance-info');
    info.innerHTML = '';
    const balance = `<div>You have ${personAccount.accountBalance()} € on your account.</div>`
    info.innerHTML += balance;
}

