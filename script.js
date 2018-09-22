// whatTypeIsIt("foo") 
/*
function foo(element) {
    return element;
}


console.log('type of:', typeof foo);


const foo2 = (arg) => arg;

console.log('type of2:', typeof foo2);
*/


function sum(value1, value2) {
    if (typeof value1 == "number" && typeof value2 == "number"){
        return value1 + value2;
    }   else {
        return "Arguments are not numbers"
    }

}

console.log(sum(3,"boo"));