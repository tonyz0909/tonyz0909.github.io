// $('#scroll').on('click', function () {
//   $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-25 }, 500);
// })

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
window.onscroll = () => toggleNavbar();

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
toggleNavbar = () => {
  // console.log(window.pageYOffset);
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove('hidden');
    navbar.classList.add("sticky");
  } else {
    navbar.classList.add('hidden');
    navbar.classList.remove("sticky");
  }
}

// $(document).ready(function () {
//   $(window).scroll(function () {

//     /* Check the location of each desired element */
//     $('.body_section').each(function (i) {
//       console.log($(this).position().top + $(this).outerHeight());
//       console.log($(window).scrollTop() + $(window).height())
//       var bottom_of_object = $(this).position().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();

//       /* If the object is completely visible in the window, fade it it */
//       if (bottom_of_window > bottom_of_object) {

//         $(this).animate({
//           'opacity': '1'
//         }, 2000);

//       }

//     });

//   });
// });

