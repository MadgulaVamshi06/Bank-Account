function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true;

  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance = amount + this.balance;
      console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
      console.log("Invalid amount for deposit.");
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance = this.balance - amount ;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
      console.log("Insufficient funds or invalid amount for withdrawal");
    }
  };
  
  this.checkBalance = function () {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}.`);
  };

  this.isActive = function () {
    if(this.active){
      return this.active;
    }
      else{
        console.log("account is not activated")
      }
  };
}

function getTotalBalance(accounts) {
  let totalBalance = 0;
  accounts.forEach((ele) => {
    if (ele.isActive()) {
      totalBalance += ele.balance;
    }
  });
  return totalBalance;
}

const account1 = new BankAccount(35301175792, "Vamshi", "Savings", 1000);
console.log(account1);
const account2 = new BankAccount(35301175755, "koushik", "Current", 2000);
console.log(account2);


account1.deposit(500);
account1.checkBalance();
account1.withdraw(200);
account1.checkBalance();


account2.deposit(1000);
account2.checkBalance();
account2.withdraw(500);
account2.checkBalance();

const accounts = [account1, account2];
console.log("Total balance of all active accounts:", getTotalBalance(accounts));

