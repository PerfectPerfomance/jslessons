'use strict'

import promise from './promise.js'
import { Slide, PictureSlider } from './PictureSlider.js';
import css from '../css/main.css';

promise.then ( response =>
	document.querySelector ( '.sampleClass' )
		.innerText += response
)

document.body.appendChild (
	document.createElement ( 'span' )
).className = 'git-bush'

document.body.appendChild (
	document.createElement ( 'span' )
).className = 'git'

customElements.define (
	'picture-slider',
	PictureSlider
)
var slider = document.body.appendChild (
	document.createElement ( 'picture-slider' )
)

slider.src = [
	"https://www.sunhome.ru/i/cards/113/otkritki-valentine-s-day-kartinki.orig.jpg",
	"http://img.over-blog-kiwi.com/0/98/03/83/20160127/ob_d8f5c9_12163786387fxcdr3.jpg",
	"http://www.tematy.info/library/c/cute-cartoon-flowers-with-faces/cute-cartoon-flowers-with-faces-19.jpg",
	"http://papers.co/wallpaper/papers.co-nx17-sunset-river-lake-beautiful-nature-28-wallpaper.jpg"
]