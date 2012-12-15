/*
 * LD25
 * Scott Greenlay
 * sprite.js
 */

function LD25Sprites() {
	this.sheet = new Image();
	this.sheet.src = 'img/sprites.png';
	this.sprites = {};
	this['test'] = {
		img : this.sheet,
		sx : 0,
		sy : 0,
		sw : 20,
		sh : 20
	};
}
