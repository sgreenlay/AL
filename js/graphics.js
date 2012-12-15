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
	};
	this.draw_grid = function draw_grid(x, y, w, h, size, on_colour, off_colour) {
		this.draw_rectangle(x, y, w, h, off_colour);
		for (var x = 0; x < w; x += size) {
			for (var y = 0; y < w; y += size) {
				if (y % (2 * size) == 0 && x % (2 * size) == 0) {
					this.draw_rectangle(x, y, size, size, on_colour);
				}
				if (y % (2 * size) != 0 && x % (2 * size) != 0) {
					this.draw_rectangle(x, y, size, size, on_colour);
				}
			}
		}
	};
}