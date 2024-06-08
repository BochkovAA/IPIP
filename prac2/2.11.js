function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function multiplyRandomNumbers() {
    let num1 = getRandomNumber(51);  // Максимум 50 включительно
    let num2 = getRandomNumber(51);
    let product = num1 * num2;
    console.log(`Произведение чисел ${num1} и ${num2} равно: ${product}`);
    return product;
}

multiplyRandomNumbers();
