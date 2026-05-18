let input = prompt(`Masukan juara berapa
    1. Juara 1
    2. Juara 2
    3. Juara 3`)

let Juara = Number(input);

if (Juara == 1) {
    console.log('Selamat anda Juara pertama')
} else if (Juara == 2) {
    console.log('Selamat anda runner up')
} else if (Juara == 3) {
    console.log('Selamat anda Juara tiga')
} else {
    console.log('Coba lagi yahh🤗')
}