var css = '* { transition: all 1s; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);

let tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

for (let value of tags) {
    let tag = document.createElement(value);
    tag.innerText = `My new tag ${value}`;
    document.body.appendChild(tag);
    tag.addEventListener('click', function () {
        let random_function = Math.floor(Math.random() * 5);
        if (random_function === 0)
            return this.style.color = 'ping';
        else if (random_function === 1)
            return this.style.marginTop = '50px';
        else if (random_function === 2)
            return this.style.background = 'green';
        else if (random_function === 3)
            return this.style.background = 'red';
        else if (random_function === 4)
            return this.style.color = 'red';
    })
}

