// =======
// Primitives 
// =======
let age: number;
age = 12.1
// age ='34'

let userName: string;
userName = "Bob"
// userName = {}

let isInstructor: boolean;
isInstructor = true
// isInstructor = 'true'
//


// =======
// Objects
// =======
let hobbies: string[]
hobbies = ['Sport', 'Shopping']

// let person: {
//     name: string;
//     age: number;
//     // isEmployer: boolean
// };
// person = {
//     name: "Bob",
//     age: 31
// }
// person = {
//     isEmploter: true
// }

type Person = {
    name: string;
    age: number;
}
let person: Person;
person = {
    name: "Vob",
    age: 1324
}

let people: {
    name: string;
    age: number;
}[];
people = [{ name: 'bob', age: 23 }]

let course: string | number = 'React - Complete Guide'
course = 123
//


// ======
// Functions
// ======

function add(a: number, b: number) {
    return a + b
}
function printOutput(value: any) {
    console.log(value);
}


// ==========
// Generics

// function insertInBegginning(array: any[], value: any) {
//     const newArray = [value, ...array]
//     return newArray
// }

function insertInBegginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray
}
const demoArray = [1, 2, 3]
const updatedDemoArray = insertInBegginning(demoArray, -1)
updatedDemoArray[0].split('')
const stringArray = insertInBegginning(['asd', 'sd'], 'er')