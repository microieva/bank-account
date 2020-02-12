
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
        let month = '';
        let day = '';
        let year = '';
        const time = date.getHours()+':'+date.getMinutes();
        
        month += (str[4] + str[5] + str[6]);
        day += (str[8] + str[9]);
        year += (str[11] + str[12] + str[13] + str[14]);
        
        return month+' '+day+', '+year+' '+time;
    },

    //=================================== INCOME ====================================
    addIncome: function() {
        const data = JSON.parse(localStorage.getItem('customer'))
        data.incomes.push(
            {
                description: description.value, 
                amount: amount.value, 
                date: this.date()
            }
        )
        const dataStr = JSON.stringify(data)
        localStorage.setItem('customer', dataStr)     
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
        const data = JSON.parse(localStorage.getItem('customer'))
        data.expenses.push(
            {
                description: description.value, 
                amount: amount.value, 
                date: this.date()
            }
        )
        const dataStr = JSON.stringify(data)
        localStorage.setItem('customer', dataStr)
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

    // const data = JSON.parse(localStorage.getItem('customer'))
    // data.incomes.forEach((date) => {
    //     const userDescription = `<div>${date.date}</div>`;
    //     const incomeDescription = document.querySelector('.income-description');
    //     incomeDescription.innerHTML += userDescription;
    // });
}

const appendExpenseDate = () => {
    const expenseDate = document.querySelector('.expense-date');
    expenseDate.innerHTML += `<div>${personAccount.date()}</div>`
}

buttonAdd.addEventListener('click', () => {
    if (selectType.value === 'INCOME' && description.value != '' && amount.value != '') {
        
        if (!(localStorage.getItem('customer'))) {
            const personAccountStr = JSON.stringify(personAccount, undefined, 4)
            localStorage.setItem('customer', personAccountStr)
        } 

        personAccount.addIncome();
        appendIncomeDescription();
        appendIncomeAmount();
        appendIncomeDate()
        // console.log("after adding INCOME accountBalance(): ", personAccount.accountBalance())
        // console.log("after adding INCOME incomes[] = ", personAccount.incomes);
    } 
    if (selectType.value === 'EXPENSE'&& description.value != '' && amount.value != '') {
        
        if (!(localStorage.getItem('customer'))) {
            const personAccountStr = JSON.stringify(personAccount, undefined, 4)
            localStorage.setItem('customer', personAccountStr)
        } 

        personAccount.addExpense();
        appendExpenseDescription();
        appendExpenseAmount();
        appendExpenseDate();
        // console.log("after adding EXPENSE accountBalance(): ", personAccount.accountBalance())
        // console.log("after adding EXPENSE expenses[] = ", personAccount.expenses);
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

console.log("BEGIN localStorage :", localStorage);
