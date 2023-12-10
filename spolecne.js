const hamburgerMenu = document.querySelector("#menu-tlacitko")
const menuItems = document.querySelector("#menu-polozky")

hamburgerMenu.addEventListener("click", () => {
  menuItems.classList.toggle("show")

  const menuIcon = hamburgerMenu.querySelector(".fas")
  if (menuItems.classList.contains("show")) {
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-times")
  } else {
    menuIcon.classList.remove("fa-times")
    menuIcon.classList.add("fa-bars")
  }
})
