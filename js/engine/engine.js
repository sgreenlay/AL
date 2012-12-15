/*
 * LD25
 * Scott Greenlay
 * engine.js
 */

function GameCore(canvas, gameContent) {
	this.canvas = canvas;
	this.context = canvas.getContext('2d');
	this.gameContent = gameContent;
	this.graphics = new GraphicsCore(this.context);
	this.desired_fps = 60;
	this.total_elapsed = 0;
	this.current_fps = 0;
	this.fps_counter = 0;
	this.mouse = {
		x : 0,
		y : 0,
		is_down: false
	};
	this.keyboard = {
		is_key_down : function is_key_down(keyCode) {
			return (typeof this[keyCode] != 'undefined');
		}
	};
	this.render_fps = function render_fps() {
		this.context.lineWidth = 1;
		this.context.fillStyle = "rgba(0, 0, 0, 1.0)";
		this.context.font = "22px Strait";
		this.context.fillText(this.current_fps.toString() + " fps", 4, 20);
	}
	this.render = function render() {
		if (this.gameContent) {
			this.gameContent.render(this);
		}
		this.render_fps();
	};
	this.logic = function logic(elapsed) {
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
	this.update = function update() {
		var last_update = this.last_update;
		this.last_update = (new Date).getTime();
		this.logic((this.last_update - last_update));
		this.render();
	};
	this.run = function run() {
		var self = this;
		if (this.gameContent) {
			this.gameContent.init(this);
		}
		canvas.onselectstart = function () {
			return false;
		}
		canvas.onmousemove = function(e) {
		    self.mouse.x = e.layerX;
		    self.mouse.y = e.layerY;
			e.cancelBubble = true;
		};
		canvas.onmousedown = function(e) {
		    self.mouse.x = e.layerX;
		    self.mouse.y = e.layerY;
			self.mouse.is_down = true;
			e.cancelBubble = true;
		};
		canvas.onmouseup = function(e) {
		    self.mouse.x = e.layerX;
		    self.mouse.y = e.layerY;
			self.mouse.is_down = false;
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
			self.update();
		}, 1000 / this.desired_fps);
	};
	this.stop = function stop() {
		window.clearInterval(this.interval);
	};
};
