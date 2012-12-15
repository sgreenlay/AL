/*
 * LD25
 * Scott Gr11nlay
 * sprite.js
 */

function LD25Sprites() {
	this.sheet = new Image();
	this.sheet.src = 'img/sprites.png';
	this.sprites = {};
	this['wtf'] = {
		sx : 60,
		sy : 160,
		sw : 20,
		sh : 20
	};
	this['solar'] = {
		sx : 100,
		sy : 160,
		sw : 20,
		sh : 20
	};
	this['nnnn'] = {
		sx : 0,
		sy : 0,
		sw : 20,
		sh : 20
	};
	this['yyyy'] = {
		sx : 20,
		sy : 0,
		sw : 20,
		sh : 20
	};
	this['floor'] = {
		sx : 40,
		sy : 160,
		sw : 20,
		sh : 20
	};
	this['close-door-nyny'] = {
		sx : 40,
		sy : 0,
		sw : 20,
		sh : 20
	};
	this['close-door-ynyn'] = {
		sx : 60,
		sy : 0,
		sw : 20,
		sh : 20
	};
	this['open-door-nyny'] = {
		sx : 80,
		sy : 0,
		sw : 20,
		sh : 20
	};
	this['open-door-ynyn'] = {
		sx : 100,
		sy : 0,
		sw : 20,
		sh : 20
	};
	this['ynnn'] = {
		sx : 0,
		sy : 20,
		sw : 20,
		sh : 20
	};
	this['nynn'] = {
		sx : 20,
		sy : 20,
		sw : 20,
		sh : 20
	};
	this['nnyn'] = {
		sx : 40,
		sy : 20,
		sw : 20,
		sh : 20
	};
	this['nnny'] = {
		sx : 60,
		sy : 20,
		sw : 20,
		sh : 20
	};
	this['yynn'] = {
		sx : 0,
		sy : 40,
		sw : 20,
		sh : 20
	};
	this['nyyn'] = {
		sx : 20,
		sy : 40,
		sw : 20,
		sh : 20
	};
	this['nnyy'] = {
		sx : 40,
		sy : 40,
		sw : 20,
		sh : 20
	};
	this['ynny'] = {
		sx : 60,
		sy : 40,
		sw : 20,
		sh : 20
	};
	this['ynyn'] = {
		sx : 80,
		sy : 40,
		sw : 20,
		sh : 20
	};
	this['nyny'] = {
		sx : 100,
		sy : 40,
		sw : 20,
		sh : 20
	};
	this['yyny'] = {
		sx : 0,
		sy : 60,
		sw : 20,
		sh : 20
	};
	this['yyyn'] = {
		sx : 20,
		sy : 60,
		sw : 20,
		sh : 20
	};
	this['nyyy'] = {
		sx : 40,
		sy : 60,
		sw : 20,
		sh : 20
	};
	this['ynyy'] = {
		sx : 60,
		sy : 60,
		sw : 20,
		sh : 20
	};
	this['11nn'] = {
		sx : 0,
		sy : 80,
		sw : 20,
		sh : 20
	};
	this['n11n'] = {
		sx : 20,
		sy : 80,
		sw : 20,
		sh : 20
	};
	this['nn11'] = {
		sx : 40,
		sy : 80,
		sw : 20,
		sh : 20
	};
	this['1nn1'] = {
		sx : 60,
		sy : 80,
		sw : 20,
		sh : 20
	};
	this['21n1'] = {
		sx : 0,
		sy : 100,
		sw : 20,
		sh : 20
	};
	this['121n'] = {
		sx : 20,
		sy : 100,
		sw : 20,
		sh : 20
	};
	this['n121'] = {
		sx : 40,
		sy : 100,
		sw : 20,
		sh : 20
	};
	this['1n12'] = {
		sx : 60,
		sy : 100,
		sw : 20,
		sh : 20
	};
	this['1yn1'] = {
		sx : 80,
		sy : 60,
		sw : 20,
		sh : 20
	};
	this['11yn'] = {
		sx : 100,
		sy : 60,
		sw : 20,
		sh : 20
	};
	this['n11y'] = {
		sx : 80,
		sy : 80,
		sw : 20,
		sh : 20
	};
	this['yn11'] = {
		sx : 100,
		sy : 80,
		sw : 20,
		sh : 20
	};
	this['11ny'] = {
		sx : 80,
		sy : 100,
		sw : 20,
		sh : 20
	};
	this['y11n'] = {
		sx : 100,
		sy : 100,
		sw : 20,
		sh : 20
	};
	this['ny11'] = {
		sx : 80,
		sy : 120,
		sw : 20,
		sh : 20
	};
	this['1ny1'] = {
		sx : 100,
		sy : 120,
		sw : 20,
		sh : 20
	};
	this['1122'] = {
		sx : 0,
		sy : 120,
		sw : 20,
		sh : 20
	};
	this['2112'] = {
		sx : 20,
		sy : 120,
		sw : 20,
		sh : 20
	};
	this['2211'] = {
		sx : 40,
		sy : 120,
		sw : 20,
		sh : 20
	};
	this['1221'] = {
		sx : 60,
		sy : 120,
		sw : 20,
		sh : 20
	};
	this['11yy'] = {
		sx : 0,
		sy : 140,
		sw : 20,
		sh : 20
	};
	this['y11y'] = {
		sx : 20,
		sy : 140,
		sw : 20,
		sh : 20
	};
	this['yy11'] = {
		sx : 40,
		sy : 140,
		sw : 20,
		sh : 20
	};
	this['1yy1'] = {
		sx : 60,
		sy : 140,
		sw : 20,
		sh : 20
	};
	this['2222'] = {
		sx : 80,
		sy : 160,
		sw : 20,
		sh : 20
	};
	this['person-live'] = {
		sx : 1,
		sy : 161,
		sw : 19,
		sh : 19
	};
	this['person-dead'] = {
		sx : 21,
		sy : 161,
		sw : 19,
		sh : 19
	};
}
