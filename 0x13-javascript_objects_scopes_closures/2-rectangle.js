#!/usr/bin/node
class Rectangle {
	constructor (w, h) {
		if (((w = parseInt(w)) > 0) && ((h = parseInt(h)) > 0)) {
			this.windth = w;
			this.height = h;
		}
	}
}
module.exports = Rectangle;
