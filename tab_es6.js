const defOpt = Symbol('a');
const abc = Symbol('b');
//심볼은 Symbol객체를 생성하면서 그 안에 고유문자값 등록
//동일 호출하더라도 해당 값을 계속 바뀌게 되므로 전역변수처럼 Symbol로 만들어진 값이 서로 영향을 미치지 않음
//해당 사용하고 있는 프로세스 종료가 되면 자동적으로 메모리에서 삭제됨
//객체에 캡슐화시키고 싶은 property명을 심볼값으로 변수 치환해서 사용해서 심볼로 등록한 property의 값은 식별불가하므로 수정 불가

console.log(defOpt === abc);

//심볼로 만들어진 값을 객체의 property명으로 치환하면
//클래스나 객체 안에서 해당 프로퍼티에 접근할 수 있는 식별자가 없으므로 데이터변경이 불가능
class Tab {
	[defOpt] = { frame: '#tab1', btns: 'ul li', boxs: 'section article' };

	constructor(opt) {
		const resultOpt = { ...this[defOpt], ...opt };
		this.tab = document.querySelector(resultOpt.frame);
		this.btns = this.tab.querySelectorAll(resultOpt.btns);
		this.boxs = this.tab.querySelectorAll(resultOpt.boxs);
		this.bindingEvent();
	}

	bindingEvent() {
		this.btns.forEach((btn, idx) => {
			btn.addEventListener('click', () => [this.btns, this.boxs].forEach((el) => this.activation(el, idx)));
		});
	}

	activation(arr, idx) {
		arr.forEach((el) => el.classList.remove('on'));
		arr[idx].classList.add('on');
	}
}
console.log(Tab);
const tab1 = new Tab();
console.log(tab1);
