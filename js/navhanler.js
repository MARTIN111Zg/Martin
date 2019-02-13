const navhandler = () => {
  const btn = document.querySelector(".nav__btn");
  const menu = document.querySelector(".nav__overlay__wrapper");
  const links = document.querySelector(".nav__ul");
  const lina = document.querySelectorAll(".nav__links");

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    setTimeout(function() {
      links.classList.toggle("active");
    }, 200);

    lina.forEach((lin, index) => {
      lin.style.animation = `movelink 1s ease  ${index / 8}s`;
    });
    btn.classList.toggle("toogle");
  });
};
navhandler();
