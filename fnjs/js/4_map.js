const log = console.log;

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

const filter = (f, iter) => {
  let result = [];
  for (const a of iter) {
    if (f(a)) result.push(a);
  }
  return result;
};

log(filter((a) => a.price < 5000, products));

const names = map((item) => item.name, products);
log(names);

const prices = map((item) => item.price, products);
log(prices);

const dom = document.querySelectorAll("*");
log(map((e) => e, dom));
log(map((e) => e.nodeName, dom));

function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}

log(map((a) => a * a, gen()));

const m = new Map();
m.set("a", 10);
m.set("b", 9);
m.set("c", 8);
const mIter = m[Symbol.iterator]();
log(mIter.next());
log(new Map(map(([k, v]) => [k, v * 2], m)));

const nums = [1, 2, 3, 4, 5];
let total = 0;
for (const n of nums) {
  total = total + n;
}

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  let acc = 0;
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
const add = (a, b) => a + b;
log(reduce(add, 0, [1, 2, 3, 4, 5]));

log(total);
