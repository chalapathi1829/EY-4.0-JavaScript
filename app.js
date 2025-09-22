//variables
// var is global variable
var a=123
console.log(a)
//let,const are local variable
let c=789
console.log(`value c is ${c}`)

const d=78
console.log(`value d is ${d}`)

//data types
//primitive data types
//1. string
var str="hello"
console.log(typeof str)
console.log(`value of str is ${str} and type of str is ${typeof str}`)
//2. number
num=123.45
console.log(typeof num)
console.log(`value of num is ${num} and type of num is ${typeof num}`)
//3. boolean
a=true
console.log(typeof a)
console.log(`value of a is ${a} and type of a is ${typeof a}`)
//4. null
n=null
console.log(typeof n)
console.log(`value of n is ${n} and type of n is ${typeof n}`)
//5. undefined
un=undefined
console.log(typeof un)
console.log(`value of un is ${un} and type of d is ${typeof un}`)

//non-primitive data types
//1. Array
arr=[1,"hello",true,null,undefined]
console.log(typeof arr)
console.log(`value of arr is ${arr} and type of arr is ${typeof arr}`)
//2. Object
data={
    name:"john",
    age:30,
    city:"New York"
}
console.log(typeof data)
console.log(`value of data is ${data} and type of data is ${typeof data}`)
console.log(data)
console.log(data.name)
console.log(data.age)
console.log(data.city)
