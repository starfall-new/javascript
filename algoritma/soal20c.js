let a = Number(prompt("masukan angka pertama"));
let b = Number(prompt("masukan angka kedua"));
let c = Number(prompt("masukan angka ketiga"));

let terkecil,terbesar;

if (a <= b && a <= c) {
    terkecil = a;
} else if (b <= a && b <= c) {
    terkecil = b;
} else {
    terkecil = c;
}

console.log("Urutan dari kecil ke besar: " + terkecil + ", " + terbesar);