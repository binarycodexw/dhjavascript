class Person {
    constructor(_firstName, _lastName, _age) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
    }
  
    get Nome() {
      return this.firstName;
    }
  
    set Nome(value) {
      this.firstName = value;
    }
  
    get Cognome() {
      return this.lastName;
    }
  
    set Cognome(value) {
      this.lastName = value;
    }
  
    get Eta() {
      return this.age;
    }
  
    set Eta(value) {
      this.age = value;
    }
  
    getfullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.getfullName());
  
  person.firstName = 'Maria';
  person.lastName = 'Verdi';
  console.log(person.getfullName());