//Pari e Dispari


/*


//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 

const myNumber = Number(prompt('scegli un numero da 1 a 5'));
console.log(myNumber, 'questo è il mio numero')
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)

function generateRandomNumber(min, max){
    return Math.floor(Math.random() * 5) + 1;
}


for (let i = 0; i < 1; i++){
    const randomNumber = generateRandomNumber(1)
    console.log(randomNumber, 'questo è il numero del computer')
    
    // Sommiamo i due numeri 
     const sum = myNumber + randomNumber
     console.log(sum, 'questa è la somma')

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 

function sumNumbers(){
  if (sum % 2 == 0){
    return true
  } else{
    return false
  }
}
sumNumbers(sum);

//Dichiariamo chi ha vinto
if (sumNumbers(sum) == true){
    console.log('somma pari')

} else{
    console.log('somma dispari')
}
}*/


//Chiedere all’utente di inserire una parola 

const myWord = prompt('scrivi una parola')

// creo variabili per singole lettere/altra parola/calcolo lunghezza parola
let singleLetters;
let anotherWord = ''
let i = myWord.length -1

//Creare una funzione per capire se la parola inserita è palindroma

function wordPalindroma(){

//uso ciclo while per stampare e separare le singole lettere
    while (i >= 0) {
    singleLetters = myWord[i];
    anotherWord += singleLetters;
    
    i--;
 


}
if(myWord === anotherWord){
    console.log('parola palindroma');
  } else {
    console.log('parola normale');
  }

}
 wordPalindroma()