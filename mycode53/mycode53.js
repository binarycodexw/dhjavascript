function sum(a,b,...c) {
    let risultato = a+b;

    c.forEach(function(n){
        risultato += n;
    });

    return risultato;
}

console.log(sum(1, 2, 3, 4, 5));