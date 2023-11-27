const infoName = document.querySelector('.profile__info-name');
const infoAbout = document.querySelector('.profile__info-about');
const infoEditButton = document.querySelector('.profile__info-edit-button');

const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__name');
const popupAbout = document.querySelector('.popup__about');
const popupSaveButton = document.querySelector('.popup__save-button');
const popupCloseButton = document.querySelector('.popup__close-button');

// const elementLikeButton = document.querySelector('.element__like-button');

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


// // like button
// elementLikeButton.addEventListener('click', function() {
//     if (elementLikeButton.innerHTML = `
//     <button class="element__like-button ">
//         <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
//             <path d="M19.3764 9.78586C21.5412 7.54338 21.5412 3.90213 19.3764 1.68186C17.2115 -0.560619 13.6964 -0.560619 11.5315 1.68186L10.4812 2.792L9.43098 1.70406C7.26614 -0.560619 3.75096 -0.560619 1.60755 1.68186C0.557285 2.76979 0 4.21297 0 5.74496C0 7.27695 0.578719 8.72013 1.60755 9.80806L10.4812 19L19.3764 9.78586ZM1.37178 5.74496C1.37178 4.59042 1.80046 3.52469 2.59352 2.72539C3.40801 1.88168 4.45828 1.45983 5.50855 1.45983C6.55882 1.45983 7.60909 1.88168 8.42358 2.72539L10.4812 4.83465L12.5389 2.70318C14.1465 1.03798 16.7829 1.03798 18.369 2.70318C19.1406 3.50248 19.5907 4.56821 19.5907 5.72276C19.5907 6.8773 19.162 7.94303 18.369 8.74233L10.4812 16.9351L2.59352 8.76453C1.82189 7.94303 1.37178 6.8773 1.37178 5.74496Z" fill="black"/>
//         </svg>
//     </button>
//     `){
//         elementLikeButton.innerHTML  = `
//         <button class="element__like-button ">
//             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3764 1.68186C21.5412 3.90213 21.5412 7.54338 19.3764 9.78586L10.4812 19L1.60755 9.80806C0.578719 8.72013 0 7.27695 0 5.74496C0 4.21297 0.557285 2.76979 1.60755 1.68186C3.75096 -0.560619 7.26614 -0.560619 9.43098 1.70406L10.4812 2.792L11.5315 1.68186C13.6964 -0.560619 17.2115 -0.560619 19.3764 1.68186Z" fill="black"/>
//             </svg>
//         </button>
//         `
//     } else {
//         elementLikeButton.innerHTML = `
//         <button class="element__like-button ">
//             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
//                 <path d="M19.3764 9.78586C21.5412 7.54338 21.5412 3.90213 19.3764 1.68186C17.2115 -0.560619 13.6964 -0.560619 11.5315 1.68186L10.4812 2.792L9.43098 1.70406C7.26614 -0.560619 3.75096 -0.560619 1.60755 1.68186C0.557285 2.76979 0 4.21297 0 5.74496C0 7.27695 0.578719 8.72013 1.60755 9.80806L10.4812 19L19.3764 9.78586ZM1.37178 5.74496C1.37178 4.59042 1.80046 3.52469 2.59352 2.72539C3.40801 1.88168 4.45828 1.45983 5.50855 1.45983C6.55882 1.45983 7.60909 1.88168 8.42358 2.72539L10.4812 4.83465L12.5389 2.70318C14.1465 1.03798 16.7829 1.03798 18.369 2.70318C19.1406 3.50248 19.5907 4.56821 19.5907 5.72276C19.5907 6.8773 19.162 7.94303 18.369 8.74233L10.4812 16.9351L2.59352 8.76453C1.82189 7.94303 1.37178 6.8773 1.37178 5.74496Z" fill="black"/>
//             </svg>
//         </button>
//         `
//     }  
// })