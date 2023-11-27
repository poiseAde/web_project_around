const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');
const infoEditButton = document.querySelector('.profile__info-edit-button');

const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__name');
const popupAbout = document.querySelector('.popup__about');
const popupSaveButton = document.querySelector('.popup__save-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const like1 = document.querySelector('#like1')
const like2 = document.querySelector('#like2')
const like3 = document.querySelector('#like3')
const like4 = document.querySelector('#like4')
const like5 = document.querySelector('#like5')
const like6 = document.querySelector('#like6')


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
        saveEditor();
    }
});

// close edit button
popupCloseButton.addEventListener('click', function() {
    popup.classList.remove('popup_active');
});


// like button
let l1 = 2;
like1.addEventListener('click', function() {
    if (l1 % 2 == 0){
        like1.innerHTML  = `
        <img src="images/like_button_active.png" alt="tombol suka">
        `;
    } else {
        like1.innerHTML = `
        <img src="images/like_button.png" alt="tombol suka">
        `;
    }
    l1++
})

let l2 = 2;
like2.addEventListener('click', function() {
    if (l2 % 2 == 0){
        like2.innerHTML  = `
        <img src="images/like_button_active.png" alt="tombol suka">
        `;
    } else {
        like2.innerHTML = `
        <img src="images/like_button.png" alt="tombol suka">
        `;
    }
    l2++
})

let l3 = 2;
like3.addEventListener('click', function() {
    if (l3 % 2 == 0){
        like3.innerHTML  = `
        <img src="images/like_button_active.png" alt="tombol suka">
        `;
    } else {
        like3.innerHTML = `
        <img src="images/like_button.png" alt="tombol suka">
        `;
    }
    l3++
})

let l4 = 2;
like4.addEventListener('click', function() {
    if (l4 % 2 == 0){
        like4.innerHTML  = `
        <img src="images/like_button_active.png" alt="tombol suka">
        `;
    } else {
        like4.innerHTML = `
        <img src="images/like_button.png" alt="tombol suka">
        `;
    }
    l4++
})

let l5 = 2;
like5.addEventListener('click', function() {
    if (l5 % 2 == 0){
        like5.innerHTML  = `
        <img src="images/like_button_active.png" alt="tombol suka">
        `;
    } else {
        like5.innerHTML = `
        <img src="images/like_button.png" alt="tombol suka">
        `;
    }
    l5++
})

let l6 = 2;
like6.addEventListener('click', function() {
    if (l6 % 2 == 0){
        like6.innerHTML  = `
        <img src="images/like_button_active.png" alt="tombol suka">
        `;
    } else {
        like6.innerHTML = `
        <img src="images/like_button.png" alt="tombol suka">
        `;
    }
    l6++
})
