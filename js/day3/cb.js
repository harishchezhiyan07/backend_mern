const createBankAccount = () => {
    let balance = 5000; // Private variable

    const checkBalance = () => {
        console.log("Account Balance:", balance);
    }

    return checkBalance;
}

// Outside balance
let balance = 100000;

console.log("Outside Balance:", balance);

let account = createBankAccount();

account();
const createAccount = () => {
    let balance = 1000; // Private variable

    const deposit = (amount) => {
        balance = balance + amount;
    }

    const getBalance = () => {
        console.log(balance);
    }

    return {
        deposit: deposit,
        getBalance: getBalance
    };
}

let account = createAccount();

account.deposit(500);
account.deposit(200);

account.getBalance();