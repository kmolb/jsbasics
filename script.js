//ES5:
var foo = "foo"; // var(zmienna) wartość dostępna na starcie, wielokrotne użycie, możliwość napisania
var foo = "hello";


//ES6 only:
let baz = "Boo"; //let (zmienna) przewidywalny zakres wykożystania, lepsza od var
{
    let baz = "Booze";

    console.log(baz);
}
console.log(baz);

const BAR = "I'm Batman";