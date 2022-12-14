//FACTORIAL FOR

let fac = 1;
for (let i = 1; i <= 10; i++) {
    fac = fac * i;
   
    
}

console.log(fac);

//FACTORIAL WHILE
let ini = 1
let facw = 1;
while(ini <= 10){
    facw = facw * ini;
    ini++;

}

console.log(facw);


//FACTORIAL BREAK
let ini2 = 1;
let fac3= 1;
while(true){
    fac3 = fac3 * ini2;
    if (ini2 === 10){
        console.log(fac3);
        break
    }
    ini2++;

}