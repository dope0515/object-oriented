class FontStyle {
	constructor(el, size, color) {
		this.el = document.querySelector(el);
		this.changeSize(size);
		this.changeColor(color);
	}
	changeSize(size) {
		this.el.style.fontSize = size;
	}
	changeColor(color) {
		this.el.style.color = color;
	}
}

new FontStyle('#title1', '100px', 'hotpink');
const copy2 = new FontStyle('#title2', '50px', 'aqua');
console.log(copy2);
copy2.el = 'abc';
console.log(copy2);
