/*
 * LD25
 * Scott Greenlay
 * engine.js
 */

function GraphicsCore(context) {
	this.context = context;
	this.load_sprites = function load_sprites(spritemap) {
		this.sprites = spritemap;
	};
	this.clear = function clear() {
		this.context.clearRect(0, 0, 800, 600);
	};
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
	this.draw_sprite = function draw_sprite(name, x, y, width, height) {
		var sprite;
		if (typeof this.sprites[name] != 'undefined') {
			sprite = this.sprites[name];
		}
		else {
			sprite = this.sprites['wtf'];
		}
		this.context.drawImage(this.sprites.sheet, sprite.sx, sprite.sy, sprite.sw, sprite.sh, x, y, width, height);
	}
	this.draw_text = function draw_text(x, y, text, size, colour) {
		this.context.lineWidth = 1;
		this.context.fillStyle = colour;
		this.context.font = size.toString() + "px Strait";
		this.context.fillText(text, x, y);
	}
	this.draw_speech_bubble = function draw_speech_bubble(x, y, text, size, on_colour, off_colour, padding) {
		this.context.lineWidth = 1;
		this.context.fillStyle = on_colour;
		this.context.textBaseline = 'bottom';
		this.context.font = size.toString() + "px Strait";
		var metrics = this.context.measureText(text);
		var width = metrics.width + 2 * padding + 4;
		var height = size + 2 * padding + 4;
		this.draw_rectangle(x - (width / 2), y - height, width, height, on_colour);
		if (padding > 0) {
			this.draw_rectangle(x - (width / 2) + padding, y - height + padding, width - 2 * padding, height - 2 * padding, off_colour);
		}
		this.context.fillStyle = on_colour;
		this.context.fillText(text, x - (width / 2) + padding + 2, y - height + padding + 2 + size);
	}
}