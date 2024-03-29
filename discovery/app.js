const Utils = {

    // Formatar valores
    formatAmount(value){
        value = Number(value.replace(/\,\./g, "")) * 100
        
        return value
    },

    //Formatar data
    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },

    //Formatar estilo de moeda
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

       return signal + value
    }
}

const Storage = {
    get() {
        return JSON.parse(localStorage.getItem("@lets-save:transactions")) || []
    },

    set(transactions) {
        localStorage.setItem("@lets-save:transactions", JSON.stringify(transactions))
    }
}

const Transaction = {
    all: Storage.get(),

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)

        App.reload()
    },

    incomes() {
        let income = 0;
        Transaction.all.forEach(transaction => {
            if( transaction.type === 'Receita'  ) {
                income += transaction.amount;
            }
        })
        return income;
    },

    expenses() {
        let expense = 0;
        Transaction.all.forEach(transaction => {
            if( transaction.type === 'Despesa' ) {
                expense += transaction.amount;
            }
        })
        return expense;
    },

    total() {
        return Transaction.incomes() - Transaction.expenses();
    }
}

const Summary = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = Summary.innerHTMLTransaction(transaction, index)
        tr.dataset.index = index

        Summary.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction, index) {
        const CSSTransaction = transaction.type === 'Receita' ? 'income' : 'expense'        

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description ${CSSTransaction}">${transaction.description}</td>
        <td class="${CSSTransaction}">${amount}</td>
        <td class="type ${CSSTransaction}">${transaction.type}</td>
        <td class="date ${CSSTransaction}">${transaction.date}</td>
        <td>
            <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
        </td>
        `

        return html
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.incomes())
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())
    },

    styleBalanceTotal() {
        const CSSBalance = Transaction.total() > 0 ? 'positive' : 'negative';

        document
          .querySelector('#totalDisplay')
          .classList
          .add(`${CSSBalance}`)
    },

    clearTransactions() {
        Summary.transactionsContainer.innerHTML = ""
    }
}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    type: document.querySelector('select#type'),
    date: document.querySelector('input#date'),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            type: Form.type.value,
            date: Form.date.value
        }
    },

    validateFields() {
        const { description, amount, type, date } = Form.getValues()
        
        if( description.trim() === "" || 
            amount.trim() === "" || 
            type.trim() === "" || 
            date.trim() === "" ) {
                throw new Error("Por favor, preencha todos os campos")
        }
    },

    formatValues() {
        let { description, amount, type, date } = Form.getValues()
        
        amount = Utils.formatAmount(amount)

        date = Utils.formatDate(date)

        return {
            description,
            amount,
            type,
            date
        }
    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.type.value = ""
        Form.date.value = ""
    },

    submit(event) {
        event.preventDefault()

        try {
            Form.validateFields()
            const transaction = Form.formatValues()
            Transaction.add(transaction)
            Form.clearFields()
            Modal
        } catch (error) {
            alert(error.message)
        }
    }
}

const App = {
    init() {
        Transaction.all.forEach(Summary.addTransaction)
        
        Summary.updateBalance()

        Summary.styleBalanceTotal()

        Storage.set(Transaction.all)
    },
    reload() {
        Summary.clearTransactions()
        App.init()
    },
}

App.init()
