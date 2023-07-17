function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
  }
  const fs = require("fs");
  let k;
  for (k = 0; k < 49; k++) {
    let a = getRandomInt(150);
    fs.appendFile("file.txt", a.toString() + "\n", (err) => {
      if (err) throw err;
    });
  }
  let a = getRandomInt(150);
  fs.appendFile("file.txt", a.toString(), (err) => {
    if (err) throw err;
  });
  fs.unlink('file.txt',(err) => {
    if(err) throw err;
    console.log('myText.txt was deleted');
});