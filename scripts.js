// Функция запуска задачи
function runTask(taskNumber) {
    if (taskNumber === 1) {
        // Задание 1
        let number;
        do {
            number = prompt('Введите любое число больше 5:');
            if (number === null) {
                alert('Вы отменили ввод');
                break;
            } else if (!isNaN(number) && +number > 5) {
                alert('Поздравляем! Вы ввели число больше 5.');
            } else {
                alert('Ошибка! Введите число больше 5.');
            }
        } while (number !== null && (+number <= 5 || isNaN(number)));
    } else if (taskNumber === 2) {
        // Задание 2
        let array = [5, 10, 15, 20, 25, 30, 35, 40];
        let container = document.getElementById('array-container');

        array.forEach((item, index) => {
            let div = document.createElement('div');
            div.className = 'item';
            div.textContent = `Элемент ${index + 1}: ${item}`;
            div.setAttribute('data-length', `Длина массива: ${array.length}`);
            container.appendChild(div);
        });
    }
}

// Функция запуска теста
function startQuiz() {
    // Реализация теста на знание JavaScript
    // Пропущено для простоты примера
    let userAnswers = []; // Сюда сохраняются ответы пользователя
    let quizResult = "Результат: 8 из 10 верных ответов"; // Пример результата теста
    let quizResultDisplay = document.getElementById('quizResult');
    quizResultDisplay.textContent = quizResult;

    let userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }

    let currentDate = new Date().toLocaleDateString('ru-RU');
    document.getElementById('currentDate').textContent = currentDate;

    document.getElementById('splash').classList.remove('hidden');
}

// Обработчик события для скрытия заставки при клике
document.addEventListener('click', function(event) {
    if (event.target.matches('#splash')) {
        document.getElementById('splash').classList.add('hidden');
    }
});

// Сохранение имени пользователя в localStorage
let userName = prompt('Представьтесь, пожалуйста:');
if (userName) {
    localStorage.setItem('userName', userName);
}
