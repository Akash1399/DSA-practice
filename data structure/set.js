const set = new Set([1, 2, 3, 2]);
set.add(4);
console.log(set.has(3));
set.delete(2)
// set.clear()
console.log("set size", set.size);
console.log([...set]);
for (const item of set) {
  console.log(item);
}
