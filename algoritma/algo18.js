let jam = Number(prompt("Masukan jam nya"))
let menit = Number(prompt("Masukan menit nya"))
let detik = Number(prompt("Masukan detik nya"))

detik = detik + 1;

if (detik == 60) {
    detik = 0;
    menit = menit + 1;
    
    if (menit == 60) {
        menit = 0;
        jam = jam + 1;
        
        if (jam == 24) {
            jam = 0;
        }
    }
}

console.log("Jam Baru : " + jam + " : " + menit + " : " + detik)