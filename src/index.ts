/*
const name = "YongHoonJJo",
    age = 24,
    gender = "male";
*/

const sayHi = (name: string, age: number, gender: string): void => {
    console.log(`Hello ${name}, You are ${age}, You are a ${gender}!`);
}

//sayHi(name, age, gender);
sayHi("YongHoon", 24, "male");

export {};