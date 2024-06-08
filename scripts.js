// Функция выполнения задач
function executeTask(taskNumber) {
    const taskOutput = document.getElementById('task-output');
    taskOutput.innerHTML = ''; // Очищаем вывод

    if (taskNumber === 1) {
        // Практическая 2, задание 3
        let array = [5, 10, 15, 20, 25, 30, 35, 40];
        let container = document.createElement('div');

        array.forEach((item, index) => {
            let div = document.createElement('div');
            div.className = 'item';
            div.textContent = `Элемент ${index + 1}: ${item}`;
            div.setAttribute('data-length', `Длина массива: ${array.length}`);
            container.appendChild(div);
        });

        taskOutput.appendChild(container);
    } else if (taskNumber === 2) {
        // Практическая 1, задание 4
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
    }
}

// Создание теста
const questions = [
    "Что такое JavaScript?",
    "Что делает метод 'querySelector'?",
    // Добавьте еще вопросы здесь
];

function createQuiz() {
    const quizForm = document.getElementById('quiz-form');
    questions.forEach((question, index) => {
        const inputId = `q${index}`;
        const label = document.createElement('label');
        label.setAttribute('for', inputId);
        label.textContent = `${index + 1}. ${question}`;

        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', inputId);

        quizForm.appendChild(label);
        quizForm.appendChild(input);
    });
}

// Подсчет результатов теста
function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const quizResults = document.getElementById('quiz-results');
    const userAnswers = [];

    questions.forEach((question, index) => {
        const inputId = `q${index}`;
        const checkbox = document.getElementById(inputId);
        userAnswers.push({
            question: question,
            answer: checkbox.checked
        });
    });

    let correctCount = 0;
    userAnswers.forEach(answer => {
        if (answer.answer) {
            correctCount++;
        }
    });

    const resultPercentage = (correctCount / questions.length) * 100;
    const resultMessage = `Вы ответили правильно на ${correctCount} из ${questions.length} вопросов (${resultPercentage}%).`;

    quizResults.innerHTML = resultMessage;

    // Дополнительно, показать ответы пользователя
    const userAnswersOutput = document.createElement('div');
    userAnswersOutput.innerHTML = "<h3>Ваши ответы:</h3>";

    userAnswers.forEach((answer, index) => {
        const answerOutput = document.createElement('p');
        answerOutput.textContent = `${index + 1}. ${answer.question}: ${answer.answer ? 'верно' : 'неверно'}`;
        userAnswersOutput.appendChild(answerOutput);
    });

    quizResults.appendChild(userAnswersOutput);
}

// Функция показа заставки на весь экран
function showFullscreenOverlay() {
    const userName = localStorage.getItem('userName');
    const currentDate = new Date().toLocaleDateString();

    const overlayContent = document.createElement('div');
    overlayContent.classList.add('overlay-content');
    overlayContent.innerHTML = `
        <h2>Добро пожаловать, ${userName ? userName : 'Гость'}!</h2>
        <p>Сегодня ${currentDate}</p>
        <button onclick="hideFullscreenOverlay()">Закрыть</button>
    `;

    const overlay = document.createElement('div');
    overlay.classList.add('fullscreen-overlay');
    overlay.appendChild(overlayContent);

    document.body.appendChild(overlay);
}

// Функция скрытия заставки
function hideFullscreenOverlay() {
    const overlay = document.querySelector('.fullscreen-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Добавляем обработчик событий для сохранения имени пользователя
document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        const name = prompt('Представьтесь, пожалуйста:');
        localStorage.setItem('userName', name);
    }

    createQuiz(); // Создаем тест
});

