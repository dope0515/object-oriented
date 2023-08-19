/*
  객체지향이 필요한 이유
  비슷비슷한 코드들을 하나로 패키징해서 재사용하기 위함

  constructor(생성자함수), prototype(프로토타입)을 활용한 JS에서의 객체지향 프로그래밍

  생성자함수 (객체를 생성하기 위한 특별한 함수)
  - 어떤 반복적인 대량의 결과물을 뽑아내기 위한 시스템적인 틀 (붕어빵틀)

  인스턴스, 객체 (생성자함수를 복사한 특별한 객체)
  - 생성자를 통해서 복사된 객체 결과물 (붕어빵틀을 통해서  뽑아낸  각각의 붕어빵)

  프로토타입
  - 생성자함수 생성시 자동으로 만들어지는 공통의 저장공간
  - 동일한 생성자를 통해서 복사가된 인스턴스들을 같은 프로토타입 공간을 공유
  - 보통 자주쓰는 공통의 함수들을 프로토타입에 등록하면 각각의 인스턴들이  해당 함수를 공유해서 호출 (메서드)

  객체지향으로 코드를 개발하지 않았을때의 불편함점
  1. 불필요한 전역변수가 많아져서 서로 다른 스크립트 작업물에 영향을 미침 (전역변수의 오염)
  2. 비슷한 성격의 함수들을 하나로 카테고리화해서 패키징하지 못하기 때문에 관리가 어려움
*/

//위의 코드처럼 객체지향으로 코드를 구조화시키지 않으면
//함수를 호출할때마다 불필요한 전역변수가 많아짐
//비슷한 성격의 함수들끼리 그룹화 불가능

//ES5에서의 객체지향 코드 변경순서
//1.생성자함수 이름은 무조건 대문자 시작
//2.생성자함수로 전달된 인수값을 생성자내부에서 this객체에 옮겨담음
//불필요한 전역변수를 생성하지 않으면서 인스턴스라는 객체에 정보값을 옮겨담는 작업
//3.생성자안쪽의 prototype에 재활용될 함수 등록
//4.생성자함수를 new 연산자로 호출하면 prototype 메서드를 호출할 수 있는인스턴스 객체 생성
//생성자안쪽에서 this객체 --> 생성자를 통해서 앞으로 복사가될 인스턴스 지칭

function FontStyle(el, size, color) {
	this.el = document.querySelector(el);
	this.changeSize(size);
	this.changeColor(color);
}
FontStyle.prototype.changeSize = function (size) {
	this.el.style.fontSize = size;
};
FontStyle.prototype.changeColor = function (color) {
	this.el.style.color = color;
};

new FontStyle('#title1', '100px', 'hotpink');
const copy2 = new FontStyle('#title2', '50px', 'aqua');
console.log(copy2);
copy2.el = 'abc';
console.log(copy2);

//기존 es5에서의 단점
//1. 일반함수와 생성자함수의 구분이 안됨
//2. prototype에 일일이 메서드를 담는게 번거로움, 메서드 관리가 불편
//3. 인스턴스객체에 캡슐화 및 은닉화 안됨 (객체에 의도치않은 변형이 일어날수 있음)
