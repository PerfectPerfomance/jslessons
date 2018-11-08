document.body.innerHTML = `
	<p class="paragraph">1</p>
    <p class="paragraph">2</p>
    <p class="paragraph">3</p>
    <p class="paragraph">4</p>
`;

let collection = document.querySelectorAll ( '.paragraph' )
let [ first, second, third, forth ] = collection;