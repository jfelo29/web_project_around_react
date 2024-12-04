import editProfile from "../../images/pen-image.svg";
import addButton from "../../images/plus-image.svg";
import { useState, useContext } from "react";
import { useEffect } from "react";
import Popup from "./popup/Popup";
import Card from "./componets/Card/card";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/currentUserContext.js";
export default function Main(props) {
  const [cards, setCard] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getCards()

      .then((data) => {
        setCard(data);
      });
  }, []);
  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    if (isLiked) {
      await api
        .dislikeCard(card._id)
        .then((newCard) => {
          setCard((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard
            )
          );
        })
        .catch((error) => console.error(error));
    } else {
      await api
        .likeCard(card._id)
        .then((newCard) => {
          console.log(newCard);
          setCard((state) =>
            state.map((currentCard) =>
              currentCard._id === card._id ? newCard : currentCard
            )
          );
        })
        .catch((error) => console.error(error));
    }
  }
  async function handleCardDelete(card) {
    await api
      .delateCard(card._id)
      .then((newCard) => {
        setCard((state) =>
          state.filter((currentCard) =>
            currentCard._id === card._id ? false : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }
  async function handleCardCreate(card) {
    await api
      .createcard(card)
      .then((newCard) => {
        setCard((state) => [...state, newCard]);
      })
      .catch((error) => console.error(error));
    handleClosePopup();
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__conteiner">
          <img
            src={currentUser.avatar}
            alt="foto perfil"
            className="profile__image"
          />
          <i
            className="profile__icon"
            onClick={props.handleOpenPopupEditAvatar}
          />
        </div>
        <div className="profile__name-info">
          <div className="profile__content">
            <h2 className="profile__name">{currentUser?.name}</h2>
            <button
              className="profile__button"
              onClick={props.handleOpenPopupEditProfile}
            >
              <img
                src={editProfile}
                alt="mouse botton"
                className="icon__button"
              />
            </button>
          </div>

          <h3 className="profile__about">{currentUser?.about}</h3>
        </div>
        <button className="add__button">
          <img
            src={addButton}
            alt="plus"
            className="icon__button"
            onClick={props.handleOpenPopupNewCard}
          />
        </button>
      </section>
      <section className="element-list">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={() => handleCardLike(card)}
              onCardDelete={() => handleCardDelete(card)}
              onCardCreate={() => handleCardCreate(card)}
            />
          ))}
        </ul>
      </section>
      {props.popup && (
        <Popup onClose={props.handleClosePopup} title={props.popup.title}>
          {props.popup.children}
        </Popup>
      )}
    </main>
  );
}
