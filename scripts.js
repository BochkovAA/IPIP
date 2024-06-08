// Функция запуска задачи 1
function runTask1() {
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
}

// Функция запуска задачи 2
function runTask2() {
    let array = [5, 10, 15, 20, 25, 30, 35, 40];
    let container = document.getElementById('array-container');
    
    // Очистить контейнер перед добавлением новых элементов
    container.innerHTML = '';
    
    array.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = 'item';
        div.textContent = `Элемент ${index + 1}: ${item}`;
        div.setAttribute('data-length', `Длина массива: ${array.length}`);
        container.appendChild(div);
    });
}

// Функция запуска теста
function startQuiz() {
    // Реализация теста на знание JavaScript
    // Пропущено для простоты примера
    let userAnswers = []; // Сюда сохраняются ответы пользователя
    let quizResult = "Результат: 8 из 10 верных ответов"; // Пример результата теста
    let quizResultDisplay = document.getElementById('quizResult');
    quizResultDisplay.textContent = quizResult;
}

// Функция для показа заставки с приветствием
function showGreeting() {
    let userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }

    let currentDate = new Date().toLocaleDateString('ru-RU');
    document.getElementById('currentDate').textContent = currentDate;

    let splash = document.getElementById('splash');
    splash.style.display = 'flex'; // Показываем заставку

    // Убираем заставку при клике на неё
    splash.addEventListener('click', function() {
        splash.style.display = 'none';
    }, { once: true }); // { once: true } убирает обработчик после первого срабатывания
}

// Проверка имени пользователя при загрузке страницы
function checkUserName() {
    let userName = localStorage.getItem('userName');
    if (!userName) {
        // Если имя пользователя не сохранено, запрашиваем его
        userName = prompt('Представьтесь, пожалуйста:');
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }
}

// Вызываем проверку имени пользователя при загрузке страницы
window.onload = checkUserName;
