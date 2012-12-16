/*
 * LD25
 * Scott Greenlay
 * engine.js
 */

function GameCore(canvas_front, canvas_back, gameContent) {
	this.gameContent = gameContent;
	this.canvas = canvas_front;
	this.graphics = {
		front: new GraphicsCore(canvas_front.getContext('2d')),
		back: new GraphicsCore(canvas_back.getContext('2d'))
	};
	this.desired_fps = 60;
	this.total_elapsed = 0;
	this.current_fps = 0;
	this.fps_counter = 0;
	this.should_render_fps = false;
	this.mouse = {
		x : 0,
		y : 0,
		is_down: function is_down() {
			return (typeof this['down'] != 'undefined');
		}
	};
	this.keyboard = {
		is_key_down : function is_key_down(keyCode) {
			return (typeof this[keyCode] != 'undefined');
		}
	};
	this.render = function render() {
		if (this.gameContent) {
			this.gameContent.render(this);
		}
		if (this.should_render_fps) {
			this.graphics.front.draw_text(4, 20, this.current_fps.toString() + " fps", 22, "#FAE309");
		}
	};
	this.logic = function logic(elapsed) {
		if (this.keyboard.is_key_down(192)) {
			if (this.keyboard[192]) {
				this.should_render_fps = !this.should_render_fps;
				this.keyboard[192] = false;
			}
		}
		this.fps_counter++;
		this.total_elapsed += elapsed;
		if (this.total_elapsed > 1000) {
			this.total_elapsed -= 1000;
			this.current_fps = this.fps_counter;
			this.fps_counter = 0;
		}
		if (this.gameContent) {
			this.gameContent.logic(this, elapsed);
		}
	};
	this.is_updating = false;
	this.update = function update() {
		this.is_updating = true;
		var last_update = this.last_update;
		this.last_update = (new Date).getTime();
		this.logic((this.last_update - last_update));
		this.render();
		this.is_updating = false;
	};
	this.run = function run() {
		var self = this;
		if (this.gameContent) {
			this.gameContent.init(this);
		}
		this.canvas.onselectstart = function () {
			return false;
		}
		this.canvas.onmousemove = function(e) {
		    self.mouse.x = e.layerX;
		    self.mouse.y = e.layerY;
			e.cancelBubble = true;
		};
		this.canvas.onmousedown = function(e) {
		    self.mouse.x = e.layerX;
		    self.mouse.y = e.layerY;
			if (typeof self.mouse['down'] == 'undefined') {
				self.mouse['down'] = true;
			}
			e.cancelBubble = true;
		};
		this.canvas.onmouseup = function(e) {
		    self.mouse.x = e.layerX;
		    self.mouse.y = e.layerY;
			if (typeof self.mouse['down'] != 'undefined') {
				delete self.mouse['down'];
			}
			e.cancelBubble = true;
		};
		// keyboard workaround: capture document instead of canvas
		document.onkeydown = function(e) {
			if (typeof self.keyboard[e.keyCode] == 'undefined') {
				self.keyboard[e.keyCode] = true;
			}
			e.cancelBubble = true;
		};
		document.onkeyup = function(e) {
			if (typeof self.keyboard[e.keyCode] != 'undefined') {
				delete self.keyboard[e.keyCode];
			}
			e.cancelBubble = true;
		};
		this.last_update = (new Date).getTime();
		this.interval = setInterval(function () {
			if (!this.is_updating) {
				self.update();
			}
		}, 1000 / this.desired_fps);
	};
	this.stop = function stop() {
		window.clearInterval(this.interval);
	};
};
