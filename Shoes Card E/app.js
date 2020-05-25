const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");

const gradients = document.querySelectorAll(".gradient");

const shoes = document.querySelectorAll(".shoe");

let prevColor = "red";

const changeSize = (e) => {
  sizes.forEach((size) => size.classList.remove("active"));
  e.target.classList.add("active");
};

const changeColor = (e) => {
  let color = e.target.getAttribute("color");
  let primary = e.target.getAttribute("primary");

  let gradient = document.querySelector(`.gradient[color="${color}"]`);
  let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);
  let shoe = document.querySelector(`.shoe[color="${color}"]`);

  //change color button
  colors.forEach((color) => color.classList.remove("active"));
  e.target.classList.add("active");

  //change background gradient
  gradients.forEach((gradient) => gradient.classList.remove("first", "second"));
  gradient.classList.add("first");
  prevGradient.classList.add("second");

  //   change shoe color
  shoes.forEach((shoe) => shoe.classList.remove("show"));
  shoe.classList.add("show");

  //change color button
  document.documentElement.style.setProperty("--primary", primary);

  prevColor = color;
};

sizes.forEach((size) => size.addEventListener("click", changeSize));
colors.forEach((color) => color.addEventListener("click", changeColor));
