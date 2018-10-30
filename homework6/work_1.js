/*
    Надеюсь я понял задачу Ирина)
 */

let array = ['one', 'second', 'three', 'cetire', 'ElemenBlet'];

//  Создаём стили для страницы сайта
//   Чтобы всё по красоте было
let stylesText = document.createTextNode(`
    *{font-size: 20px;}
    html{ background: url('https://steamusercontent-a.akamaihd.net/ugc/857225545729970715/C3381211D6F4825D63C4AF75E9827C5DA79D50DC/')}
    input{ padding: 10px 20px; border: 0; display: inline-block}
    label{ color: #ffffff; background-color: red}
    section {background: cyan; padding: 10px}
    `);
let style = document.createElement('style');
style.type = 'text/css';
style.appendChild(stylesText);
document.head.appendChild(style); // Инициализируем на странице

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

//  Создаём Секцию для вывода елементов массива
let section = document.createElement('section');
section.id = 'section';
document.body.appendChild(section);
let innerSection = '';
array.forEach(function (value, index) {
    innerSection += `${value}[${index}] `
});
section.innerHTML = innerSection;

let arrayText = document.getElementById('text');

let arrayIndex = document.getElementById('element');

document.getElementById('button_before').addEventListener('click', function () {
    if (arrayIndex.value >= array.length)
    {
        alert('Brat (ili sestra), netu stolko indeksov v massive')
    }
    else if (arrayText.value.length <= 3)
    {
        alert('Слишком короткое название для елемента')
    }
    else
    {
        array.splice(Number(arrayIndex.value), 0, arrayText.value);
        let arrayString = '';
        array.forEach(function (value, index) {
            arrayString += `${value}[${index}] `
        });
        section.innerHTML = arrayString;
    }
});

document.getElementById('button_after').addEventListener('click', function () {
    if (arrayIndex.value >= array.length)
    {
        alert('Brat (ili sestra), netu stolko indeksov v massive')
    }
    else if (arrayText.value.length <= 3)
    {
        alert('Слишком короткое название для елемента')
    }
    else {
        array.splice(Number(arrayIndex.value) + 1, 0, arrayText.value);
        let arrayString = '';
        array.forEach(function (value, index) {
            arrayString += `${value}[${index}] `
        });
        section.innerHTML = arrayString;
    }
});


