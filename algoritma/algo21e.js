let tinggi = Number(prompt("Masukkan tinggi badan"));
let beratb = Number(prompt("Masukkan berat badan"));

let beratIdeal = tinggi - 100;
let selisih = Math.abs(beratb - beratIdeal);

if (selisih <= 2) {
    console.log("berat badan Anda ideal");
} else {
    console.log("berat badan anda tidak ideal");
}