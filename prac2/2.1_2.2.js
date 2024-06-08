let array1 = [1, 2, 3, 4, 5];

let array2 = new Array(6, 7, 8, 9, 10);

let array3 = Array.of(11, 12, 13, 14, 15);

console.log(array1);
console.log(array2);
console.log(array3);

// Выводим 5-й элемент (индексация с 0)
console.log("Пятый элемент массива:", array1[4]);

// Изменяем значение 5-го элемента
array1[4] = 100;
console.log("Пятый элемент после изменения:", array1[4]);
