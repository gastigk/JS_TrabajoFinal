// utilizamos la librería Typed para crear un string en movimiento
const typed = new Typed('.typed', {
	strings: [
		'<i class="palabra">Democratizar el conocimiento</i>',
		'<i class="palabra">Llegar lejos</i>',
		'<i class="palabra">Brindar un servicio de calidad</i>',
	],

	typeSpeed: 40,
	startDelay: 0,
	backSpeed: 0,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	smartBackspace: false,
	loopCount: false,
	showCursor: true,
	cursorChar: '_',
	contentType: 'html',
});