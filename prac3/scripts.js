document.addEventListener('DOMContentLoaded', () => {
    // Обработка клика по кнопкам в меню
    document.getElementById('show-task1').addEventListener('click', showTask1);
    document.getElementById('show-task2').addEventListener('click', showTask2);
    document.getElementById('show-test').addEventListener('click', showTest);
    document.getElementById('show-welcome-screen').addEventListener('click', showWelcomeScreen);

    // Инициализация теста
    document.getElementById('start-quiz').addEventListener('click', startQuiz);

    // Получение имени пользователя
    let userName = localStorage.getItem('userName') || prompt('Как вас зовут?');
    if (userName) {
        localStorage.setItem('userName', userName);
        document.getElementById('welcome-message').innerText = `Привет, ${userName}!`;
    }

    // Текущая дата
    let currentDate = new Date();
    document.getElementById('current-date').innerText = currentDate.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
});

function showTask1() {
    alert('Сейчас будет выполнена задача 4 из первой практической работы.');
    runTask1();
}

function showTask2() {
    alert('Сейчас будет выполнена задача 3 из второй практической работы.');
    runTask2();
}

function showTest() {
    document.getElementById('test').scrollIntoView({ behavior: 'smooth' });
}

function showWelcomeScreen() {
    let welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.display = 'flex';
    welcomeScreen.addEventListener('click', () => {
        welcomeScreen.style.display = 'none';
    });
}

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

function runTask2() {
    // Создаем массив
    let array = [5, 10, 15, 20, 25, 30, 35, 40];
    let container = document.getElementById('array-container');

    // Очищаем контейнер перед добавлением новых элементов
    container.innerHTML = '';

    // Создаем и добавляем элементы в контейнер
    array.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = 'array-item';
        div.textContent = `Элемент ${index + 1}: ${item}`;
        div.setAttribute('data-length', `Длина массива: ${array.length}`);
        container.appendChild(div);
    });
}

function startQuiz() {
    // Вопросы для теста
    const questions = [
        { question: 'Какой метод используется для вывода сообщений в консоль?', options: ['console.print()', 'console.log()', 'print()'], correctAnswer: 1 },
        { question: 'Как объявить переменную в JavaScript?', options: ['let', 'var', 'const', 'Все ответы верны'], correctAnswer: 3 },
        { question: 'Что такое DOM?', options: ['Документальный объектный модель', 'Документ Объект Модель', 'Data Object Model'], correctAnswer: 1 },
        { question: 'Какой оператор используется для присваивания значения?', options: ['=', '==', '==='], correctAnswer: 0 },
        { question: 'Какой метод используется для преобразования строки в число?', options: ['parseInt()', 'Number()', 'Все ответы верны'], correctAnswer: 2 },
        { question: 'Как вызвать функцию в JavaScript?', options: ['function()', 'func()', 'fn()'], correctAnswer: 1 },
        { question: 'Как добавить комментарий в JavaScript?', options: ['// комментарий', '<!-- комментарий -->', '/* комментарий */'], correctAnswer: 0 },
        { question: 'Какой оператор используется для сложения строк?', options: ['+', '&', 'concat()'], correctAnswer: 0 },
        { question: 'Как получить текущую дату и время в JavaScript?', options: ['new Date()', 'Date.now()', 'Date.today()'], correctAnswer: 0 },
        { question: 'Как создать пустой массив?', options: ['[]', '{}', 'new Array()'], correctAnswer: 0 }
    ];

    let quizContainer = document.getElementById('quiz-container');
    let resultContainer = document.getElementById('quiz-result');
    quizContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    questions.forEach((q, index) => {
        let questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, i) => {
            let optionLabel = document.createElement('label');
            optionLabel.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${option}`;
            questionDiv.appendChild(optionLabel);
        });

        quizContainer.appendChild(questionDiv);
    });

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Отправить ответы';
    submitButton.onclick = () => {
        let correctAnswers = 0;
        questions.forEach((q, index) => {
            let selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption && +selectedOption.value === q.correctAnswer) {
                correctAnswers++;
            }
            let result = selectedOption ? (selectedOption.value == q.correctAnswer ? 'Верно' : 'Неверно') : 'Не выбрано';
            resultContainer.innerHTML += `<p>${index + 1}. ${q.question} - ${result}</p>`;
        });
        resultContainer.innerHTML += `<p>Ваш результат: ${correctAnswers} из ${questions.length}</p>`;
    };

    quizContainer.appendChild(submitButton);
}
