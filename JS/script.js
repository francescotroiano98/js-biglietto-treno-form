const kilometri = document.getElementById("mykm").value;

console.log(kilometri);

const myage = document.getElementById("myage").value;

console.log(myage);

let ticketprice = 0.233 * kilometri;

const button = document.querySelector("button.mybutton")

button.addEventListener("click", function(){
    document.getElementById("answer").innerHTML += "IL PREZZO E': " + ticketprice.toFixed(2) + " €" ;

    console.log(ticketprice.toFixed(2));
})

if (myage < 18){

    ticketprice = ticketprice - ((ticketprice * 19.4) / 100);

} else if (myage > 65){

    ticketprice = ticketprice - ((ticketprice * 37.7) / 100);
    
}
