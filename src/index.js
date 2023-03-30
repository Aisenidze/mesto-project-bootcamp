import './pages/index.css';

const popupInfoProject = document.querySelector('.popup');
const profileEditor = document.querySelector('.profile__editor');
const popupAdd = document.querySelector('.popup_add');
const popupEdit = document.querySelector('.popup_edit');
const popupCloseAdd = document.querySelector('.popup__close_add');
const popupCloseEdit = document.querySelector('.popup__close_edit');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupForm = popupInfoProject.querySelector('.popup__form');
const popupFormAdd = popupAdd.querySelector('.popup__form-add')
const popupTitle = popupForm.querySelector('.popup__name');
const popupSubtitle = popupForm.querySelector('.popup__speciality');
const addMesto = document.querySelector('.profile__add-mesto');
const elements = document.querySelector('.elements');
const userTemplate = document.querySelector('#element-template').content;

//6 карточек из коробки
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function addCard(arr) {
    return arr.map((card, index) => {
        let userCopy = userTemplate.querySelector('.element').cloneNode(true)
        userCopy.id = index + 1;
        userCopy.querySelector('.element__pic').src = card.link;
        userCopy.querySelector('.element__heading').innerText = card.name;
        return userCopy;
    })
}
elements.append(...addCard(initialCards));

function openPopUpAdd() {
    popupAdd.classList.add('popup_opened');
}

function closePopUpAdd() {
    popupAdd.classList.remove('popup_opened');
}

function handleSubmitTitleFormAdd(event) {
    const {name, link} = event.target;
    let userCopy = userTemplate.querySelector('.element').cloneNode(true);
    userCopy.querySelector('.element__pic').src = link.value;
    userCopy.querySelector('.element__heading').innerText = name.value;
    userCopy.querySelector('.element__like').addEventListener('click', function (event) {
        event.target.classList.toggle('element__like_active');
    });
    closePopUpAdd();
    return elements.prepend(userCopy);
}

function openPopUpEdit() {
    popupEdit.classList.add('popup_opened');
}

function closePopUpEdit() {
    popupEdit.classList.remove('popup_opened');
}

function handleSubmitTitleFormEdit() {
    profileName.textContent = popupTitle.value;
    profileDescription.textContent = popupSubtitle.value;
    closePopUpEdit();
}

const imagePopup = document.querySelector('.popup_zoom');
const imageZoom = imagePopup.querySelector('.popup__image-zoom');
const imageTitle = imagePopup.querySelector('.popup__image_title');
const popupCloseZoom = imagePopup.querySelector('.popup__close');

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function trash(event) {
    event.preventDefault();
    if (event.target.className === 'element__trash') {
        event.target.parentNode.remove();
    }
    if (event.target.className === 'element__pic') {
        const img = event.target.parentNode.querySelector('.element__pic').src;
        const text = event.target.parentNode.querySelector('.element__heading').innerText;
        imageZoom.src = img;
        imageTitle.innerText = text;
        openPopup(imagePopup);
    }
    if (event.target.className === 'element__like element__like_active') {
        event.target.className = 'element__like';
        return
    }
    if (event.target.className === 'element__like') {
        event.target.classList.toggle('element__like_active')
    }
}

function closePopUpZoom() {
    imagePopup.classList.remove('popup_opened');
}

popupForm.addEventListener('submit', () => handleSubmitTitleFormEdit());
popupFormAdd.addEventListener('submit', (event) => handleSubmitTitleFormAdd(event));

addMesto.addEventListener('click', openPopUpAdd);
profileEditor.addEventListener('click', openPopUpEdit);
popupCloseAdd.addEventListener('click', closePopUpAdd);
popupCloseEdit.addEventListener('click', closePopUpEdit);
elements.addEventListener('click',(event) => trash(event));
popupCloseZoom.addEventListener('click', (event) => closePopUpZoom(event));
