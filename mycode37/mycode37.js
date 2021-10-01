class BankAccount {

balance = 0;

constructor(balance) {
    this.balance = balance;
}
    
    

deposit(money) {
    this.balance = this.balance + money;
}

withdraw(money) {
    this.balance = this.balance - money;
}

view() {
    console.log(this.balance);
}

}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();