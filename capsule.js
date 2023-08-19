class Student {
	//일일 변경할 필요가 없는 공통의 값은 클래스에 등록해서 공통으로 인스턴스 전달 가능 (public)
	static unchangable = 'static';
	subject = 'Javascript';
	#password = 1234; //private 인스턴스에 접근 불가하게 해서 수정 불가
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	//프로퍼티 접근자 : 생성자함수가 프로퍼티를 읽을때 실행되는 함수
	get gender() {
		return this.value;
	}
	//생성자함수에 해당 프로퍼티에 value값을 담으려고 할때 실행되는 함수
	set gender(value) {
		this.value = value === 'male' || value === 'female' ? value : 'not selected';
	}
}

//생성자 호출시 의도치않은 값이 들어오는 것을 막을 수 있음
//프로퍼티 접근자로 getter, setter를 구현한 property는 외부에서 해당 인스턴스 값을 의도치 않은 값으로 변경 불가처리
const student1 = new Student('David', 20, 'alien');
const student2 = new Student('Emily', 30, 'female');
student1.gender = 'puppy';
console.log(student1);
console.log(student2);
console.log(Student.unchangable);
