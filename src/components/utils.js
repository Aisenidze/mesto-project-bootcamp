import { handleEscape, handleOverlay } from './modal';

export function openModal(popup) {
  document.addEventListener('keydown', handleEscape);
  popup.addEventListener('mousedown', handleOverlay);
  popup.classList.add('popup_opened');
};

export async function closeModal(popup) {
  document.removeEventListener('keydown', handleEscape);
  await popup.removeEventListener('mousedown', handleOverlay);
  await popup.classList.remove('popup_opened');
};