// MAINC CONSTS
// CONST ADD ACCOUNT
const RemovePF = document.querySelector(".remove-pf");
const LukaPF = document.querySelector(".pfp-card");
const NoLukaPF = document.querySelector(".pfp-no-close");
const FlexRM = document.querySelector(".card-flex");
const AddPF = document.querySelector(".placeholder-card");
const MainBG = document.querySelector(".background");
const MainCRD = document.querySelector(".new");
const MainPG = document.querySelector(".abs-p");
const MainHR = document.querySelector(".abs-hr");
const CheckBX = document.querySelector(".flex-check");
const FormPG = document.querySelector(".form-page");
const FormHR = document.querySelector(".form-hr");
const FormLNK = document.querySelector(".link-new");
const FormCLS = document.querySelector(".remove-wnd");
const FormRST = document.querySelector(".form-reset");
const FooterBTM = document.querySelector(".footer");
const LeftTL = document.querySelector(".left-title");
const YearEL = document.querySelector(".trd");
const currentYear = new Date().getFullYear();
// CONST LOGIN ACCOUNT
const MainLOGIN = document.querySelector(".abs-login");
const LoginFORM = document.querySelector(".remove-wnd2");
// SET YEAR
YearEL.textContent = "Meta © " + currentYear;
// REMOVE PROFILE
RemovePF.addEventListener("click", function () {
  LukaPF.remove();
  FlexRM.style.display = "inline";
});
// ADD ACCOUNT
MainCRD.addEventListener("click", function () {
  LukaPF.style.pointerEvents = "none";
  MainCRD.style.pointerEvents = "none";
  MainBG.classList.add("abs-form");
  MainBG.style.paddingBottom = ".5rem";
  MainBG.style.boxShadow = "0 0 0 2000px rgba(0,0,0,0.5)";
  MainBG.style.border = "1px solid #444";
  MainPG.classList.remove("abs-hide");
  CheckBX.classList.remove("abs-hide");
  FormPG.classList.add("abs-hide");
  FormHR.classList.add("abs-hide");
  FormLNK.classList.add("abs-hide");
  MainHR.classList.remove("abs-hide");
  FormCLS.classList.remove("abs-hide");
  FormRST.style.fontSize = "1.65rem";
  FooterBTM.style.marginTop = "29.33rem";
  document.body.style.overflow = "hidden";
  LeftTL.classList.add("noselect");
  FooterBTM.classList.add("noselect");
  LukaPF.classList.add("noselect");
  MainCRD.classList.add("noselect");
  FooterBTM.style.pointerEvents = "none";
});

FormCLS.addEventListener("click", function () {
  MainBG.classList.remove("abs-form");
  MainBG.style.paddingBottom = "2.1rem";
  MainBG.style.boxShadow = "1px 1px 10px 5px rgba(0,0,0,0.08)";
  MainBG.style.border = "none";
  MainHR.classList.add("abs-hide");
  MainPG.classList.add("abs-hide");
  CheckBX.classList.add("abs-hide");
  FormPG.classList.remove("abs-hide");
  FormHR.classList.remove("abs-hide");
  FormLNK.classList.remove("abs-hide");
  FormCLS.classList.add("abs-hide");
  FormRST.style.fontSize = "1.4rem";
  FooterBTM.style.marginTop = "22rem";
  document.body.style.overflow = "visible";
  LukaPF.style.pointerEvents = "all";
  MainCRD.style.pointerEvents = "all";
  LeftTL.classList.remove("noselect");
  FooterBTM.classList.remove("noselect");
  LukaPF.classList.remove("noselect");
  MainCRD.classList.remove("noselect");
  FooterBTM.style.pointerEvents = "all";
});

// LOGIN ACCOUNT
NoLukaPF.addEventListener("click", function () {
  MainLOGIN.classList.remove("abs-hide");
  LukaPF.classList.add("noselect");
  MainCRD.classList.add("noselect");
  LeftTL.classList.add("noselect");
  MainBG.classList.add("noselect");
  FormPG.classList.add("noselect");
  FooterBTM.classList.add("noselect");
  LukaPF.style.pointerEvents = "none";
  MainCRD.style.pointerEvents = "none";
  MainBG.style.pointerEvents = "none";
  FooterBTM.style.pointerEvents = "none";
  FormPG.style.pointerEvents = "none";
  LeftTL.style.pointerEvents = "none";
  MainLOGIN.style.boxShadow = "0 0 0 2000px rgba(0,0,0,0.5)";
  MainLOGIN.style.border = ".7px solid #444";
  document.body.style.overflow = "hidden";
});

LoginFORM.addEventListener("click", function () {
  MainLOGIN.classList.add("abs-hide");
  MainLOGIN.style.border = "none";
  LukaPF.classList.remove("noselect");
  MainCRD.classList.remove("noselect");
  LeftTL.classList.remove("noselect");
  MainBG.classList.remove("noselect");
  FormPG.classList.remove("noselect");
  FooterBTM.classList.remove("noselect");
  LukaPF.style.pointerEvents = "all";
  MainCRD.style.pointerEvents = "all";
  LeftTL.style.pointerEvents = "all";
  MainBG.style.pointerEvents = "all";
  FooterBTM.style.pointerEvents = "all";
  FormPG.style.pointerEvents = "all";
  MainLOGIN.style.boxShadow = "1px 1px 10px 5px rgba(0,0,0,0.08)";
  document.body.style.overflow = "visible";
});
