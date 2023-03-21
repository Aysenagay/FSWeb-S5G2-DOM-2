import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});
document.querySelector("h1").addEventListener("mouseover", function (event) {
  this.style.color = "blue";
});
document.querySelector("h1").addEventListener("mouseout", function (event) {
  this.style.color = "";
});
document.querySelector("h2").addEventListener("mouseover", function (event) {
  this.style.color = "pink";
});
document.querySelector("h2").addEventListener("mouseout", function (event) {
  this.style.color = "";
});
const text = document.querySelectorAll(".text-content h2");
text[0].addEventListener("mouseover", function (event) {
  this.style.color = "red";
});
text[1].addEventListener("mouseover", function (event) {
  this.style.color = "red";
});
const text2 = document.querySelectorAll(".text-content h2");
text2[0].addEventListener("mouseout", function (event) {
  this.style.color = "";
});
text2[1].addEventListener("mouseout", function (event) {
  this.style.color = "";
});
const sonKisim = document.querySelectorAll(".destination h4");
sonKisim[0].addEventListener("mouseover", function (event) {
  this.style.color = "green";
});
sonKisim[1].addEventListener("mouseover", function (event) {
  this.style.color = "green";
});
sonKisim[2].addEventListener("mouseover", function (event) {
  this.style.color = "green";
});
const sonKisim2 = document.querySelectorAll(".destination h4");
sonKisim2[0].addEventListener("mouseout", function (event) {
  this.style.color = "";
});
sonKisim2[1].addEventListener("mouseout", function (event) {
  this.style.color = "";
});
sonKisim2[2].addEventListener("mouseout", function (event) {
  this.style.color = "";
});
document
  .querySelector(".content-destination h2")
  .addEventListener("mouseover", function (event) {
    this.style.color = "gray";
  });
document
  .querySelector(".content-destination h2")
  .addEventListener("mouseout", function (event) {
    this.style.color = "";
  });

document.querySelectorAll("html").addEventListener("keydown", function (event) {
  if (event.key === "b") {
    this.style.backgroundColor = "blue";
  }
});

// Kodlar buraya gelecek!
