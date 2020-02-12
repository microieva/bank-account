
const personAccount = {
    firstName: 'Ieva',
    lastName: 'Vyliaudaite',
    incomes: [
        {
            description: "", 
            amount: 0,
            date: ""   
        }
    ],
    expenses: [
        {
            description: "", 
            amount: 0,
            date: ""
        }
    ],

    date: function() {
        //turn date to seperate strings > into array
        //loop thru array
        // take out whats needed
        const date = new Date();
        const str =  date.toDateString();
        const month = '';
        const day = '';
        const year = '';
        const time = date.getHours()+':'+date.getMinutes();
        
        month += (str[4] + str[5] + str[6]);
        day += (str[8] + str[9]);
        year += (str[11] + str[12] + str[13] + str[14]);
        
        return month+' '+day+', '+year+' '+time;
    },

    //=================================== INCOME ====================================
    addIncome: function() {
        this.incomes.push(
            {
                description: description.value, 
                amount: amount.value, 
                date: this.date()
            }
        );
    },

    totalIncome: function() {
        // let total = this.incomes.reduce((acc, curr) => {acc + Number(curr.amount)}, 0)
        // return total;
        const total = this.incomes.reduce((acc, curr) => {
            return acc + Number(curr.amount)
        }, 0)
        return total
    },
    
    //=================================== EXPENSES ====================================
    addExpense: function() {
        this.expenses.push(
            {
                description: description.value, 
                amount: amount.value, 
                date: this.date()
            }
        );
    },

    totalExpense: function() {
        // let total =  this.expenses.reduce((acc, curr) => {acc + Number(curr.amount)}, 0) 
        // return total;
        //return this.expenses.reduce((acc, curr) => acc + Number(curr.amount))
        const total = this.expenses.reduce((acc, curr) => {
            return acc + Number(curr.amount)
        }, 0)
        return total
    },

    //=================================== BALANCE ====================================
    accountBalance: function() {
       return this.totalIncome()-this.totalExpense();
    },
}

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

const appendIncomeDescription = () => {
    const userDescription = `<div>${description.value}</div>`;
    const incomeDescription = document.querySelector('.income-description');
    incomeDescription.innerHTML += userDescription;
}

const appendIncomeAmount = () => {
    const userAmount = `<div>${amount.value}</div>`
    const incomeAmount = document.querySelector('.income-amount');
    incomeAmount.innerHTML += userAmount;
}

const appendExpenseDescription = () => {
    const userDescription = `<div>${description.value}</div>`;
    const expenseDescription = document.querySelector('.expense-description');
    expenseDescription.innerHTML += userDescription;
}

const appendExpenseAmount = () => {
    const userAmount = `<div>${amount.value}</div>`
    const expenseAmount = document.querySelector('.expense-amount');
    expenseAmount.innerHTML += userAmount;
}

const appendIncomeDate = () => {
    const incomeDate = document.querySelector('.income-date');
    incomeDate.innerHTML += `<div>${personAccount.date()}</div>`
}

const appendExpenseDate = () => {
    const expenseDate = document.querySelector('.expense-date');
    expenseDate.innerHTML += `<div>${personAccount.date()}</div>`
}

buttonAdd.addEventListener('click', () => {
    if (selectType.value === 'INCOME' && description.value != '' && amount.value != '') {
        personAccount.addIncome();
        appendIncomeDescription();
        appendIncomeAmount();
        appendIncomeDate()
        console.log("after adding INCOME accountBalance(): ", personAccount.accountBalance())
        console.log("after adding INCOME incomes[] = ", personAccount.incomes);
    } 
    if (selectType.value === 'EXPENSE'&& description.value != '' && amount.value != '') {
        personAccount.addExpense();
        appendExpenseDescription();
        appendExpenseAmount();
        appendExpenseDate();
        console.log("after adding EXPENSE accountBalance(): ", personAccount.accountBalance())
        console.log("after adding EXPENSE expenses[] = ", personAccount.expenses);
    } 
    appendBalance();
    amount.value = '';
    description.value = '';
})
// console.log("BEGIN accountBalance()", personAccount.accountBalance())
// console.log("BEGIN incomes[] = ", personAccount.incomes);
// console.log("type of accountBalance(): ", typeof personAccount.accountBalance())
// console.log("type of totalIncome(): ", typeof personAccount.totalIncome())
// console.log("type of totalExpense(): ",typeof personAccount.totalExpense())
