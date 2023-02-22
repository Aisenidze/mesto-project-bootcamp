const profileEditor = document.querySelector('.profile__editor');
const popupClose = document.querySelector('.popup__close');

function openPopUp() {
    const popup = document.querySelector('.popup');
    popup.classList.add('popup_visible');
}

function closePopUp() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('popup_visible');
}

profileEditor.addEventListener('click', openPopUp);
popupClose.addEventListener('click', closePopUp);