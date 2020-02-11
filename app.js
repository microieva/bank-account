
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
    expences: [
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
        let str =  date.toDateString();
        let month = '';
        let day = '';
        let year = '';
        //let time 
        
        month += (str[4] + str[5] + str[6]);
        day += (str[8] + str[9]);
        year += (str[11] + str[12] + str[13] + str[14]);
        //time += (str[15] + str[16] + str[17] + str[18]);
        
        return month+' '+day+', '+year;
    },

    //=================================== INCOME ====================================
    addIncome: function() {
        let userDescr = description.value;
        let userAmnt = Number(amount.value);
        const date = this.date();
        this.incomes.push({userDescr, userAmnt, date});
        //console.log("addIncome testing")
    },

    totalIncome: function() {
        const total = this.incomes.reduce((acc, curr) => 
        { 
            return (acc + Number(curr.amount))
        },0)
        //console.log("total income: ", total)
        return total;   
    },
    
    //=================================== EXPENCES ====================================
    addExpence: function() {
        let userDescr = description.value;
        let userAmnt = Number(amount.value);
        const date = this.date();
        this.expences.push({userDescr, userAmnt, date});
    },

    totalExpence: function() {
        const total = this.expences.reduce((acc, curr) => 
        { 
            return (acc + Number(curr.amount))
        },0)
        console.log("total expence: ", total)
        return total;
    },

    //=================================== BALANCE ====================================
    accountBalance: function() {
       return this.totalIncome()-this.totalExpence();
    },
}

const buttonAdd = document.querySelector('.button-add');
let description = document.querySelector('.user-input-description');
let amount = document.querySelector('.user-input-amount');
const selectType = document.querySelector('.select');
const incomeEntry = document.querySelector('.entry-incomes');
const expenceEntry = document.querySelector('.entry-expences');
const info = document.querySelector('.balance-info');

const appendBalance = () => {
    const balance = `<div>You have ${personAccount.accountBalance()} £ on your account.</div>`
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

const appendExpenceDescription = () => {
    const userDescription = `<div>${description.value}</div>`;
    const expenceDescription = document.querySelector('.expence-description');
    expenceDescription.innerHTML += userDescription;
}

const appendExpenceAmount = () => {
    const userAmount = `<div>${amount.value}</div>`
    const expenceAmount = document.querySelector('.expence-amount');
    expenceAmount.innerHTML += userAmount;
}

const appendIncomeDate = () => {
    const incomeDate = document.querySelector('.income-date');
    incomeDate.innerHTML += `<div>${personAccount.date()}</div>`
}

const appendExpenceDate = () => {
    const expenceDate = document.querySelector('.expence-date');
    expenceDate.innerHTML += `<div>${personAccount.date()}</div>`
}

buttonAdd.addEventListener('click', () => {
    if (selectType.value === 'INCOME' && description.value != '' && amount.value != '') {
        personAccount.addIncome();
        appendIncomeDescription();
        appendIncomeAmount();
        appendIncomeDate()
        console.log("CHECKING CONDITION")
    } 
    if (selectType.value === 'EXPENCE'&& description.value != '' && amount.value != '') {
        personAccount.addExpence();
        appendExpenceDescription();
        appendExpenceAmount();
        appendExpenceDate();

    }
    appendBalance();
    amount.value = '';
    description.value = '';
})
console.log("calling personAccount.accountBalance(): ", personAccount.accountBalance())
console.log("type of accountBalance(): ", typeof personAccount.accountBalance())
console.log("type of totalIncome(): ", typeof personAccount.totalIncome())
console.log("type of totalExpence(): ",typeof personAccount.totalExpence())
