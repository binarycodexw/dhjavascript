function getKeys(obj) {
  const serieChiavi = [];

  for(chiave in obj) {
    serieChiavi.push( `${chiave}`);
  }
  return serieChiavi;
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);