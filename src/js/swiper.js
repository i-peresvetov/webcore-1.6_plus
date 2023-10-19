// (function () {
//     "use strict";
//     const breakpoint = window.matchMedia("(min-width:768px)");
//     let mySwiper;
//     const breakpointChecker = function () {
//       if (breakpoint.matches === true) {
//         if (mySwiper !== undefined) mySwiper.destroy(true, true);
//         return;
//       } else if (breakpoint.matches === false) {
//         return enableSwiper();
//       }
//     };
//     const enableSwiper = function () {
//       mySwiper = new Swiper(".swiper-container", {
//         loop: false,
//         // slidesPerView: 1.5,
//         slidesPerView: "auto",
//         centeredSlides: false,
//         // a11y: true,
//         keyboardControl: true,
//         grabCursor: true,
//         pagination: ".swiper-pagination",
//         paginationClickable: true,
//         spaceBetween: 16,
//       });
//     };
//     breakpoint.addListener(breakpointChecker);
//     breakpointChecker();
//   })();

// let mySwiper;
// const breakpoint = window.matchMedia( '(min-width:768px)' );
// const breakpointChecker = function() {
//   if ( breakpoint.matches === true ) {
//      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
//      return;
//   } else if ( breakpoint.matches === false ) {
//      return enableSwiper();
//   }
// };
// const enableSwiper = function() {
//   mySwiper = new Swiper('.swiper-container', {
//         loop: false,
//         slidesPerView: "auto",
//         centeredSlides: false,
//         keyboardControl: true,
//         grabCursor: true,
//         pagination: ".swiper-pagination",
//         paginationClickable: true,
//         spaceBetween: 16,
//     });
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

const breakpoint = window.matchMedia("(max-width:768px)");
const enableSwiper = function () {
  mySwiper = new Swiper(".swiper-container", {
    loop: false,
    slidesPerView: "auto",
    centeredSlides: false,    
    grabCursor: true,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    spaceBetween: 16,
  });
};

if (breakpoint.matches) {
  enableSwiper();
}