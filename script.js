// whatTypeIsIt("foo") 
/*
function foo(element) {
    return element;
}


console.log('type of:', typeof foo);


const foo2 = (arg) => arg;

console.log('type of2:', typeof foo2);
*/


function sum(value1, value2) {   //funkcja dodawania 
    if (typeof value1 == "number" && typeof value2 == "number"){   // określenie typeof jako wartości liczbowej
        return value1 + value2; // z sumowanie var1 i var2 jeśli są to wartości liczbowe
    }   else {
        return "Arguments are not numbers"  // komentarz jeśli nie jest spełniony warunek
    }

}

console.log(sum(3,22)); //25
console.log(sum(3,"text")); //25
