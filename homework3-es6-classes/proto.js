// Реализовать класс Employee, в котором будут следующие свойства - name (имя), age (возраст), salary (зарплата).
// Сделайте так, чтобы эти свойства заполнялись при создании объекта.
//     Сделайте геттеры и сеттеры для этих свойств.
//     Сделайте класс Programmer, который будет наследоваться от класса Employee, у которого будет свойство lang (список языков)
// Для класса Programmer перезапишите геттер для свойства salary. Пусть он возвращает свойство salary умноженное на 3.
// Создайте несколько экземпляров обьекта Programmer, выведите их в консоль.
'use strict'

class Employee {
    constructor(name, age, salary) {
        this._name = name;
        this._age = age;
        this._salary = salary;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary,lang) {
        super(name, age, salary);
        this.lang = lang;
    }
    get salary() {
        return this._salary*3;
    }
}

const user = new Programmer("Вася", 21, 200, ["english","german"]);
console.log(user);
console.log(user.name, user.age, user.salary);

const user1 = new Programmer("Петро", 57, 600, ["english","german","turkish"]);
console.log(user1);
console.log(user1.name, user1.age, user1.salary);

const user2 = new Programmer("Коля", 34, 800, ["english"]);
console.log(user2);
console.log(user2.name, user2.age, user2.salary);

const user3 = new Programmer("Діма", 15, 150, ["polish","german"]);
console.log(user3);
console.log(user3.name, user3.age, user3.salary);



