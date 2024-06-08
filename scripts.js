// Сохранение имени пользователя в localStorage
function saveName() {
    let userName = prompt('Пожалуйста, представьтесь:');
    if (userName) {
        localStorage.setItem('userName', userName);
        document.getElementById('userName').textContent = userName;
    }
}

// Показать первое задание
function showTaskOne() {
    document.getElementById('taskOne').textContent = `
        Практическая 2, задание 3:
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <title>Длина массива</title>
            <style>
                .item:hover::after {
                    content: attr(data-length);
                    display: inline-block;
                    margin-left: 10px;
                    font-weight: bold;
                    color: red;
                }
            </style>
        </head>
        <body>
            <div id="array-container">
                <!-- Элементы массива будут добавлены сюда -->
            </div>
            <script>
                let array = [5, 10, 15, 20, 25, 30, 35, 40];
                let container = document.getElementById('array-container');

                array.forEach((item, index) => {
                    let div = document.createElement('div');
                    div.className = 'item';
                    div.textContent = \`Элемент \${index + 1}: \${item}\`;
                    div.setAttribute('data-length', \`Длина массива: \${array.length}\`);
                    container.appendChild(div);
                });
            </script>
        </body>
        </html>
    `;
}

// Показать второе задание
function showTaskTwo() {
    document.getElementById('taskTwo').textContent = `
        Практическая 1, задание 4:
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
    `;
}

// Генерация теста
function startTest() {
    const questions = [
        "Что такое JavaScript?",
        "Что делает оператор '==' в JavaScript?",
        "Чем отличается 'let' от 'var' в JavaScript?",
        "Что такое DOM?",
        "Что такое массив в JavaScript?",
        "Что такое цикл 'for'?",
        "Что такое функция в JavaScript?",
        "Что такое метод 'addEventListener'?",
        "Что такое условный оператор 'if-else'?",
        "Что такое объект в JavaScript?"
    ];
    const answers = [
        "Язык программирования для создания интерактивных веб-сайтов.",
        "Проверяет равенство без учета типа.",
        "Объявление переменной с областью видимости в блоке кода.",
        "Объектная модель документа - структура веб-страницы, доступная через JavaScript.",
        "Упорядоченная коллекция элементов данных.",
        "Циклическая конструкция, позволяющая повторять код заданное количество раз.",
        "Фрагмент кода, предназначенный для выполнения определенной задачи.",
        "Метод для добавления обработчика событий к элементу DOM.",
        "Конструкция, выполняющая различный код в зависимости от условия.",
        "Коллекция данных, содержащая пары ключ-значение."
    ];

    let score = 0;
    let userAnswers = [];

    for (let i = 0; i < questions.length; i++) {
        let answer = prompt(questions[i]);
        userAnswers.push(answer);
        if (answer && answer.toLowerCase() === answers[i].toLowerCase()) {
            score++;
        }
    }

    let testResults = document.getElementById('testResults');
    testResults.innerHTML = `<p>Вы ответили правильно на ${score} из ${questions.length} вопросов.</p>`;

    // Показать ответы пользователя
    testResults.innerHTML += "<p>Ваши ответы:</p>";
    for (let i = 0; i < questions.length; i++) {
        testResults.innerHTML += `<p>${questions[i]}<br>${userAnswers[i] === null ? 'Пользователь не ответил' : userAnswers[i]}</p>`;
    }
}

// Включение/выключение полноэкранного режима
function toggleFullscreen() {
    let overlay = document.getElementById('fullscreenOverlay');
    overlay.classList.toggle('active');
}

// Обновление текущей даты
function updateDate() {
    let currentDateElement = document.getElementById('currentDate');
    let currentDate = new Date();
    currentDateElement.textContent = currentDate.toLocaleDateString();
}

// Обновление имени пользователя из localStorage
function updateUserName() {
    let userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userName').textContent = userName;
    }
}

// Обновление данных при загрузке страницы
window.onload = function () {
    updateDate();
    updateUserName();
}

// Закрытие полноэкранной заставки при клике
document.getElementById('fullscreenOverlay').addEventListener('click', toggleFullscreen);
