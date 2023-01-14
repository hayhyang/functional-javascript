// 평가
// - 코드가 계산되어 값을 만드는 것

// 일급
// - 값으로 다룰 수 있다.
// - 변수에 담을 수 있다.
// - 함수의 인자로 사용할 수 있다.
// - 함수의 결과로 사용할 수 있다.

const a = 10;
const add4 = (a) => a + 4;
const r = add4(a);
console.log(r);

// 일급 함수
// - 함수를 값으로 다룰 수 있다.
// - 조합성과 추상화의 도구
const add5 = (a) => a + 5;
console.log(add5);
console.log(add5(5));

const f1 = () => () => 1;
console.log(f1());

// 함수를 만들어 리턴하는 함수(클로저를 만들어 리턴하는 함수)
// addMaker
// 클로저: 리턴되는 함수가 a를 계속 기억하고 있다.
// (b) => a + b >> 함수이자 a를 기억하는 클로저
const addMaker = (a) => (b) => a + b;
const add10 = addMaker(10);
console.log(add10(5));
