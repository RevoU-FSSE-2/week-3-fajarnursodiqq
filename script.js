/*function saySubscribe() {
  alert("TERIMAKASIH SUDAH MAU SUBSCRIBE");
}*/

const selectElement = (element) => document.querySelector(element);
selectElement(".mobile-menu").addEventListener("click", () => {
  selectElement("header").classList.toggle("active");
});
