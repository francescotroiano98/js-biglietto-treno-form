const kilometri = document.getElementById("mykm").value;
console.log(kilometri);
const myage = document.getElementById("myage").value;
console.log(myage);
const button = document.querySelector("button.mybutton")
button.addEventListener("click", function(){
    console.log(ticketprice);
})
let ticketprice = 0.233 * kilometri;


if (myage < 18){
    ticketprice = ticketprice - ((ticketprice * 19.4) / 100);
} else if (myage > 65){
    ticketprice = ticketprice - ((ticketprice * 37.7) / 100);
}
