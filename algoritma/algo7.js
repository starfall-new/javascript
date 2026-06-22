let meter = Number(prompt("Masukkan panjang benda di meter"));

let yard = meter / 0.9144;

let kaki = meter / 0.3048;

let inchi = meter / 0.0254;

// Menampilkan hasil konversi
console.log("jadi panjang benda kamu" + meter + " meter setara dengan:");
console.log(yard.toFixed(2) + " yard");
console.log(kaki.toFixed(2) + " kaki");
console.log(inchi.toFixed(2) + " inchi");