import "./main.scss";

const add123 = (a, b) => a + b;

const res = add123(222, 3);
console.log("Helloasda");



/*for (let i = '#'; i.length < 8; i +='#'){

    alert(i);

}
*/
const ROUTER = {
    usd: 'dollar',
    blr: 'bel rouble',
    rus: 'russian rouble',
    eur: 'euro'
}

let a = prompt('Какую вы хотите выбрать валюту', '')

let d = ROUTER[a]
alert(d);