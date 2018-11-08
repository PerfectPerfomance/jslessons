class CanvasElement extends HTMLElement {
	constructor () {
		super();
		var shadow = this.attachShadow ( { mode: 'open' } );
		var sample = document.querySelector ( "#sample" );
		shadow.appendChild ( sample.content )
	}
}
customElements.define ( 'canvas-element', CanvasElement );


