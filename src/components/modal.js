import { closeModal } from './utils.js'

export function handleEscape(e) {
  if (e.key === 'Escape') {
    const addModal = document.querySelector('.popup_opened')
    closeModal(addModal);
  };
};

export function handleOutside(e) {
  const addModal = document.querySelector('.popup_opened');
  if(!e.target.closest('.popup__form-container')) {
    closeModal(addModal);
  };
};

export const validationData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error-message_active'
};