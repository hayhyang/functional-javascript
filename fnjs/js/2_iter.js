// 기존과 달라진 es6에서의 리스트 순회
// for i++
// for of

// const list = [1, 2, 3];
// for (var i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }

// const str = "abc";
// for (var i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (const a of list) {
//   console.log(a);
// }

// for (const a of str) {
//   console.log(a);
// }

// Array
console.log("Array ---------");
const array = [1, 2, 3];
let iter1 = array[Symbol.iterator]();
iter1.next();
for (const a of iter1) console.log(a);

console.log("Set ---------");
// Set
const set = new Set([1, 2, 3]);
for (const a of set) console.log(a);

console.log("Map ---------");
// Map
const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const mapIter = map1[Symbol.iterator]();
mapIter.next();
for (const a of mapIter) console.log(a);

// 이터러블/이터레이터 프로토콜
// - 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator()] 메서드를 가진 값
// - 이터레이터: {value, done} 객체를 리턴하는 next()메서드를 가진 값
// 이터러블/에터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함게 동작하도록한 규약

console.log("Iterable ---------");
// 사용자 정의 이터러블을 통해 알아보기
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const a of iterator) console.log(a);
