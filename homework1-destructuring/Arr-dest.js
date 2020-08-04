// Задание 1
// Дан массив городов ["Kyiv", "Berlin", "Dubai", Moscow", "Paris"];
// Выведите в консоль все свойства этого массива с помощью синтаксиса десктруктуризации.

const arr = ["Kyiv", "Berlin", "Dubai", "Moscow", "Paris"];
const [town1, town2, town3, town4, town5] = arr;
console.log (town1, town2, town3, town4, town5);


// Задание 2
// Создайте обьект Employee. Запишите в него свойства name, salary и присвойте любые значение.
// С помощью синтаксиса десктруктуризации сделайте так, чтоб запись console.log(name, salary) выводила в консоль
// значения этих свойств в обьекте Employee;

const Employee = {
    name: "Roman",
    salary: "10 000"
};
let {name, salary} = Employee;
console.log(name, salary);

// Задание 3
// Дополните код так, чтоб он был рабочим
// const array = ['value', 'showValue']
// alert(value); // будет выведено 'value'
// alert(showValue);  // будет выведено 'showValue'

const array = ['value', 'showValue']
let [value, showValue] = array;
alert(value);
alert(showValue);