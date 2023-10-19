const textContent = document.querySelector(".content__text-window");
const expandTextBtn = document.querySelector(".content__expand");

expandTextBtn.addEventListener("click", function () {
  textContent.classList.toggle("content__text-window--expanded");
  textContent.classList.toggle("content__text-window--minimazed");
  expandTextBtn.classList.toggle("content__expand--hide");
  expandTextBtn.classList.toggle("content__expand--show");
});

const repairExpandBtns = document.querySelectorAll(".repairing__expand-button");
const repairContainers = document.querySelectorAll(".repairing__list");
for (let i = 0; i < repairExpandBtns.length; i++) {
  repairExpandBtns[i].addEventListener("click", function () {
    repairExpandBtns[i].classList.toggle("expand-button--show");
    repairExpandBtns[i].classList.toggle("expand-button--hide");
    repairContainers[i].classList.toggle('repairing__list--minimazed');
    repairContainers[i].classList.toggle('repairing__list--expanded');
  });
}
