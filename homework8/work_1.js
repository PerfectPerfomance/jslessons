fetch('https://api.github.com/users')
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Похоже какие то проблемы: ' +
                    response.status);
                return;
            }

            response.json().then(function(data) {
                for ( let i = 0; i < data.length; i++)
                {
                    let img = document.createElement('img');
                    img.src = data[i]['avatar_url'];
                    img.alt = data[i]['login'];
                    document.body.appendChild(img)

                }
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });



