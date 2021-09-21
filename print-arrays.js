// после задачи C выведи в консоль строку, в которой склеены все три элемента массива;
// после задачи D выведи в консоль такую строку: 1-й элемент массива - [тут сам элемент], а последний элемент - [тут сам элемент] (при решении вспомни про обратные кавычки);
// после задачи E выведи в консоль пятый элемент текущего массива и последний элемент массива из задания B;
// после задачи F выведи каждый элемент массива в отдельный console.log();
// после задачи G выведи в консоль длину массива;
// после задачи H выведи в консоль произведение второго элемента первого вложенного массива и третьего элемента второго вложенного массива.

// Пустой масив
const emptyArray = [];
console.log(emptyArray[0]); // undefined

// Годы выпуска
const years = [1998, 2003, 2014];
console.log(years[0] + years[2]); // 4012

// Массив фруктов
const fruits = ["Апельсин", "Яблоко", "Гранат"];
console.log(fruits.join());

// фрукты и года вместе
const fruitsAndYears = ["Апельсин", "Яблоко", "Гранат", 1998, 2003, 2014];
console.log(
  `1-й элемент массива - ${fruitsAndYears[0]}, а последний элемент - ${
    fruitsAndYears[fruitsAndYears.length - 1]
  } `
);

// Имена одногруппников;
const namesOfClassmates = [
  "nasir",
  "ali",
  "ruslan",
  "magomed",
  "magomed2",
  "ali2",
  "mansur",
  "jambulat",
  "said-ali",
  "zelim",
  "khamzat",
  "alimkhan",
  "vakha",
  "musa",
];
console.log(namesOfClassmates[4], years[years.length - 1]);

// Всё вклюено
const mixed = [1, "string", null, undefined, true, false];
console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[3]);
console.log(mixed[4]);
console.log(mixed[5]);

// Двумерный массив
const arrayOfEmptyArrays = [[], [], []];
console.log(arrayOfEmptyArrays.length);

// Двумерный заполненный ислами масив
const arrayOfNumberArrays = [
  [1, 2, 3],
  [30, 95, 77],
];
console.log(arrayOfNumberArrays[0][1] * arrayOfNumberArrays[1][2]);
