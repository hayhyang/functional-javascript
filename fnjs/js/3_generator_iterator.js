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

// odds

function* infinity(i = 0) {
  while (true) yield i++;
}

function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}
function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}

const iter2 = odds(10);
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());
// console.log(iter2.next());

const iter3 = infinity();
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());
// console.log(iter3.next());

const iter4 = limit(4, [1, 2, 3, 4, 5, 6]);
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());
// console.log(iter4.next());

for (const a of odds(40)) console.log(a);

// for of, 전개 연산자, 구조 분홰, 나머지 연산자
console.log(odds(10));
console.log([...odds(10), ...odds(20)]);
const [head, ...tail] = odds(30);
console.log(head);
console.log(tail);
const [a, b, ...rest] = odds(20);
console.log(a);
console.log(b);
console.log(rest);
