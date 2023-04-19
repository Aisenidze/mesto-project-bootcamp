import '../pages/index.css';

import { openModal, closeModal, renderLoading } from "./utils.js";
import { prependCard, addNewCards } from "./card.js";
import { enableValidation, resetErrors, toggleButtonState, validationData } from "./validate.js"
import { getInitialCards, updateProfileData, getProfileData, updateProfileAvatar, handleError } from './api.js';

export const cardSection = document.querySelector(".card__items");
export const cardTemplate = document.querySelector("#card-template").content;

export const popupDecription = document.querySelector(".popup__image-tittle");

const modalEdit = document.querySelector("#typeEdit");
const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__subtitle");
const editBtnProfile = document.querySelector("#editButton");

export const profileForm = document.querySelector("#profileForm");
export const popupTitle = profileForm.querySelector("#profileName");
export const popupDescription = profileForm.querySelector("#profileAbout");

export const newLocation = document.querySelector("#newCard");
const newLocationBtn = document.querySelector("#addButton");
export const formNewLocation = document.querySelector("#addPlace");
export const title = document.querySelector("#newCardTitle");
export const link = document.querySelector("#newCardLink");

export const bigImage = document.querySelector("#bigImage");
export const popupImage = document.querySelector(".popup__image-full");

const btnClosePopups = document.querySelectorAll(".popup__close");

const buttonLocationBtn = document.querySelector('#newLocationbtnSave');

const updateAvatar = document.querySelector('#updateAvatar');
const editAvatarBtn = document.querySelector('.profile__avatar-edit');
const buttonAvatarBtn = document.querySelector('#updateAvatarButton');
export const formUpdateAvatar = document.forms["formUpdateAvatar"];
const editAvatarInput = document.querySelector('#updateAvatarInput');
const profileAvatar = document.querySelector('.profile__avatar');

export let userId;

function openProfilePopup() {
  resetErrors(profileForm, validationData);
  openModal(modalEdit);
  fillProfileInputs();
}

function openCardPopup() {
  resetErrors(formNewLocation, validationData);
  openModal(newLocation);
  toggleButtonState(formNewLocation, buttonLocationBtn, validationData);
}

function fillProfileInputs() {
  popupTitle.value = profileName.textContent;
  popupDescription.value = profileAbout.textContent;
};

function editProfile(e) {
  e.preventDefault();
  const button = e.submitter;
  renderLoading(true, button);
  updateProfileData(popupTitle.value, popupDescription.value)
    .then((newData) => {
      profileName.textContent = newData.name;
      profileAbout.textContent = newData.about;
      e.target.reset(); 
      closeModal(modalEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, button);
    });
};

function editAvatar(e) {
  e.preventDefault();
  const button = e.submitter;
  renderLoading(true, button);
  updateProfileAvatar(editAvatarInput.value)
  .then((newData) => {
    profileAvatar.src = newData.avatar;
    e.target.reset();
    closeModal(updateAvatar);
  })
  .catch(handleError)
  .finally(() => {
    renderLoading(false, button);
  });
}

function editAvatarOpen() {
  resetErrors(formUpdateAvatar, validationData);
  openModal(updateAvatar);
  toggleButtonState(formUpdateAvatar, buttonAvatarBtn, validationData);
}

function insertDataProfile(obj) {
  profileName.textContent = obj.name;
  profileAbout.textContent = obj.about;
  profileAvatar.src = obj.avatar;
}

Promise.all([getInitialCards(), getProfileData()])
.then(([cards, profileData]) => {
  insertDataProfile(profileData);
  userId = profileData._id;
  const cardList = Array.from(cards).reverse();
  cardList.forEach(prependCard);
})
.catch(handleError);

btnClosePopups.forEach((element) => {
  element.addEventListener('click', () => {
    const buttonPopup = element.closest('.popup');
    closeModal(buttonPopup);
  })
});

editBtnProfile.addEventListener("click", () => openProfilePopup());
formNewLocation.addEventListener("submit", addNewCards);
newLocationBtn.addEventListener("click", () => openCardPopup());
profileForm.addEventListener("submit", editProfile);
editAvatarBtn.addEventListener('click', () => editAvatarOpen());
formUpdateAvatar.addEventListener("submit", editAvatar);

enableValidation(validationData);