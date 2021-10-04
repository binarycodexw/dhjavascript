class BankAccount {
    #amount = 0;
  
    constructor(initialAmount) {
      this.#amount = initialAmount;
    }
  
    deposit(amount) {
      if (amount < 0) {
        throw new ErrorNegativeNumber(); // Use custom Error class
      }
  
      this.#amount += amount;
    }
  
    withdraw(amount) {
      if (amount < 0) {
        throw new ErrorNegativeNumber(); // Use custom Error class
      }
  
      if (this.#amount < amount) {
        throw new ErrorWithdrawAmmount; // Use custom Error class
      }
  
      this.#amount -= amount;
    }
  
    view() {
      console.log(this.#amount);
    }
  }


class ErrorNegativeNumber extends Error{

    constructor(){
        super();

        this.errorName = 'ErrorNegativeNumber';
        this.errorMessage = 'The number cannot be negative';
    }
}

 class ErrorWithdrawAmmount extends Error{

     constructor(){
        super();

        this.errorName = 'ErrorWithdrawAmmount';
        this.errorMessage = 'The amount to withdraw cannot be more than the account balance';
     }
 }



 try {
    const bankAccount = new BankAccount(1000);
    bankAccount.deposit(500);
    bankAccount.deposit(200);
    bankAccount.withdraw(-25000);
    bankAccount.view();
  } catch (err) {
    console.log('Something went wrong during bank account operations');
    console.log(err.errorName);
    console.log(err.errorMessage);
  }