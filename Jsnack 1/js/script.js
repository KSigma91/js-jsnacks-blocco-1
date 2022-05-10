// qui andranno visualizzati i numeri generati randomicamente
const myRandom = [];

// faccio generare i numeri randomici attraverso il click del pulsante "genera"
const myButton = document.getElementById('btn');

myButton.addEventListener ('click',

    function () {

        for (let i = 0; i < 10; i++) {
            myRandom.push(Math.floor(Math.random() * 1000) + 1);
        }

        console.log(myRandom);

        const result = document.getElementById('number').innerHTML = "numeri generati: " + myRandom;

        console.log(result);
    }
  
);