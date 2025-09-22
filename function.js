//functions
//code reusability
// function add(){
//     var a=123;
//     var b=456;
//     console.log(a+b);
//     document.write(a+b);
// }
// add();

//ES6
// const add=()=>{
//     var a=85;
//     var b=15;
//     console.log(a+b);
//     document.write(a+b);
// }
// add();

//ES7
// const add=(a,b)=> console.log(a+b);
// add(12,34);

//b is not defined
//hoisting => is it to decleare a variable before using it  (ES6)
// console.log(b);
// b=45;

let name="john";

function demo(){
    let name="peter";
    document.write(`Hello!, My name is ${name}`);
}
document.write(`Hello!, My name is ${name}<br>`);
demo();