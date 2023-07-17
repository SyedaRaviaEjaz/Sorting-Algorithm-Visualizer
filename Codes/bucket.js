var container = document.getElementById("array");
function swap(array) {
  for (var a = array.length - 1; a > 0; a--) {
    var b = Math.floor(Math.random() * (a + 1));
    var c = array[a];
    array[a] = array[b];
    array[b] = c;
  }
}

function generatearray() {
  var array = [];
  for (var i = 0; i < 20; i++) {
    array.push(i + 1);
  }
  swap(array);
  for (var i = 0; i < 20; i++) {
    var num = array[i];
    var elements = document.createElement("div");
    elements.classList.add("block");
    elements.style.height = `${num * 13}px`;
    elements.style.transform = `translate(${i * 30}px)`;
    var elements_label = document.createElement("label");
    elements_label.classList.add("block_id");
    elements_label.innerText = num;
    elements.appendChild(elements_label);
    container.appendChild(elements);
  }
}

async function InsertionSort(clsnam, delay = 200) {
  let bars = document.getElementsByClassName(clsnam);
  bars[0].style.backgroundColor = "rgb(49, 226, 13)";

  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;

    var key = parseInt(bars[i].childNodes[0].innerHTML);

    var height = bars[i].style.height;

    bars[i].style.backgroundColor = "darkblue";

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 200)
    );

    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";

      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
      j = j - 1;

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
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
      }, delay)
    );

    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}

async function CountingSort(delay = 250) {
  var startTime = new Date().getTime();
  var bars = document.querySelectorAll(".block");

  var block1 = 0,
    block2 = 0,
    block3 = 0,
    block4 = 0;

  for (var i = 0; i < bars.length; i += 1) {
    bars[i].style.backgroundColor = "#FF4949";
    var num = Number(bars[i].childNodes[0].innerHTML);

    var element = document.createElement("div");

    element.style.height = `${num * 13}px`;

    var element_label = document.createElement("label");
    element_label.classList.add("block_id");
    element_label.innerText = num;

    element.appendChild(element_label);

    if (num >= 1 && num <= 5) {
      element.classList.add("firstbucket");
      var container = document.getElementById("one");
      element.style.transform = `translate(${block1 * 30}px)`;
      container.appendChild(element);
      block1++;
    }

    if (num >= 6 && num <= 10) {
      element.classList.add("secondbucket");
      var container = document.getElementById("two");
      element.style.transform = `translate(${block2 * 30}px)`;
      container.appendChild(element);
      block2++;
    }

    if (num >= 11 && num <= 15) {
      element.classList.add("thirdbucket");
      var container = document.getElementById("three");
      element.style.transform = `translate(${block3 * 30}px)`;
      container.appendChild(element);
      block3++;
    }

    if (num >= 16 && num <= 20) {
      element.classList.add("fourthbucket");
      var container = document.getElementById("four");
      element.style.transform = `translate(${block4 * 30}px)`;
      container.appendChild(element);
      block4++;
    }

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );

    bars[i].style.backgroundColor = "#6b5b95";
  }
  await InsertionSort("firstbucket");
  await InsertionSort("secondbucket");
  await InsertionSort("thirdbucket");
  await InsertionSort("fourthbucket");
  for (var i = 0; i < 4; i++) {
    var bucket_idx = 0;
    var block_idx;
    if (i == 0) block_idx = document.getElementsByClassName("firstbucket");
    if (i == 1) block_idx = document.getElementsByClassName("secondbucket");
    if (i == 2) block_idx = document.getElementsByClassName("thirdbucket");
    if (i == 3) block_idx = document.getElementsByClassName("fourthbucket");
    for (var j = i * 5; j < 5 * (i + 1); j++, bucket_idx++) {
      block_idx[bucket_idx].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );

      bars[j].style.height = block_idx[bucket_idx].style.height;
      bars[j].childNodes[0].innerText =
        block_idx[bucket_idx].childNodes[0].innerText;
      bars[j].style.backgroundColor = "green";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 200)
      );

      block_idx[bucket_idx].style.backgroundColor = "#6b5b95";
    }
  }
  var endTime = new Date().getTime();
  window.alert("Press Ok to see the running Time in milliseconds");
  window.alert(endTime - startTime);
}
generatearray();
CountingSort();
