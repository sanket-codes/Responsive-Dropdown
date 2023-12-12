const list = document.querySelectorAll("#list");
const menu = document.querySelector("#menu");
const dropbtn = document.querySelector("#dropbtn");

menu.addEventListener("click", function () {
  list.forEach((l) => {
    l.classList.toggle("hide");
  });
  dropbtn.classList.toggle("rotation");
});
