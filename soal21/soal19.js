// 1. Mengambil input dari user
let x = parseInt(prompt("Masukkan angka pertama (x):"));
let y = parseInt(prompt("Masukkan angka kedua (y):"));
let z = parseInt(prompt("Masukkan angka ketiga (z):"));

let terbesar, terkecil;

if (x >= y && x >= z) {
    terbesar = x;
} else if (y >= x && y >= z) {
    terbesar = y;
} else {
    terbesar = z;
}

if (x <= y && x <= z) {
    terkecil = x;
} else if (y <= x && y <= z) {
    terkecil = y;
} else {
    terkecil = z;
}

console.log("Angka yang diinput: x=" + x + ", y=" + y + ", z=" + z);
console.log("Nilai Terbesar: " + terbesar);
console.log("Nilai Terkecil: " + terkecil);