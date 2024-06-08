let today1 = new Date();
console.log("Сегодняшняя дата:", today1.toString());

let options = { year: 'numeric', month: 'long', day: 'numeric' };
let today = new Date();
let formattedDate = today.toLocaleDateString('ru-RU', options).replace(' г.', ' года');
console.log("Сегодняшняя дата в формате '11 ноября 2020 года':", formattedDate);
