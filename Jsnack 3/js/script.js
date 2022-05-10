// do una lista di parole da mettere in ordine
const list1 = ['parola1 arr1', 'parola2 arr1', 'parola3 arr1', 'parola4 arr1', 'parola5 arr1'];

const list2 = ['parola1 arr2', 'parola2 arr2'];


for (let i = 0; i < 5; i++) {

    const listNum = document.createElement('li');
    
    listNum.append(list1[i]);
}