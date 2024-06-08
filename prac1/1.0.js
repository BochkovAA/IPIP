let value = 42;  // Можно изменить на любой другой тип данных или значение
let typeOfValue = typeof value;  // Определяем тип переменной

if (typeOfValue === 'number') {
    console.log('Значение переменной - число');
} else if (typeOfValue === 'string') {
    console.log('Значение переменной - строка');
} else if (typeOfValue === 'boolean') {
    console.log('Значение переменной - булево');
} else {
    console.log('Тип переменной неизвестен');
}
