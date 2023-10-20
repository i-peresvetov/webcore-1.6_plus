import {scrollController} from './scrollController'


const modalFeedback = document.querySelector(".modal-feedback");
const feedbackBtns = document.querySelectorAll(".menu-button--chat");
feedbackBtns.forEach(function (element) {
  element.addEventListener(`click`, function () {
    modalFeedback.classList.replace("modal--hide", "modal--show");
    scrollController.disablesScroll();
  });
});
const feedbackBtnClose = document.querySelector(".modal-feedback__close");
feedbackBtnClose.addEventListener("click", function () {
  modalFeedback.classList.replace("modal--show", "modal--hide");
  scrollController.enabledScroll();
});
const modalFeedbackClose = document.querySelector(".modal-feedback__fog");
modalFeedbackClose.addEventListener("click", function () {
  modalFeedback.classList.replace("modal--show", "modal--hide");
  scrollController.enabledScroll();
});

const modalCall = document.querySelector(".modal-call");
const callBtns = document.querySelectorAll(".menu-button--call");
callBtns.forEach(function (element) {
  element.addEventListener("click", function () {
    modalCall.classList.replace("modal--hide", "modal--show");
    scrollController.disablesScroll();
  });
});
const callBtnClose = document.querySelector(".modal-call__close");
callBtnClose.addEventListener("click", function () {
  modalCall.classList.replace("modal--show", "modal--hide");
  scrollController.enabledScroll();
});
const modalCallClose = document.querySelector(".modal-call__fog");
modalCallClose.addEventListener("click", function () {
  modalCall.classList.replace("modal--show", "modal--hide");
  scrollController.enabledScroll();
});


