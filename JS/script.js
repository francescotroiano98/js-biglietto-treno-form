

const button = document.querySelector("button.mybutton");

const buttonreset = document.querySelector("button.reset");

buttonreset.addEventListener("click", function(){
document.getElementById("answer").innerHTML = "Rinserisci i valori";
})

button.addEventListener("click", function(){
    const kilometri = parseInt(document.getElementById("mykm").value);
    const myage = parseInt(document.getElementById("myage").value);

    if (isNaN(kilometri) && isNaN(myage)) {
        document.getElementById("error").innerHTML = "Hai inserito un valore non valido per i kilometri e per l'età!";
    
        alert("Hai inserito un valore non valido per i kilometri e per l'età!");
    
      } else if (kilometri <= 0) {
        document.getElementById("error").innerHTML = "Il numero di kilometri deve essere superiore a zero!";
        alert("Il numero di kilometri deve essere superiore a zero!");
        
      } else if (isNaN(kilometri)) {
        document.getElementById("error").innerHTML = "Hai inserito un valore non valido per i kilometri!";
    
        alert("Hai inserito un valore non valido per i kilometri!");
    
      } else if (myage < 0 || myage > 120) {
        document.getElementById("error").innerHTML = "L'età deve essere compresa tra 0 e 120!";
        alert("L'età deve essere compresa tra 0 e 120!");
        
      } else {
       let ticketprice = 0.233 * kilometri;
      
        if (myage < 18) {
            ticketprice = ticketprice - ((ticketprice * 19.4) / 100);
        } else if (myage > 65) {
            ticketprice = ticketprice - ((ticketprice * 37.7) / 100);
        }
    
    document.getElementById("answer").innerHTML = "IL PREZZO E': " + ticketprice.toFixed(2) + " €" ;
    
  }
})




