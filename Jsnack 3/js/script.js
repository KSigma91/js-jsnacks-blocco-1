// do una lista di parole da mettere in ordine
const primoArray = ["parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1"];
const secondoArray = ["parola1-2", "parola2-2"];

// seleziono la prima lista array
const primoUl = document.getElementById("mio_id");

// nella prima lista array andrò a creare un "li" a cui associare il contenuto, dopodichè lo aggiungerò a "ul" 
for (let i = 0; i < primoArray.length; i++){
    let primoContenuto = primoArray[i];
    let primoLi = document.createElement("li");
    primoLi.append(primoContenuto);
    primoUl.append(primoLi);

    // creo la seconda lista array creando un "ul"
    const secondoUl = document.createElement("ul");

    // nella seconda lista array farò la stessa procedura e aggiungerò "ul" dentro "li" del primo array
    for (let j = 0; j < secondoArray.length; j++){
        let secondoContenuto = secondoArray[j];
        let secondoLi = document.createElement("li");
        secondoLi.append(secondoContenuto);
        secondoUl.append(secondoLi);
        primoLi.append(secondoUl);
    }
}
