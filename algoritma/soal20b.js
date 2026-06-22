let belanja = Number(prompt("Masuka total belanja"));
let diskon = 0;

if (belanja > 100000) {
    diskon = belanja * (10 / 100); 
}

let totalBayar = belanja - diskon;

console.log("harga awal " + belanja);
console.log("total diskon " + diskon);
console.log("Total belanja setelah diskon" + totalBayar);