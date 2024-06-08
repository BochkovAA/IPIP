// Сохранение имени пользователя в LocalStorage
function askUserName() {
    let userName = localStorage.getItem('userName');
    if (!userName) {
        userName = prompt('Как вас зовут?');
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }
    if (userName) {
        document.querySelector('header h1').textContent = `Добро пожаловать, ${userName}!`;
    }
}

window.onload = askUserName;

// Задание 1
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

// Задание 2
function runTask2() {
    const array = [5, 10, 15, 20, 25, 30, 35, 40];
    const container = document.getElementById('array-container');
    container.innerHTML = ''; // Очистка контейнера перед добавлением элементов
    array.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = `Элемент ${index + 1}: ${item}`;
        div.setAttribute('data-length', `Длина массива: ${array.length}`);
        container.appendChild(div);
    });
}

// Показывает форму теста
function showQuiz() {
    document.getElementById('quizForm').style.display = 'block';
}

// Обработка отправки теста
function submitQuiz() {
    const quizForm = document.getElementById('quizForm');
    const formData = new FormData(quizForm);
    const correctAnswers = {
        question1: 'b',
        question2: 'a',
        question3: 'c',
        question4: 'd',
        question5: 'b',
        question6: 'c',
        question7: 'a',
        question8: 'a',
        question9: 'd',
        question10: 'c'
    };
    let score = 0;
    let results = '<h3>Результаты теста:</h3>';
    results += '<ol>';
    
    for (const [question, answer] of formData.entries()) {
        const correct = correctAnswers[question];
        const isCorrect = answer === correct;
        if (isCorrect) {
            score++;
        }
        results += `<li>Вопрос ${question.slice(-1)}: ${isCorrect ? 'Верно' : 'Неверно'} (Ваш ответ: ${answer}, Правильный ответ: ${correct})</li>`;
    }
    
    results += '</ol>';
    results += `<p>Ваш результат: ${score} из 10 верных ответов.</p>`;
    
    document.getElementById('quizResult').innerHTML = results;
}

// Приветственное сообщение с текущей датой и именем пользователя
function showGreeting() {
    const userName = localStorage.getItem('userName') || 'Гость';
    const currentDate = new Date().toLocaleDateString('ru-RU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const greetingText = `Привет, ${userName}! Сегодня ${currentDate}.`;
    document.getElementById('greeting-text').textContent = greetingText;
    document.getElementById('greeting-screen').style.display = 'flex';
}

// Скрыть приветственное сообщение
function hideGreeting() {
    document.getElementById('greeting-screen').style.display = 'none';
}
