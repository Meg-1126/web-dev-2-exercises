// let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    // this.balance = balance;
    this.track = [];
  }
  get balance () {
    return this.track.reduce((currentBalance, index)=>{
      return currentBalance + index;
    }, 0)
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    this.account.track.push(this.value);
  }
}

class Withdrawal extends Transaction {
  
  // commit() {
  //   this.account.balance -= this.amount;
  // }
  get value () {
    return -this.amount;
  }
}
// Step 1: Deposit class
class Deposit extends Transaction {
  // commit() {
  //   this.account.balance += this.amount;
  // }
  get value () {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-patrol');
console.log(myAccount.balance);

const t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);
console.log(myAccount.balance);

const t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);


const t3 = new Deposit(120.0, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log(myAccount);