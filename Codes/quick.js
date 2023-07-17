var startTime = new Date().getTime();
var container = document.getElementById("array");
function generatearray() {
  for (var i = 0; i < 50; i++) {
    var num = Math.ceil(Math.random() * 1000);

    var elements = document.createElement("div");

    elements.classList.add("block");

    elements.style.height = `${num / 2.3}px`;
    elements.style.transform = `translate(${i * 30}px)`;

    var elements_label = document.createElement("label");
    elements_label.classList.add("block_id");
    elements_label.innerText = num;

    elements.appendChild(elements_label);
    container.appendChild(elements);
  }
}

var count_container = document.getElementById("count");
function generate_idx() {
  for (var i = 0; i < 50; i++) {
    var elements2 = document.createElement("div");

    elements2.classList.add("block2");

    elements2.style.height = `${20}px`;
    elements2.style.transform = `translate(${i * 30}px)`;

    var elements_label2 = document.createElement("label");
    elements_label2.classList.add("block_id3");
    elements_label2.innerText = i;

    elements2.appendChild(elements_label2);
    count_container.appendChild(elements2);
  }
}

async function quick(l, r, delay = 100) {
  var bars = document.querySelectorAll(".block");

  var pivot = Number(bars[r].childNodes[0].innerHTML);
  var i = l - 1;
  bars[r].style.backgroundColor = "red";
  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;

  for (var j = l; j <= r - 1; j++) {
    bars[j].style.backgroundColor = "yellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var num = Number(bars[j].childNodes[0].innerHTML);

    if (num < pivot) {
      i++;
      var var1 = bars[i].style.height;
      var var2 = bars[i].childNodes[0].innerText;
      bars[i].style.height = bars[j].style.height;
      bars[j].style.height = var1;
      bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      bars[j].childNodes[0].innerText = var2;
      bars[i].style.backgroundColor = "orange";
      if (i != j) bars[j].style.backgroundColor = "pink";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    } else bars[j].style.backgroundColor = "pink";
  }
  i++;
  var var1 = bars[i].style.height;
  var var2 = bars[i].childNodes[0].innerText;
  bars[i].style.height = bars[r].style.height;
  bars[r].style.height = var1;
  bars[i].childNodes[0].innerText = bars[r].childNodes[0].innerText;
  bars[r].childNodes[0].innerText = var2;
  bars[r].style.backgroundColor = "pink";
  bars[i].style.backgroundColor = "green";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
  document.getElementsByClassName("range")[0].innerText = "";
  for (var k = 0; k < 50; k++) bars[k].style.backgroundColor = "#6b5b95";
  return i;
}

async function QuickSort(l, r, delay = 100) {
  if (l < r) {
    var indices = await quick(l, r);
    await QuickSort(l, indices - 1);
    await QuickSort(indices + 1, r);
  }
}
generatearray();
generate_idx();
QuickSort(0, 49);
