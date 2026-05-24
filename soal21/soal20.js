let input = prompt("Masukkan satu huruf:");
let huruf = input.toUpperCase();

if (!huruf.match(/[A-Z]/) || huruf.length !== 1) {
    console.log("Bukan berupa huruf");
} else if ("AIUEO".includes(huruf)) {
    console.log("Huruf Vokal");
} else {
    console.log("Huruf Konsonan");
}