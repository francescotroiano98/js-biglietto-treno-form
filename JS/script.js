const kilometri = parseInt(document.getElementById("mykm").value);

console.log(kilometri);

const myage =  parseInt(document.getElementById("myage").value);

console.log(myage);

let ticketprice = 0.233 * kilometri;

const button = document.querySelector("button.mybutton")

button.addEventListener("click", function(){

    if (isNaN(kilometri) && isNaN(myage)) {
        document.getElementById("error").innerHTML = "Hai inserito un valore non valido per i kilometri e per l'età!";
    
        alert("Hai inserito un valore non valido per i kilometri e per l'età!");
    
      } else if (isNaN(kilometri)) {
        document.getElementById("error").innerHTML = "Hai inserito un valore non valido per i kilometri!";
    
        alert("Hai inserito un valore non valido per i kilometri!");
    
      } else if (isNaN(myage)) {
        document.getElementById("error").innerHTML = "Hai inserito un valore non valido per l'età!";
    
        alert("Hai inserito un valore non valido per l'età!");
        
      } else {
      
        if (myage < 18) {
            ticketprice = ticketprice - ((ticketprice * 19.4) / 100);
        } else if (myage > 65) {
            ticketprice = ticketprice - ((ticketprice * 37.7) / 100);
        }
    
    }
    document.getElementById("answer").innerHTML += "IL PREZZO E': " + ticketprice.toFixed(2) + " €" ;

    console.log(ticketprice.toFixed(2));
})


