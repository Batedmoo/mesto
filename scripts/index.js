let profileEditButton = document.querySelector(".profile__info-button");
let closeEditButton = document.querySelector(".popup__close-button");

let popup = document.querySelector(".popup");

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", function () {
  popupNameInput.value = popupUserName.textContent;
  popupJobInput.value = popupUserJob.textContent;
  popup.classList.add("popup_opened");
});

closeEditButton.addEventListener("click", closePopup);

let popupUserName = document.querySelector(".profile__info-name");
let popupUserJob = document.querySelector(".profile__info-text");

let popupNameInput = document.querySelector(".popup__input_type_name");
let popupJobInput = document.querySelector(".popup__input_type_job");

let formElement = document.querySelector(".popup__form");

function handleFormSubmit(evt) {
  evt.preventDefault();
  popupUserName.textContent = popupNameInput.value;
  popupUserJob.textContent = popupJobInput.value;

  closePopup();
}

formElement.addEventListener("submit", handleFormSubmit);
