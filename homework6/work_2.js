/*
    ДЗ 6
 */

var tagNames = [ "div", "div", "div", "div", "button" ]
var divStyle = `
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px green;
    font-size: 25px;
`;

elements = tagNames.map ( function ( x ) {
    return document.body.appendChild (
        document.createElement ( x )
    )
});

elements.filter ( function ( element ) {
    return element.tagName === "DIV"
})
    .forEach ( function ( element, num ) {
        element.style = divStyle;
        element.innerText = num
    });

elements.filter ( function ( element ) {
    return element.tagName === "BUTTON"
})
    .forEach ( function ( element ) {
        element.innerHTML = "remove DIVs";
        element.onclick = function ( event ) {
            recursRemove ()
        }
    });

function recursRemove( ) {
    let divs = document.getElementsByTagName('div');
    if (divs.length > 0)
    {
        console.log(divs);
        divs[0].remove();
        return recursRemove()
    }
    else
        console.log('udalil vsyo ep');

}