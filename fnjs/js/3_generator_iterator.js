// 제너레이터/이터레이터
// 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

// 제너레이터를 실행한 결과는 이터레이터이다.
const iter = gen();
for (const a of iter) console.log(a);
