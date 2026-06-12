let number = 0;
let kata = "";
for (let i = 1; i <= 5; i++) {
    number += i;
    kata += i + (i < 5 ? "+" : "");
}
console.log(kata + "=" + number);