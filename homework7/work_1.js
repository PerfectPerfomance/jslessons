//   Наш конструктор

function User (name = 'Name', email = 'cracadile@google.com') {
    this.name = name;
    this.email = email;

    this.avatars = [
        "https://pre00.deviantart.net/50f9/th/pre/i/2011/217/e/8/pikachu_2_by_nostalgiaattack-d45jd3i.png",
        "https://cdn.diversityavatars.com/wp-content/uploads/2018/01/Vector-Smart-Object-5.png",
        "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
        "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
        "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
        "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
        "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
        "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
    ];

    this.admin = {
        photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
        name: "admin"
    };

    this.getAvatar = function () {
        return this.avatars.shift ()
    };

    this.photo = this.getAvatar();


    this.write = function ( text ) {
        let textblock = document.getElementById('textblock');
        let message = document.createElement('div');
        let img = document.createElement('img');
        img.width = '50';
        img.src = this.photo;
        let newText = document.createElement('span');
        newText.innerText = text;
        message.appendChild(img);
        message.appendChild(newText);

        textblock.appendChild(message);
    }
}
//  Конец нашего конструктора

//  Блок для сообщений
    (function () {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.style = `
            background-color: black;
            position: relative;
            padding: 10px;
            width: 20%;
            height: 580px;
            margin: 0 auto;
        `;
    div.textBlock = div.appendChild( document.createElement('div') );
    div.textBlock.style = `
                width: 100%;
                background-color: #cccccc;
                height: 500px;
                overflow: scroll;
        `;
    div.textBlock.id = 'textblock';

    //  Елемент для ввода сообщение
    div.input = document.createElement('input');
    div.input.id = 'input';
    div.appendChild(div.input);
    div.input.style = `
            border: 0;
            border-radius: 3px;
            width: 100%;
            padding-left: 5px;
            height: 30px;
            line-height: 30px;
            margin-top: 10px;
        `;

    div.button = document.createElement('button');
    div.button.id = 'submit';
    div.button.innerText = 'Отправить';
    div.appendChild(div.button);
    div.button.style = `
        height: 30px;
        width: 100%;
        margin-top: 10px;
    `;
})();
//  Конец блока для сообщений


var users = [];
users.push ( new User ( "Иван" ) );
users.push ( new User ( 'Alex', "alex@gmail.com" ) );
users.push ( new User ( 'Bob', "bob777@gmail.com" ) );
users.push ( new User ( 'Dima', "dima888@gmail.com" ) );
users.push ( new User ( 'Fima', "fima999@gmail.com" ) );

var k = 1;
users.forEach (
    function ( user ) {
        setTimeout (
            function () {
                user.write ( `Hello, I'm ${user.name}` )
            }, 3000 * k++
        )
    }
);


//  Нажатие отправить сообщение от админа
let submit = document.getElementById('submit');
submit.addEventListener('click', function () {
    let input = document.getElementById('input').value;
    let textBlock = document.getElementById('textblock');
    let message = document.createElement('div');
    let newText = document.createElement('span');
    newText.innerText = input;
    let img = document.createElement('img');
    img.width = '50';
    img.src = users[0].admin.photoURL;
    message.appendChild(newText);
    message.appendChild(img);
    message.style.textAlign = 'right';

    textBlock.appendChild(message);
});