const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');

const EditButton = document.querySelector('.profile__info-edit-button');

const popupEdit = document.querySelector('.popup_edit');
const popupInputName = document.querySelector('.popup__input_name');
const popupInputAbout = document.querySelector('.popup__input_about');
const popupEditSaveButton = document.querySelector('.popup__edit_save-button');
const popupEditCloseButton = document.querySelector('.popup__edit_close-button');

const addButton = document.querySelector('.profile__add-button');

const cardContainer = document.querySelector('.cards');

const popupAdd = document.querySelector('.popup_add');
const popupInputTitle = document.querySelector('.popup__input_title');
const popupInputUrl = document.querySelector('.popup__input_url');
const popupAddSaveButton = document.querySelector('.popup__add_save-button');
const popupAddCloseButton = document.querySelector('.popup__add_close-button');

const popupCard = document.querySelector('.popup_card');
const popupCardImage = document.querySelector('.popup_card__image');
const popupCardTitle = document.querySelector('.popup_card__title');
const popupCardCloseButton = document.querySelector('.popup_card__close-button');

EditButton.addEventListener('click', () => {
    popupEdit.classList.add('popup_active');
    popupInputName.value = infoName.textContent;
    popupInputAbout.value = infoAbout.textContent;
});

function saveEditor() {
    infoName.textContent = popupInputName.value;
    infoAbout.textContent = popupInputAbout.value;
    popupEdit.classList.remove('popup_active');
};
popupEditSaveButton.addEventListener('keyup', (e, i) => {
    if (popupInputName.value.length <= 0 || popupInputAbout.value.length <= 0) {
        popupEditSaveButton.setAttribute('disabled', true);
        popupEditSaveButton.classList.add('popup__save-button_disabled');
        i = false
    } else {
        popupEditSaveButton.removeAttribute('disabled', true);
        popupEditSaveButton.classList.remove('popup__save-button_disabled');
        i = true
    }
    if (e.key === 'Enter' && i === true) {
        saveEditor();
    }
});
popupEditSaveButton.addEventListener('click', saveEditor);

popupEditCloseButton.addEventListener('click', () => {
    popupEdit.classList.remove('popup_active');
});

const initialCards = [
    {
      name: "Lembah Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Danau Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Pegunungan Gundul",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Gunung Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Taman Nasional Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];
  
addButton.addEventListener('click', () => {
    popupAdd.classList.add('popup_active');
});

function addCard(titleValue, urlValue) {
    const cardTemplate = document.querySelector('.card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__image').src = urlValue;
    cardElement.querySelector('.card__image').alt = titleValue;
    
    cardElement.querySelector('.card__title').textContent = titleValue;

    cardElement.querySelector('.card__like-button').addEventListener('click', e => {
        e.target.classList.toggle('card__like-button-active');
    });

    cardElement.querySelector('.card__delete-button').addEventListener('click', e => {
        e.target.parentElement.remove();
    });

    cardElement.querySelector('.card__image').addEventListener('click', e => {
        // console.log(e.target.alt)
        popupCard.classList.add('popup_active');
        popupCardImage.src = e.target.src;
        popupCardTitle.textContent = e.target.alt;
    });

    cardContainer.prepend(cardElement);
};

initialCards.reverse().forEach( item => {
    addCard(item.name, item.link)
});

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

popupAddSaveButton.addEventListener('click', () => {
    const invalidMessage = document.querySelectorAll('.popup__invalid')

    if (URL.canParse(popupInputUrl.value) === true) {
        addCard(popupInputTitle.value, popupInputUrl.value);

        popupInputTitle.classList.remove('popup__input_invalid_active');
        popupInputUrl.classList.remove('popup__input_invalid_active');

        invalidMessage.forEach(item => {
            item.classList.remove('popup__invalid_active');
        });

        popupInputTitle.value = '';
        popupInputUrl.value = '';
    
        popupAdd.classList.remove('popup_active');
    } else {
        popupInputTitle.classList.add('popup__input_invalid_active');
        popupInputUrl.classList.add('popup__input_invalid_active');

        invalidMessage.forEach(item => {
            item.classList.add('popup__invalid_active');
        });

        popupInputTitle.value = '';
        popupInputUrl.value = '';
    }
});

popupAddCloseButton.addEventListener('click', () => {
    popupAdd.classList.remove('popup_active');

    popupInputTitle.value = '';
    popupInputUrl.value = '';
});

popupCardCloseButton.addEventListener('click', () => {
    popupCard.classList.remove('popup_active');
});
