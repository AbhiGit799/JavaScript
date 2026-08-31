/* 
In JavaScript, a class is like a blueprint for creating objects, 
and the this keyword inside a class always refers to the current 
object created from that blueprint. Beginners often get confused 
because this changes depending on context, but inside class methods 
it reliably points to the instance.


⚡ Key Points About this
Inside constructor → this refers to the new object being created.

Inside methods → this refers to the object calling the method.

Arrow functions → they don’t have their own this; they inherit it from the surrounding scope.

Global context → this can point to window (browser) or be undefined in strict mode.

*/

class BankAccount{
    constructor(owner,balance)
    {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount)
    {
        this.balance+=amount;
        console.log(`${this.owner} deposited ${amount}. New balance: ${this.balance}`);
        
    }

    withdraw(amount)
    {
        if(amount>this.balance)
        {
            console.log(`${this.owner} has insufficient funds`);
            
        }
        else
        {
            this.balance = this.balance-amount;
            console.log(`${this.owner} withdraw ${amount}. Remaining balance ${this.balance}`);
            
        }
    }



}

const account1 = new BankAccount("Arjun",10000);

account1.deposit(500);
account1.withdraw(20000); // Arjun has insufficient funds!

// 👉 Notice how this.owner and this.balance always refer to the specific account object (account1 here). If you create another account, this will point to that one.



