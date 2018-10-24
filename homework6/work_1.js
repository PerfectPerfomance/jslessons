let array = ['first', 'second'];


//  Создаём стили для страницы сайта
//   Чтобы всё по красоте было
let stylesText = document.createTextNode(`
    *{font-size: 20px;}
    html{ background: url('https://steamusercontent-a.akamaihd.net/ugc/857225545729970715/C3381211D6F4825D63C4AF75E9827C5DA79D50DC/')}
    input{ padding: 10px 20px; border: 0; display: inline-block}
    label{ color: #ffffff; background-color: red}
    section {background: cyan;}
    `);
let style = document.createElement('style');
style.type = 'text/css';
style.appendChild(stylesText);
document.head.appendChild(style); // Инициализируем на странице

//  Создаём Секцию для вывода елементов массива
let section = document.createElement('section');
section.id = 'section';
let innerSection = document.createTextNode(array.forEach((val, index, array)=>{ return val }));
section.appendChild(innerSection);
document.body.appendChild(section);

//  Создаём label для InputText
let labelText = document.createElement('label');
labelText.for = 'text';
labelText.innerText = 'Текста для елемента массива';
document.body.appendChild(labelText);

//  Создаём поле для ввода текста массива
let inputText = document.createElement('input');
inputText.id = 'text';
inputText.name = 'text';
document.body.appendChild(inputText);

//  Создаём input для ввода номер елемента после или до которого вставлять
let labelElem = document.createElement('label');
labelElem.for = 'element';
labelElem.innerText = 'Напишите индекс елемента';
document.body.appendChild(labelElem);


//  Создаём input для ввода номер елемента после или до которого вставлять
let inputElem = document.createElement('input');
inputElem.id = 'element';
labelText.value = '2';
document.body.appendChild(inputElem);

//  Создаём кнопку для вставки до выбраного елемента
let button_before = document.createElement('button');
button_before.innerText = 'Вставить перед';
button_before.id = 'button_before';
document.body.appendChild(button_before);

//  Создаём кнопку для вставки после выбраного елемента
let button_after = document.createElement('button');
button_after.innerText = 'Вставить после';
button_after.id = 'button_after';
document.body.appendChild(button_after);


