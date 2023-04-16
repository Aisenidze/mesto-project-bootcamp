import '../pages/index.css';

import { initialPlaces } from "./initialPlaces";
import { openModal, closeModal } from "./utils.js";
import { enterCard, addNewCards } from "./card.js";
import { enableValidation, resetErrors } from "./validate.js"
import { validationData } from "./modal.js"

export const usersOnline = document.querySelector(".card__items");
export const addCard = document.querySelector("#card-template").content;

export const popupDecription = document.querySelector(".popup__image-tittle");

const modalEdit = document.querySelector("#typeEdit");
const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__subtitle");
const editBtnProfile = document.querySelector("#editButton");

export const popupContainer = document.querySelector("#profileForm");
export const popupTitle = popupContainer.querySelector("#profileName");
export const popupDescription = popupContainer.querySelector("#profileAbout");

export const newLocation = document.querySelector("#newCard");
const newLocationBtn = document.querySelector("#addButton");
export const formNewLocation = document.querySelector("#addPlace");
export const title = document.querySelector("#newCardTitle");
export const link = document.querySelector("#newCardLink");

export const bigImage = document.querySelector("#bigImage");
export const popupImage = document.querySelector(".popup__image-full");

const btnClosePopup = document.querySelectorAll(".popup__close");

function editProfileOpen() {
  const formElement = modalEdit.querySelector('.popup__form')
  resetErrors(formElement, validationData);
  openModal(modalEdit);
  setformDefault();
}

function newPlace() {
  const formElement = newLocation.querySelector('.popup__form')
  resetErrors( formElement, validationData);
  openModal(newLocation);
}

function setformDefault() {
  popupTitle.value = profileName.textContent;
  popupDescription.value = profileAbout.textContent;
};

function editProfile(e) {
  e.preventDefault();
  profileName.textContent = popupTitle.value;
  profileAbout.textContent = popupDescription.value;
  closeModal(modalEdit);
};

function likePlace(e) {
  if (e.target.classList.contains("card__item-like-button")) {
    e.target.classList.toggle("card__item-like-button_active");
  }
}

initialPlaces.forEach((item) => {
  enterCard(item.name, item.link);
});
btnClosePopup.forEach((btn) => btn.addEventListener("click", () => closeModal(btn.closest(".popup_opened"))));

editBtnProfile.addEventListener("click", () => editProfileOpen());
formNewLocation.addEventListener("submit", addNewCards);
newLocationBtn.addEventListener("click", () => newPlace());
popupContainer.addEventListener("submit", editProfile);
usersOnline.addEventListener("click", (e) => likePlace(e));

enableValidation(validationData);