function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const fs = require("fs");
let k;
for (k = 0; k < 49; k++) {
  let a = getRandomInt(100000);
  console.log(a);
  fs.appendFile("File1.txt", a.toString() + "\n", (err) => {
    if (err) throw err;
  });
}
let a = getRandomInt(100000);
fs.appendFile("File1.txt", a.toString(), (err) => {
  if (err) throw err;
});

const { readFileSync, promises: fsPromises } = require("fs");

function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  let k;
  for (k = 0; k < n; k++){ 
    let a = arr[k];
  // fs.appendFile("File1.txt", a.toString() + "\n", (err) => {
  //   if (err) throw err;
  // });
  }
}

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  console.log(arr);
  // fs.truncate("File1.txt", 0, (err) => {
  //   if (err) throw err;
  // });
  insertionSort(arr, 50);
}
syncReadFile("File1.txt");