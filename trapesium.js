const prompt = require('prompt-sync')({sigint: true });
let sisi1 = Number(prompt('masukan sisi a : '))
let sisi2 = Number(prompt('masukan sisi b : '))
let sisi3 = Number(prompt('masukan sisi c : '))
let sisi4 = Number(prompt('masukan sisi d : '))
let tinggi = Number(prompt('masukan tinggi : '))
let alas = 0.5 * (sisi1 + sisi2) * tinggi
let keliling = sisi1 + sisi2 + sisi3 + sisi4

console.log('===============')
console.log('   H A S I L   ')
console.log('---------------')

console.log(
    `luas trapesium\t ${luas.toFixed(2)} cm
    keliling trapesium\t ${keliling.toFixed(2)} cm`)
