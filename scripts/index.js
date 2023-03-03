let profileEditButton = document.querySelector(".profile__info-button");
let closeEditButton = document.querySelector(".popup__close-button");

let popup = document.querySelector(".popup");

function closePopup() {
  popup.classList.remove("popup_opened");
}
profileEditButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

closeEditButton.addEventListener("click", closePopup);

let popupUserName = document.querySelector(".profile__info-name");
let popupUserJob = document.querySelector(".profile__info-text");

let popupNameInput = document.querySelector(".popup__name-input");
let popupJobInput = document.querySelector(".popup__job-input");

popupNameInput.value = popupUserName.textContent;
popupJobInput.value = popupUserJob.textContent;

let formElement = document.querySelector(".popup__form");

let popupSubmitButton = document.querySelector(".popup__submit-button");

let nameInput = document.querySelector(".popup__name-input");
let jobInput = document.querySelector(".popup__job-input");

function handleFormSubmit(evt) {
  evt.preventDefault();
  popupUserName.textContent = popupNameInput.value;
  popupUserJob.textContent = popupJobInput.value;

  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);
