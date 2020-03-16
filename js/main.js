$('#scroll').on('click', function () {
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, 500); //$("#elementtoScrollToID").offset().top
})

$('#cat1').on('click', function () {
  $("#skills1").css("width", "100%")
})

$('#cat2').on('click', function () {
  $("#skills2").css("width", "100%")
})

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/* sticky navbar */

var navbar = document.getElementById("navbar");
var wrapper = document.getElementById("wrapper");

window.onload = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove('hidden');
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove('hidden');
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove("sticky");
  }
}

