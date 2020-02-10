
const personAccount = {
    firstName: 'Ieva',
    lastName: 'Vyliaudaite',
    incomes: [
        {
            amount: 0,
            description: "", 
            date: new Date()   
        }
    ],
    expences: [
        {
            amount: 0,
            description: "",
            date: new Date()
        }
    ],
    
    accountInfo: function() {
        let report = `\nAccount holder: ${personAccount.firstName.toUpperCase()} ${personAccount.lastName.toUpperCase()}.
                        \nAccount balance: ${personAccount.accountBalance()}
                        \nTotal income: ${personAccount.totalIncome()} 
                        \nTotal expences: ${personAccount.totalExpense()}`

        return report;
    },

    //=================================== INCOME ====================================
    addIncome: function(amount, description) {
        this.incomes.push({amount, description});
    },

    totalIncome: function() {
        // let totalIncome = 0;
        // for (const amount in this.incomes) {
        //     totalIncome = totalIncome + amount;
        // }
        // return totalIncome;
        return this.incomes.reduce((acc, curr) => {acc + curr.amount}, 0)
    },
    
    //=================================== EXPENCES ====================================
    addExpense: function(amount, description) {
        this.expences.push({amount, description});
    },

    totalExpense: function() {
        // let totalExpense = 0;
        // for (const amount in this.expences) {
        //     totalExpense = totalExpense + amount;
        // }
        // return totalExpense;
        return this.expences.reduce((acc, curr) => {acc + curr.amount}, 0)
    },

    //=================================== BALANCE ====================================
    accountBalance: function() {
       return this.totalIncome()-this.totalExpense();
    },
}

console.log(personAccount);

//------------------------------------- user -----------------------------------------

//let type = prompt('Enter type: INCOME or EXPENCE');
//let amount = prompt('Enter amount');
//let description = prompt('Enter 1-word description')

if (type.toLowerCase() === 'income') {
    this.addIncome(Number(amount), description.toLowerCase()); //converting user input from string to number  

} else if (type.toLowerCase() === 'expence') { 
    this.addExpence(Number(amount), description.toLowerCase()); 

} else {
    prompt('Please mind your spelling!');
}


//-----------------------------------------------------------------------------------------------------------

