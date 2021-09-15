const person = {
  get firstName (){
    return this._firstName;
  },
  set firstName(valore) {
    this._firstName = valore;
  },

  get lastName () {
    return this._lastName;
  },
  set lastName (valore) {
    this._lastName = valore;
  },
  fullName() {
    return  `${this.firstName} ${this.lastName}`;
  }

}

const john = Object.create(person);
john.firstName = 'John';
john.lastName = 'Doe';

const simon = Object.create(person);
simon.firstName = 'Simon';
simon.lastName = 'Collins';

console.log(john.fullName()); 
console.log(simon.fullName()); 