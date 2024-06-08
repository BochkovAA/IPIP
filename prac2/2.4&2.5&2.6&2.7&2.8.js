let array1 = ['deb', 'ubu', 'astra'];
let array2 = ['cent', 'red', 'alt'];

let combinedArray = array1.concat(array2);
console.log("Объединенный массив:", combinedArray);

// Выводим все элементы объединенного массива с помощью цикла for, задание 4
for (let i = 0; i < combinedArray.length; i++) {
    console.log(`Элемент ${i + 1}: ${combinedArray[i]}`);
}

// Удаляем последний элемент объединенного массива и выводим его значение
let lastElement = combinedArray.pop();
console.log("Удаленный последний элемент:", lastElement);
console.log("Массив после удаления:", combinedArray);

// Повторяем удаление последнего элемента и выводим его значение
let newLastElement = combinedArray.pop();
console.log("Удаленный последний элемент (повторно):", newLastElement);
console.log("Массив после второго удаления:", combinedArray);

// Добавляем новый элемент в начало объединенного массива
combinedArray.unshift('rosa');
console.log("Массив после добавления элемента в начало:", combinedArray);
