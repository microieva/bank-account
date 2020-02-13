const personAccount = {
    firstName: 'Ieva',
    lastName: 'Vyliaudaite',
    incomes: [
        {
            description: "", 
            amount: 0,
            date: "date"   
        }
    ],
    expenses: [
        {
            description: "", 
            amount: 0,
            date: "date"
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

    //=================================== INCOMES ====================================
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
        const data = JSON.parse(localStorage.getItem('customer'))
        const total = data.incomes.reduce((acc, curr) => {
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
        const data = JSON.parse(localStorage.getItem('customer'))
        const total = data.expenses.reduce((acc, curr) => {
            return acc + Number(curr.amount)
        }, 0)
        return total
    },

    //=================================== BALANCE ====================================
    accountBalance: function() {
       return this.totalIncome()-this.totalExpense();
    },
}