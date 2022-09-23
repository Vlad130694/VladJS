import "./main.scss";

const add123 = (a, b) => a + b;

const res = add123(222, 3);
console.log("Helloasda");



/*for (let i = '#'; i.length < 8; i +='#'){

    alert(i);

}
*/
/*const ROUTER = {
    usd: 'dollar',
    blr: 'bel rouble',
    rus: 'russian rouble',
    eur: 'euro'
}

let a = prompt('Какую вы хотите выбрать валюту', '')

let d = ROUTER[a]
alert(d);
*/


const ROUTER = {
    usd: 'dollar',
    blr: 'bel rouble',
    rus: 'russian rouble',
    eur: 'euro'
}
///
/*Object.defineProperty(ROUTER, 'usd',{
    writable: false
});

ROUTER.usd = "k"


for( let key in ROUTER){
    console.log(key);
}
*/
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    
}
let sum = 0;

for(let key in salaries){
sum += salaries[key];
}
console.log(sum);
*/
/*
function show(a,b){
    alert(a+b);
}
show(2,2)
*/
/*function show(){

    for (const i of arguments) {
        console.log(i);
    }
}
show(2,1,3)
*/

/*const show = (...at) => {
    let sum =0;
    for(let suma of at) {
    sum += suma;
    }
    return sum
}

let showa = show(1,9);
console.log(showa)
*/

const show = (a, b) => a<b ? a:b;
 
show(1,4);

const show = (a, b) => a<b ? a:b;
 
show(1,4);

const min = 