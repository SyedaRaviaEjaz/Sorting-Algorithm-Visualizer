// insertion sort
const container = document.querySelector(".data-container");
function generatebars(num = 100) {
  for (let i = 0; i < num; i += 1) {
    const value = Math.ceil(Math.random() * 1000) + 1;

    const bar = document.createElement("div");

    bar.classList.add("bar");

    bar.style.height = `${value / 2}px`;
    bar.style.transform = `translateX(${i * 30}px)`;

    const barLabel = document.createElement("label");

    barLabel.classList.add("bar__id");

    barLabel.innerHTML = value;

    bar.appendChild(barLabel);

    container.appendChild(bar);
  }
}
async function InsertionSort(delay = 300) {
  var startTime = new Date().getTime();
  let bars = document.querySelectorAll(".bar");

  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;

    var key = parseInt(bars[i].childNodes[0].innerHTML);

    var height = bars[i].style.height;

    var barval = document.getElementById("ele");

    barval.innerHTML = `<h3>Element Selected is :${key}</h3>`;

    bars[i].style.backgroundColor = "darkblue";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";

      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;

      j = j - 1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      for (var k = i; k >= 0; k--) {
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }

    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  barval.innerHTML = "<h3>Sorted!!!</h3>";

  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";

  document.getElementById("Button2").disabled = false;
  document.getElementById("Button2").style.backgroundColor = "#6f459e";
  var endTime = new Date().getTime();
  window.alert("Press Ok to see the running Time in milliseconds");
  window.alert(endTime - startTime);
}

generatebars();
function generate() {
  window.location.reload();
}

function disable() {
  document.getElementById("Button1").disabled = true;
  document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

  document.getElementById("Button2").disabled = true;
  document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
// Partition function for quicksort
var count_container = document.getElementById("count");
function generate_idx() {
  for (var i = 0; i < 50; i++) {
    var array_ele2 = document.createElement("div");

    array_ele2.classList.add("block2");

    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 30}px)`;

    var array_ele_label2 = document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = i;

    array_ele2.appendChild(array_ele_label2);
    count_container.appendChild(array_ele2);
  }
}

async function quick(l, r, delay = 100) {
  var blocks = document.querySelectorAll(".block");

  var pivot = Number(blocks[r].childNodes[0].innerHTML);
  var i = l - 1;
  blocks[r].style.backgroundColor = "red";
  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;

  for (var j = l; j <= r - 1; j++) {
    blocks[j].style.backgroundColor = "yellow";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var value = Number(blocks[j].childNodes[0].innerHTML);

    if (value < pivot) {
      i++;
      var temp1 = blocks[i].style.height;
      var temp2 = blocks[i].childNodes[0].innerText;
      blocks[i].style.height = blocks[j].style.height;
      blocks[j].style.height = temp1;
      blocks[i].childNodes[0].innerText = blocks[j].childNodes[0].innerText;
      blocks[j].childNodes[0].innerText = temp2;
      blocks[i].style.backgroundColor = "orange";
      if (i != j) blocks[j].style.backgroundColor = "pink";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    } else blocks[j].style.backgroundColor = "pink";
  }
  i++;
  var temp1 = blocks[i].style.height;
  var temp2 = blocks[i].childNodes[0].innerText;
  blocks[i].style.height = blocks[r].style.height;
  blocks[r].style.height = temp1;
  blocks[i].childNodes[0].innerText = blocks[r].childNodes[0].innerText;
  blocks[r].childNodes[0].innerText = temp2;
  blocks[r].style.backgroundColor = "pink";
  blocks[i].style.backgroundColor = "green";

  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 3)
  );
  document.getElementsByClassName("range")[0].innerText = "";
  for (var k = 0; k < 50; k++) blocks[k].style.backgroundColor = "#6b5b95";
  return i;
}

async function QuickSort(l, r, delay = 100) {
  if (l < r) {
    var pivot_idx = await quick(l, r);
    await QuickSort(l, pivot_idx - 1);
    await QuickSort(pivot_idx + 1, r);
  }
}
// Hybrid function -> Quick + Insertion sort

async function hybrid_quick_sort(l, r, delay = 100) {
  if (l < r) {
    if (r - l + 1 < 10) {
      insertion_sort((delay = 100));
    }
  } else {
    var pivot_idx = await quick(l, r);
    if (pivot_idx - l < r - pivot_idx) {
      hybrid_quick_sort(r, l, (delay = 100));
      l = pivot_idx + 1;
    } else {
      hybrid_quick_sort(r, l, (delay = 100));
      r = pivot_idx - 1;
    }
  }
}
var startTime = new Date().getTime();
generatearray();
generate_idx();
hybrid_quick_sort(0, 49, (delay = 100));
var endTime = new Date().getTime();
window.alert("Press Ok to see the running Time in milliseconds");
window.alert(endTime - startTime);
