let uang = 2775; 
console.log("Total duit awal: " + uang);
console.log("---------------------------");

let pecahan1000 = Math.floor(uang / 1000);
uang = uang % 1000

let pecahan500 = Math.floor(uang / 500);
uang = uang % 500

let pecahan100 = Math.floor(uang / 100);
uang = uang % 100

let pecahan50 = Math.floor(uang / 50);
uang = uang  % 50

let pecahan25 = Math.floor(uang / 25);
uang = uang % 25

console.log(pecahan1000 + " buah pecahan Rp1000");
console.log(pecahan500 + " buah pecahan Rp500");
console.log(pecahan100 + " buah pecahan Rp100");
console.log(pecahan50 + " buah pecahan Rp50");
console.log(pecahan25 + " buah pecahan Rp25");