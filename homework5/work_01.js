// Создали P
var p = document.createElement('p');
p.id = 'click'; // Повесим айди, чтобы легче было повесить Event
p.innerHTML = 'Click me!';
p.style.border = '2px solid red';
document.body.appendChild(p);

// Повесим Event на #click
let p_id = document.getElementById('click');
p_id.addEventListener('click', ()=>{
    if (!document.getElementById('img')){
        let img = document.createElement('img');
        img.style.transition = '0.3s all';
        img.id = 'img'; // Добавил айди для картинки, чтобы повесить Event
        img.src = 'https://i.ytimg.com/vi/iPrnduGtgmc/hqdefault.jpg';
        document.body.appendChild(img);

        let id_img = document.getElementById('img');

        let mouseover = id_img.addEventListener('mouseover', ()=>{
            id_img.style.width = `${id_img.width * 2}px`; // Просто 200px это скучно
        });

        let mouseout = id_img.addEventListener('mouseout', ()=>{
            id_img.style.width = `${id_img.width / 2}px`
        });

        id_img.addEventListener('click', ()=>{
            id_img.remove();
        });

    }
});

