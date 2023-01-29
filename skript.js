//1
let name = 'Ibragim' //string

const age = 16 //number
//4
function dostup(){
     if(name < 16){
      console.log('Доступ запрещен')
     } else {
      console.log(`Привет ${name}`)
    }
}
//5
function vievMoney(){
    console.log(`Вот вам 10$`);
};
vievMoney();


function getMoney(){
    return `Вот вам 10$`;
}
getMoney();



function mny(money){
   console.log(`вот вам ${money}$`)
}
mny(100);

function mth(){
  let a = 10;
console.log(a * a);
};
mth();


function max(a, b, c,){
    console.log(Math.max(a, b, c,));
};
max(0, 20, 10,);


function discriminant(a, b, c,){
  console.log(Math.max(a, b, c,));
}
discriminant(5, 5, 5,);


function finish(a, b,){
if(a % 2 === 0 && b % 2 === 0){
  console.log(a * b);
} else if(a % 2 > 0 && b % 2 > 0){
  console.log(a + b);
} else if (a % 2 > 0 || b % 2 > 0){
  console.log('error')
}
}
finish(5, 6);
