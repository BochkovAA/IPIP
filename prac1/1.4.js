let number;
do {
    number = prompt('Введите любое число больше 5:');
    if (number === null) {  // Проверяем, не нажал ли пользователь "Отмена"
        alert('Вы отменили ввод');
        break;
    } else if (!isNaN(number) && +number > 5) {
        alert('Поздравляем! Вы ввели число больше 5.');
    } else {
        alert('Ошибка! Введите число больше 5.');
    }
} while (number !== null && (+number <= 5 || isNaN(number)));
