function Person(firstName, lastName) {
    this.nome = firstName;
    this.cognome = lastName;
    
    this.fullName = function () {

   return  `${this.nome} ${this.cognome}`;
    }
  }
  
  const john = new Person('John', 'Doe');
  const simon = new Person('Simon', 'Collins');
  
  console.log(john.fullName()); 
  console.log(simon.fullName()); 