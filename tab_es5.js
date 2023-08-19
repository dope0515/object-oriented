//화살표함수 내부에서는 this객체가 생성되지 않음
//화살표함수 내부에서 this객체를 호출하면 상위 스코프에있는 this객체값을 가져옴

//function는 호출하는 위치에 따라서 다른 값으로 this객체가 생성
//이벤트핸들러 등록된 function : this --> 이벤트 발생한 대상
//function문 안쪽의 this값을 .bind()로 원하는 값으로 강제 고정

function Tab(opt) {
	const defOpt = { frame: '#tab1', btns: 'ul li', boxs: 'section article' };
	const resultOpt = Object.assign({}, defOpt, opt);
	this.tab = document.querySelector(resultOpt.frame);
	this.btns = this.tab.querySelectorAll(resultOpt.btns);
	this.boxs = this.tab.querySelectorAll(resultOpt.boxs);
	console.log('생성자', this);

	this.btns.forEach(
		function (btn, idx) {
			console.log('forEach', this);

			btn.addEventListener(
				'click',
				function () {
					console.log('event', this);
					[this.btns, this.boxs].forEach(
						function (el) {
							console.log('중첩반복문', this);
							console.log(this);
							this.activation(el, idx);
						}.bind(this)
					); //이벤트문에서 고정한 인스턴스 객체값으로 다시 내부 forEach안쪽의 this값 고정
				}.bind(this)
			); //forEach안쪽에서 bind로 변경한 인스턴스값을 다시 이벤트function문 밖에서 내부this값 고정
		}.bind(this)
	); //forEach안쪽의 this를 상위 스코프에 있는 인스턴스 this객체값으로 강제 고정
}

Tab.prototype.activation = function (arr, idx) {
	arr.forEach(function (el) {
		el.classList.remove('on');
	});
	arr[idx].classList.add('on');
};

//new Tab({ frame: '#tab1', btns: 'ul li', boxs: 'section article' });
new Tab({ frame: '#tab1' });
