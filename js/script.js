const RemovePF = document.querySelector(".remove-pf");
const LukaPF = document.querySelector(".pfp-card");
const FlexRM = document.querySelector(".card-flex");

RemovePF.addEventListener("click", function () {
  LukaPF.remove();
  FlexRM.style.display = "inline";
});
