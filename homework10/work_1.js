let selector = document.body.appendChild (
    document.createElement ( 'input' )
);

selector.type = 'file';
selector.multiple = true;
selector.id = 'selectImages';
selector.style.display = 'none';

let label = document.body.appendChild (
    document.createElement ( 'label' )
);

label.htmlFor = 'selectImages';
label.innerText = 'Select images';

let promise = function ( imageFile ) {
    // TODO Доделать ДЗ 10
    if ()
    console.log(imageFile.type)
};

selector.onchange = function ( event ) {
    for ( var file of event.target.files ) {
        promise ( file )
            .then ( result => {
                var picture = document.createElement ( "img" );
                document.body.appendChild( picture );
                picture.src = result
            })
            .catch ( error => console.error ( error ) )
    }
};