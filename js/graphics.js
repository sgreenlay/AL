/*
 * LD25
 * Scott Greenlay
 * engine.js
 */

function GraphicsCore(context) {
	this.context = context;
	this.draw_rectangle = function draw_rectangle(x, y, w, h, colour) {
		this.context.fillStyle = colour;
		this.context.fillRect(x, y, w, h);
	}
}