import { handleEscape, handleOverlay } from './modal';

export function openModal(popup) {
  document.addEventListener('keydown', handleEscape);
  popup.addEventListener('mousedown', handleOverlay);
  popup.classList.add('popup_opened');
};

export function closeModal(popup) {
  document.removeEventListener('keydown', handleEscape);
  popup.removeEventListener('mousedown', handleOverlay);
  popup.classList.remove('popup_opened');
};