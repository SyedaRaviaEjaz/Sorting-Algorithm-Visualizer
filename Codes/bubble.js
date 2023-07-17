var container = document.getElementById("array");
function generatebars() {
  for (var i = 0; i < 50; i++) {
    var num = Math.ceil(Math.random() * 1000);
    var indices = document.createElement("div");
    indices.classList.add("block");
    indices.style.height = `${num / 2}px`;
    indices.style.transform = `translate(${i * 30}px)`;
    var indices_label = document.createElement("label");
    indices_label.classList.add("block_id");
    indices_label.innerText = num;
    indices.appendChild(indices_label);
    container.appendChild(indices);
  }
}
function swap(el1, el2) {
  return new Promise((resolve) => {
    var value = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = value;
    window.requestAnimationFrame(function () {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}
async function BubbleSort(delay = 0.001) {
  var startTime = new Date().getTime();
  var bars = document.querySelectorAll(".block");
  for (var i = 0; i < bars.length; i += 1) {
    for (var j = 0; j < bars.length - i - 1; j += 1) {
      bars[j].style.backgroundColor = "#FF4949";
      bars[j + 1].style.backgroundColor = "#FF4949";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      console.log("run");
      var x = Number(bars[j].childNodes[0].innerHTML);
      var y = Number(bars[j + 1].childNodes[0].innerHTML);
      if (x > y) {
        await swap(bars[j], bars[j + 1]);
        bars = document.querySelectorAll(".block");
      }
      bars[j].style.backgroundColor = "#6b5b95";
      bars[j + 1].style.backgroundColor = "#6b5b95";
    }
    bars[bars.length - i - 1].style.backgroundColor = "#13CE66";
  }
  var endTime = new Date().getTime();
  window.alert("Press Ok to see the running Time in milliseconds");
  window.alert(endTime - startTime);
}
generatebars();
BubbleSort();
