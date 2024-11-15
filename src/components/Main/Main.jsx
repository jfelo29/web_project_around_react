import editProfile from "../../images/pen-image.svg";
import addButton from "../../images/plus-image.svg";
import { useState } from "react";
import { useEffect } from "react";
import NewCard from "../form/NewCard/NewCard";
import EditProfile from "../form/EditProfile/EditProfile";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import Popup from "./popup/Popup";
import Card from "./componets/Card/card";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];
export default function Main() {
  const [popup, setPopup] = useState(null);
  /*  const [cards, setCard] = useState([]);*/
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Editar avatar",
    children: <EditAvatar />,
  };

  function handleOpenPopupNewCard() {
    setPopup(newCardPopup);
  }
  function handleOpenPopupEditProfile() {
    setPopup(editProfilePopup);
  }
  function handleOpenPopupEditAvatar() {
    setPopup(editAvatarPopup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  /*   useEffect(() => {
    fetch("http://localhost:3000/cards")
      .then((response) => response.json())
      .then((data) => {
        setCard(data);
      });
  }, []);
  }
 */

  return (
    <main>
      <section className="profile">
        <div className="profile__conteiner">
          <img src="" alt="foto perfil" className="profile__image" />
          <i className="profile__icon" onClick={handleOpenPopupEditAvatar} />
        </div>
        <div className="profile__name-info">
          <div className="profile__content">
            <h2 className="profile__name">Jacques Cousteau</h2>
            <button
              className="profile__button"
              onClick={handleOpenPopupEditProfile}
            >
              <img
                src={editProfile}
                alt="mouse botton"
                className="icon__button"
              />
            </button>
          </div>

          <h3 className="profile__about">Explorador</h3>
        </div>
        <button className="add__button">
          <img
            src={addButton}
            alt="plus"
            className="icon__button"
            onClick={handleOpenPopupNewCard}
          />
        </button>
      </section>
      <section className="element-list">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </ul>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
