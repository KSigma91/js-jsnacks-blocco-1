// do una lista di parole da mettere in ordine
const list1 = ["parola1-1", "parola2-1", "parola3-1", "parola4-1", "parola5-1"];

const list2 = ["parola1-2", "parola2-2"];

// seleziono la prima lista
const myAppend = document.querySelector(".my_list");

// prima lista
for (let i = 0; i < list1.leght; i++) {

    let myCont = list1[i];

    let myLi = document.createElement("li");

    myLi.append(myCont);

    myAppend.append(myLi);

    // seleziono la seconda lista
    let myAppend2 = document.createElement("ul");

    // seconda lista
    for (let j = 0; j < list2.length; j++) {

        let myCont2 = list2[j];

        let myLi2 = document.createElement("li");

        myLi2.append(myCont2);

        myAppend2.append(myLi2);

        myLi.append(myAppend2);
    }
}