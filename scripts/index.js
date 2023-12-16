const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');

const EditButton = document.querySelector('.profile__info-edit-button');

const edit = document.querySelector('.popup__edit');
const inputName = document.querySelector('.popup__input_name');
const inputAbout = document.querySelector('.popup__input_about');
const editSaveButton = document.querySelector('.popup__edit-save-button');
const editCloseButton = document.querySelector('.popup__edit-close-button');

const addButton = document.querySelector('.profile__add-button');

const add = document.querySelector('.popup__add');
const inputTitle = document.querySelector('.popup__input_title');
const inputUrl = document.querySelector('.popup__input_url');
const addSaveButton = document.querySelector('.popup__add-save-button');
const addCloseButton = document.querySelector('.popup__add-close-button');

const invalidMessage = document.querySelectorAll('.popup__invalid-message')

const card = document.querySelector('.popup__card');
const cardImage = document.querySelector('.popup__card-image');
const cardTitle = document.querySelector('.popup__card-title');
const cardCloseButton = document.querySelector('.popup__card-close-button');

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


function isInputEmpty(i) {
    function l(i1, i2) {
        if (i1.value.length <= 0 || i2.value.length <= 0) {
            return true;
        } else {
            return false;
        };
    };
    
    if ( i === edit && l(inputName, inputAbout) === true) {
        return true;
    } else if ( i === edit && l(inputName, inputAbout) === false) {
        return false;
    } else if (i === add && l(inputTitle, inputUrl) === true) {
        return true;
    } else if (i === add && l(inputTitle, inputUrl) === false) {
        return false;
    };
};

function saveButtonDisabledToggle(i) {
    if (i === edit && isInputEmpty(edit) === false) {
        editSaveButton.removeAttribute('disabled', true);
        editSaveButton.classList.remove('popup__save-button_disabled');
    } else if (i === edit && isInputEmpty(edit) === true) {
        editSaveButton.setAttribute('disabled', true);
        editSaveButton.classList.add('popup__save-button_disabled');
        console.log('fu')
    } else if (i === add && isInputEmpty(add) === false) {
        addSaveButton.removeAttribute('disabled', true);
        addSaveButton.classList.remove('popup__save-button_disabled');
    } else if (i === add && isInputEmpty(add) === true) {
        addSaveButton.setAttribute('disabled', true);
        addSaveButton.classList.add('popup__save-button_disabled');
    };
};

function addCard(titleValue, urlValue) {
    const cardContainer = document.querySelector('.cards');
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
        card.classList.add('popup_active');
        cardImage.src = e.target.src;
        cardImage.alt = e.target.alt;
        cardTitle.textContent = e.target.alt;
    });

    cardContainer.prepend(cardElement);
};

function saveButtonClick(i) {
    if (i === edit) {
        infoName.textContent = inputName.value;
        infoAbout.textContent = inputAbout.value;
        edit.classList.remove('popup_active');
    } else if (i === add && URL.canParse(inputUrl.value) === true) {
        inputTitle.classList.remove('popup__input-invalid_active');
        inputUrl.classList.remove('popup__input-invalid_active');
        invalidMessage.forEach(item => {item.classList.remove('popup__invalid-message_active');});
        addCard(inputTitle.value, inputUrl.value);
        add.classList.remove('popup_active');
    } else if (i === add && URL.canParse(inputUrl.value) === false) {
        inputTitle.classList.add('popup__input-invalid_active');
        inputUrl.classList.add('popup__input-invalid_active');
        invalidMessage.forEach(item => {item.classList.add('popup__invalid-message_active');});
        inputTitle.value = '';
        inputUrl.value = '';
        saveButtonDisabledToggle(add)
    };
}
 

EditButton.addEventListener('click', () => {
    edit.classList.add('popup_active');
    inputName.value = infoName.textContent;
    inputAbout.value = infoAbout.textContent;
});

addButton.addEventListener('click', () => {
    add.classList.add('popup_active');
    inputTitle.value = '';
    inputUrl.value = '';
    saveButtonDisabledToggle(add);
});

edit.addEventListener('keyup', e => {
    saveButtonDisabledToggle(edit)
    if(e.key ==='Enter' && isInputEmpty(edit) === false) {
        saveButtonClick(edit);
    }
});

add.addEventListener('keyup', e => {
    saveButtonDisabledToggle(add)
    if(e.key ==='Enter' && isInputEmpty(add) === false) {
        saveButtonClick(add);
    }
});

editSaveButton.addEventListener('click', () => {saveButtonClick(edit)});

addSaveButton.addEventListener('click', () => {saveButtonClick(add)});

editCloseButton.addEventListener('click', () => {
    edit.classList.remove('popup_active');
    editSaveButton.removeAttribute('disabled', true);
    editSaveButton.classList.remove('popup__save-button_disabled');
    saveButtonDisabledToggle(edit);
});

addCloseButton.addEventListener('click', () => {
    add.classList.remove('popup_active');
    inputTitle.classList.remove('popup__input-invalid_active');
    inputUrl.classList.remove('popup__input-invalid_active');
    invalidMessage.forEach(item => {item.classList.remove('popup__invalid-message_active');});
    inputTitle.value = '';
    inputUrl.value = '';});

cardCloseButton.addEventListener('click', () => {
    card.classList.remove('popup_active');
})

initialCards.reverse().forEach( item => {addCard(item.name, item.link)});

