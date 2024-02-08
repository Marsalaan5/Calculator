var typed = new Typed("#elem", {
  strings: ["Calculator"],
  typeSpeed: 200,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

const display = document.getElementById("display");
const btn = document.querySelectorAll("button");

const string = "";
const arr = Array.from(btn);
arr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
