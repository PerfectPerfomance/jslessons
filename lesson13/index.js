let yandex;
fetch ( 'https://api.github.com/users/mbkkong' )
	.then ( response => {
		response.json ()
			.then ( response => {
				yandex = ( function ( params, pin ) {
					console.log ( response );
					return {
						getVar ( varName, pincode ) {
							return pin === pincode ?
								params [ varName ] :
								'No access'
						}
					}
				} ) ( response, '789541' );
			} )
	} )
	.catch ( error => {
		console.log ( error )
	} );

console.log ( yandex.getVar ( "created_at" ) );       // No access
console.log ( yandex.getVar ( "created_at", "789541" ) );   // Google