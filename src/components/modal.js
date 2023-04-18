import { closeModal } from './utils.js'

export function handleEscape(e) {
  if (e.key === 'Escape') {
    const addModal = document.querySelector('.popup_opened')
    closeModal(addModal);
  };
};

export function handleOverlay(e) {
  if(!e.target.closest('.popup__form-container')) {
    closeModal(e.target);
  }
};