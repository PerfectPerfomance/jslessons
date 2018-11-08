const { exec } = require ( 'child_process' );
exec ( 'curl "https://www.google.com.ua/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" -o "google.png"' );

let buffer, sum;

let elem = document.body.appendChild (
	document.createElement ( 'input' )
);

elem.type = 'file';

elem.onchange = function ( event ) {
	const reader = new FileReader ();
	reader.readAsArrayBuffer ( this.files[ 0 ] );
	reader.onload = function ( event ) {
		buffer = new Uint8Array ( this.result );
		sum = ( function () {
			let res = 0;
			for ( var x of arguments ) {
				res += x
			}
			return res
		} ) ( ...buffer );
		console.log ( sum )
	}
};