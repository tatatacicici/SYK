document.addEventListener("DOMContentLoaded", function() {
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");

// Menentukan perubahan teks search bar saat scroll
function updateSearchBarText() {
sections.forEach((section) => {
const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;
const scrollPosition = window.scrollY;

if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
const sectionId = section.getAttribute("id");
const searchBar = document.querySelector(".navbar .navbar-brand");

switch (sectionId) {
case "hello":
searchBar.innerText = "Hello";
break;
case "about":
searchBar.innerText = "About Me";
break;
case "project":
searchBar.innerText = "My Latest Project";
break;
case "contacts":
searchBar.innerText = "Contacts";
break;
default:
searchBar.innerText = "Namamu"; // Default text when no section is in view
break;
}
}
});
}

// Memanggil fungsi saat halaman dimuat dan saat melakukan scroll
updateSearchBarText();
window.addEventListener("scroll", updateSearchBarText);
});

