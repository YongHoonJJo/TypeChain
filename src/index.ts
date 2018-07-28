class Human {
    public name: string;
    public age: number;
    public gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 22, "female");

const person = {
    name: "YongHoon", 
    gender: "male", 
    age: 24
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, You are ${person.age}, You are a ${person.gender}!!!`;
}

console.log(sayHi(person));
console.log(sayHi(lynn));

export {};