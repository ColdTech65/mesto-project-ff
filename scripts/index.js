// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, deleteCallback) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  deleteButton.addEventListener('click', () => deleteCallback(cardElement));

  return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  console.log(cardElement);
  console.log(cardElement instanceof Element)
  cardElement.remove();
};

// @todo: Вывести карточки на страницу
function renderCards(cards) {
  cards.forEach((card) => {
    const cardElement = createCard(card, deleteCard);
    placesList.append(cardElement);
  })
};

renderCards(initialCards);