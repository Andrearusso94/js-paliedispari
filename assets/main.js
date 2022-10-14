//Pari e Dispari

//. Sommiamo i due numeri 
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
//Dichiariamo chi ha vinto.

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

}