/*
 * LD25
 * Scott Greenlay
 * engine.js
 */

function GameCore(context, gameContent) {
	this.context = context;
	this.gameContent = gameContent;
	this.desired_fps = 60;
	this.total_elapsed = 0;
	this.current_fps = 0;
	this.fps_counter = 0;
	this.render_fps = function render_fps() {
		this.context.lineWidth = 1;
		this.context.fillStyle = "rgba(255, 255, 255, 1.0)";
		this.context.font = "18px sans-serif";
		this.context.fillText(this.current_fps.toString() + " fps", 4, 20);
	}
	this.render = function render() {
		this.context.fillStyle = "rgba(255, 0, 0, 1.0)";
		this.context.fillRect(0, 0, 800, 600);
		if (this.gameContent) {
			this.gameContent.render();
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
			this.gameContent.logic(elapsed);
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
		this.last_update = (new Date).getTime();
		this.interval = setInterval(function () {
			self.update();
		}, 1000 / this.desired_fps);
	};
	this.stop = function stop() {
		window.clearInterval(this.interval);
	};
};
