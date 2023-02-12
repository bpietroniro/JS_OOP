function makeAccount(number) {
  let balance = 0;
  let transactions = [];

  return {
    deposit(amount) {
      balance += amount;
      transactions.push({ type: 'deposit', amount });
      return amount;
    },

    withdraw(amount) {
      balance -= amount;
      if (balance < 0) {
        amount += balance;
        balance = 0;
      }

      transactions.push({ type: 'withdrawal', amount });
      return amount;
    },

    number() {
      return number;
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },
  };
}

function makeBank() {
  let nextAccountNumber = 101;
  let accounts = [];

  return {
    openAccount() {
      let newAccount = makeAccount(nextAccountNumber++);

      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
console.log(account.deposit(17));

let secondAccount = bank.openAccount();
console.log(secondAccount.number());
console.log(account.transactions());
