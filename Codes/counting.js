var container = document.getElementById("array");
function generatearray() {
  for (var i = 0; i < 50; i++) {
    var num = Math.ceil(Math.random() * 40);
    var elements = document.createElement("div");
    elements.classList.add("bar");
    elements.style.height = `${num * 13}px`;
    elements.style.transform = `translate(${i * 30}px)`;
    var elements_label = document.createElement("label");
    elements_label.classList.add("bar_id");
    elements_label.innerText = num;
    elements.appendChild(elements_label);
    container.appendChild(elements);
  }
}
var count_container = document.getElementById("count");
function frequency() {
  for (var i = 0; i < 50; i++) {
    var elements2 = document.createElement("div");
    elements2.classList.add("bar2");
    elements2.style.height = `${20}px`;
    elements2.style.transform = `translate(${i * 30}px)`;
    var elements_idx = document.createElement("label");
    elements_idx.classList.add("bar_id2");
    elements_idx.innerText = i + 1;
    var elements_label2 = document.createElement("label");
    elements_label2.classList.add("bar_id3");
    elements_label2.innerText = 0;
    elements2.appendChild(elements_label2);
    elements2.appendChild(elements_idx);
    count_container.appendChild(elements2);
  }
}
async function CountingSort(delay = 200) {
  var bars = document.querySelectorAll(".bar");
  for (var i = 0; i < bars.length; i += 1) {
    bars[i].style.backgroundColor = "#FF4949";
    var num = Number(bars[i].childNodes[0].innerHTML);
    var freq_array = document.getElementsByClassName("bar_id3");
    freq_array[num - 1].innerText++;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    bars[i].style.backgroundColor = "#6b5b95";
  }
  var idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    var freq = document.getElementsByClassName("bar_id3");
    var temp = Number(freq[i].innerText);
    var freq_bar = document.getElementsByClassName("bar2");
    freq_bar[i].style.backgroundColor = "#FF4949";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    if (temp == 0) {
      freq_bar[i].style.backgroundColor = "darkgray";
      continue;
    }
    var bar_label = document.getElementsByClassName("bar_id");
    for (var j = 0; j < temp; j++) {
      bars[idx].style.height = `${(i + 1) * 13}px`;
      bar_label[idx].innerText = i + 1;
      idx++;
    }
    freq_bar[i].style.backgroundColor = "darkgray";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
}
generatearray();
frequency();
CountingSort();
