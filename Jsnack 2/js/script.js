// qui andranno visualizzati i numeri generati randomicamente
const myRandom = [];

// attraverso il click del pulsante genero i numeri in maniera randomica
const myButton = document.querySelector('.btn');

const myGreen = document.getElementById('green_num');

const myRed = document.getElementById('red_num');

myButton.addEventListener ('click',

    function() {

        for (let i = 0; i < 20; i++) {

            myRandom.push(Math.floor(Math.random() * 1000) + 1);

            const listNumber = document.createElement('li');

            listNumber.append(myRandom[i]);

            if (myRandom[i] % 2 === 0) {
                myGreen.append(listNumber);
            } else {
                myRed.append(listNumber);
            }
        }
    }

);