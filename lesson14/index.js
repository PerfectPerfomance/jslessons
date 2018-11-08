class SampleCustomElement extends HTMLElement {
	constructor () {
		super ();
		let wrapper = document.createElement ( 'div' );
		wrapper.className = "wrapper";
		this.canvas = document.createElement ( 'canvas' );
		wrapper.appendChild ( this.canvas );
		this.resizeCanvas ();
		this.area = this.canvas.getContext ( "2d" );
		this.shadow = this.attachShadow ( { mode: 'open' } );
		let style = document.createElement ( 'style' );
		style.textContent = `
            .wrapper {
                background-color: #ddddee;
            }
            canvas {
                border: dotted 1px #555;
            }
        `;
		this.shadow.appendChild ( style );
		this.shadow.appendChild ( wrapper );
	}
	resizeCanvas ( event ) {
		this.canvas.width = window.innerWidth - 20;
		this.canvas.height = window.innerHeight - 20;
	}
	drawLine ( first, second, border ) {
		this.area.strokeStyle = border && border.lineColor ?
			border.lineColor : "#0000ff";
		this.area.lineWidth = border && border.lineWidth ?
			border.lineWidth : 3;
		this.area.beginPath();
		this.area.moveTo( first.x, first.y );
		this.area.lineTo( second.x, second.y );
		this.area.stroke()
	}
}

customElements.define (
	'sample-custom-element',
	SampleCustomElement
);

let elem = document.createElement ( 'sample-custom-element' );
document.body.appendChild ( elem );

window.onresize = elem.resizeCanvas.bind ( elem );

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

setInterval(function (  ) {
	let x1 = Math.round(Math.random()*1000);
	let x2 = Math.round(Math.random()*1000);
	let y1 = Math.round(Math.random()*1000);
	let y2 = Math.round(Math.random()*1000);
	elem.drawLine(
		{ x:x1, y:y1 },
		{ x:x2, y:y2 },
		{ lineColor: getRandomColor(), lineWidth: 5 }
	);
}, 1);
