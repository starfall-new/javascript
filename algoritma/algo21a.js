let input = prompt("Masukkan satu karakter");

if (input >= '0' && input <= '9' && input.length == 1) {
    let hasil = parseInt(input);
    console.log("Hasil konversi: " + hasil);
} else {
    let hasil = -99;
    console.log("Bukan digit! Hasil konversi: " + hasil);
}