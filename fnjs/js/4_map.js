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
