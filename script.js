// saving both drop down menue's in a node list

const dropDowns = document.querySelectorAll(".drop-down");

// toggle the active class when any of the nav links that contain the drop down menue's, are clicked
dropDowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
});

// Mobile Navigation

const toggleNav = document.getElementById("nav-toggle");

const nav = document.querySelector(".navbar");

// Adding the overlay when menue open button is clicked
const overlay = document.querySelector(".overlay");

// Both open and close menue icons
const mobileNavIcons = document.querySelectorAll(".mobile-icon");

toggleNav.addEventListener("click", () => {
  //  Toggle the mobile nav with the "open" class in css
  nav.classList.toggle("open");
  // when open menue icon is pressed overlay is displayed, when close menue icon is pressed its closes along with the mobile nav
  overlay.classList.toggle("hide");

  //  When Nav bar is open hide open menue icon else when closed hide close menue icon
  mobileNavIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("hide");
    });
  });
});
