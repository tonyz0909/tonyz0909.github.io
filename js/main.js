// $('#scroll').on('click', function () {
//   $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-25 }, 500);
// })

$('#cat1').on('click', function () {
  $("#skills1").css("width", "100%")
})

$('#cat2').on('click', function () {
  $("#skills2").css("width", "100%")
})

/* sticky navbar */

var navbar = document.getElementById("navbar");
var wrapper = document.getElementById("wrapper");

window.onload = () => {
  // console.log(sticky)
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove('hidden');
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { toggleNavbar() };

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
toggleNavbar = () => {
  // console.log(window.pageYOffset)
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove('hidden');
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove("sticky");
  }
}

