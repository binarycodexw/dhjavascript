const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    job: 'Web Developer',
    fullName: function() {
      return `Name and Surname: ${this.firstName} ${this.lastName}`;
    },
    info: function() {
      return `${this.fullName()}, Job: ${this.age} ${this.job}`;
    }
  }
  
  console.log(person.fullName()); 
  console.log(person.info()); 