let sisia = Number(prompt("Soal 4 - Masukkan panjang sisi a (terkecil):"));
let sisib = Number(prompt("Soal 4 - Masukkan panjang sisi b (tengah):"));
let sisic = Number(prompt("Soal 4 - Masukkan panjang sisi c (terbesar):"));

let kuadratab = (sisia * sisia) + (sisib * sisib);
let kuadratc = sisic * sisic;

if (kuadratab == kuadratc) {
    console.log("segitiga siku-siku")
} else if (kuadratab > kuadratc) {
    console.log("segitiga lancip")
} else {
    console.log("segitiga tumpul")
}