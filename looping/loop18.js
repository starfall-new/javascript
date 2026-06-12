let inputan = 2;

for (let i = 1; i <= 5; i++) {
    let baris = "";
    for (let j = 1; j <= inputan; j++) {
        baris += `${j} x ${i} = ${j * i}\t`; 
    }
    console.log(baris);
}