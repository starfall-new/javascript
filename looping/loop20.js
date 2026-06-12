let nomer = 8;

let header = "*\t";
for (let i = 1; i <= nomer; i++) {
    header += i + "\t";
}
console.log(header);

for (let i = 1; i <= nomer; i++) {
    let baris = i + "\t";
    for (let j = 1; j <= nomer; j++) {
        baris += (i * j) + "\t";
    }
    console.log(baris);
}