const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');
const infoEditButton = document.querySelector('.profile__info-edit-button');

const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__name');
const popupAbout = document.querySelector('.popup__about');
const popupSaveButton = document.querySelector('.popup__save-button');
const popupCloseButton = document.querySelector('.popup__close-button');

// edit button
infoEditButton.addEventListener('click', function() {
    popup.classList.add('popup_active');

    popupName.value = infoName.textContent;
    popupAbout.value = infoAbout.textContent;
});

// save button
function saveEditor() {
    infoName.textContent = popupName.value;
    infoAbout.textContent = popupAbout.value;

    popup.classList.remove('popup_active');
};
popupSaveButton.addEventListener('click', saveEditor);
popup.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        saveEditor()
    }
});

// close edit button
popupCloseButton.addEventListener('click', function() {
    popup.classList.remove('popup_active');
});
