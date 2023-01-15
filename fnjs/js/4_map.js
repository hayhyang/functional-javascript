const products = [
  { name: "tv", price: 1000 },
  { name: "radio", price: 6000 },
  { name: "desk", price: 2000 },
  { name: "paper", price: 3000 },
  { name: "plant", price: 9000 },
  { name: "chair", price: 7000 },
  { name: "bed", price: 10000 },
];

const map = (f, iter) => {
  let result = [];
  for (const a of iter) {
    result.push(f(a));
  }
  return result;
};

const names = map((item) => item.name, products);
console.log(names);

const prices = map((item) => item.price, products);
console.log(prices);

const dom = document.querySelectorAll("*");
console.log(map((e) => e, dom));
console.log(map((e) => e.nodeName, dom));

function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}

console.log(map((a) => a * a, gen()));

const m = new Map();
m.set("a", 10);
m.set("b", 9);
m.set("c", 8);
const mIter = m[Symbol.iterator]();
console.log(mIter.next());
console.log(new Map(map(([k, v]) => [k, v * 2], m)));
