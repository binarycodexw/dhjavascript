function calculate() {
  let risultato = 0;

  let algoritmo = {
      add: function (numero){

        risultato = risultato + numero;
        return this;
      },
      multiply: function (numero){

        risultato = risultato * numero;
        return this;
      },
      sub: function (numero){

        risultato = risultato - numero;
        return this;
      },
      divide: function (numero){

        risultato = risultato / numero;
        return this;
      },
      printResult: function(){
        console.log(risultato);
      },
     }; 
    
     return algoritmo;
     
    
  }
  
  const calculator = calculate();
  calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult();

  