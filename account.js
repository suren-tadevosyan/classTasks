try {
  class Account {
    static counter = 1;
    static _names = [];
    static _accounts = {};

    constructor(name) {
      if (Account._names.includes(name)) {
        throw new Error(`\"${name}\" has already been used `);
      }
      this.id = Account.counter++;
      this.name = name;
      Account._names.push(name);
      Account._accounts[this.id] = this;
    }

    #balance = 0;
    get balance() {
      return this.#balance;
    }

    set balance(sum) {
      this.#balance += sum;
    }
    credit(sum) {
      this.#balance += sum;
    }
    debit(sum) {
      this.#balance = this.#balance - sum;
      if (this.#balance < 0) {
        this.#balance = 0;
      }
    }

    transferTo(sum, receiver) {
      if (this.#balance < sum) {
        throw new Error(`You doesn\'t have enough money`);
      } else {
        this.#balance -= sum;
        receiver.#balance += sum;
      }
    }
    static identifyAccounts(id) {
      return Account._accounts[id];
    }
  }

  const Jacob = new Account("Jacob");
  const Ann = new Account("Ann");

  Jacob.credit(500);
  Jacob.transferTo(450, Ann);
  console.log(Jacob.balance);
  console.log(Ann.balance);
  console.log(Account._accounts);
  const findById = Account.identifyAccounts(1);
  console.log(findById);
  //   const user1 = new Account("Jacob");
} catch (e) {
  console.error(e.message);
  return e.message;
}

// console.log(user1);
