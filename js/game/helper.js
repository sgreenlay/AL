/*
 * LD25
 * Scott Greenlay
 * helper.js
 */

function xy_hash(x, y) {
	return x.toString() + ',' + y.toString();
};

function generate_graph(level, x, y, is_valid_neighbour) {
	var graph = new Object();
	var find_neighbours = function find_neighbours(x, y) {
		graph[xy_hash(x, y)] = {
			point : {
				x : x,
				y : y
			},
			neighbours : new Array()
		};
		for (var i = 0; i < 4; i++) {
			var x_n = x;
			var y_n = y;
			switch (i) {
				case 0: // l
					x_n = x - 1;
					break;
				case 1: // u
					y_n = y - 1;
					break;
				case 2: // r
					x_n = x + 1
					break;
				case 3: // d
					y_n = y + 1;
					break;
			}
			if (level.is_valid_coordinates(x_n, y_n) && is_valid_neighbour(level, x_n, y_n)) {
				graph[xy_hash(x, y)].neighbours.push(xy_hash(x_n, y_n));
				if (typeof graph[xy_hash(x_n, y_n)] == 'undefined') {
					find_neighbours(x_n, y_n);
				}
			}
		}
	}
	find_neighbours(x, y);
	return graph;
};

function find_path(level, x_i, y_i, x_d, y_d) {
	return find_path_to_goal(level, x_i, y_i, function (x, y) {
		return (x == x_d && y == y_d);
	});
};

function find_path_to_goal(level, x_i, y_i, goal) {
	var graph = generate_graph(level, x_i, y_i, function (level, x, y) {
		return level.is_walkable(level.layout[y][x]);
	});
		
	var distances = new Object();
	var Q = new Object();
		
	for (v in graph) {
		distances[v] = Infinity;
		Q[v] = true;
	}
		
	var previous = new Object();
	distances[xy_hash(x_i, y_i)] = 0;
		
	while (Object.keys(Q).length > 0) {
		var u = null
		for (v in Q) {
			if (u == null || distances[u] > distances[v]) {
				u = v;
			}
		}
			
		var position_u = graph[u].point;
		if (goal(position_u.x, position_u.y)) {
			var path = new Array();
			path.push(position_u);
			while (typeof previous[u] != 'undefined') {
				path.unshift(graph[previous[u]].point);
				u = previous[u];
			}
			return path;
		}
			
		delete Q[u];
		if (distances[u] == Infinity) {
			break;
		}
		for (var i = 0; i < graph[u].neighbours.length; i++) {
			var v = graph[u].neighbours[i];
			var alt = distances[u] + 1;
			if (alt < distances[v]) {
				distances[v] = alt;
				previous[v] = u;
			}
		}
	}
	return null;
};

function generate_array(w, h, value) {
	var array = new Array();
	for (var y = 0; y < h; y++) {
		var row = new Array();
		for (var x = 0; x < w; x++) {
			row.push(value);
		}
		array.push(row);
	}
	return array;
}
