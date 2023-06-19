const form = document.querySelector(".top-bannerform");
const input = document.querySelector(".top-bannerinput");
// .class1.calss2 vs. .class1 .class2
const msSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");

form.addEventListener("submit", (e) => {
  getCoinDataFromApi();
});

const getCoinDataFromApi = () => {
  alert("Get Coin Data!!");
};
