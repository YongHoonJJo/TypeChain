interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    name: "YongHoon", 
    gender: "male", 
    age: 24
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, You are ${person.age}, You are a ${person.gender}!!!`;
}

console.log(sayHi(person));

export {};