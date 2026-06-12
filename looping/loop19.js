let nilai = [80, 90, 75, 85, 95];
let jumlah = 0;

for (let i = 0; i < nilai.length; i++) {
    jumlah += nilai[i];
}

let rata = jumlah / nilai.length;

console.log("Jumlah Nilai    : " + jumlah);
console.log("Rata-rata Nilai : " + rata);