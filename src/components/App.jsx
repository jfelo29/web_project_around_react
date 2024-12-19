import { useState, useEffect } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./footer/Footer.jsx";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";
import EditProfile from "./form/EditProfile/EditProfile.jsx";
import EditAvatar from "./form/EditAvatar/EditAvatar.jsx";
import NewCard from "./form/NewCard/NewCard.jsx";
function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCard] = useState([]);

  const editProfilePopup = {
    title: "Editar perfil",
    children: (
      <EditProfile
        handleUpdateUser={handleUpdateUser}
        handleOpenPopupEditProfile={handleOpenPopupEditProfile}
      />
    ),
  };
  const editAvatarPopup = {
    title: "Editar avatar",
    children: <EditAvatar handleUpdateAvatar={handleUpdateAvatar} />,
  };
  const newCardPopup = {
    title: "Crear nueva tarjeta",
    children: (
      <NewCard
        onAddPlaceSubmit={handleAddPlaceSubmit}
        handleOpenPopupNewCard={handleOpenPopupNewCard}
      />
    ),
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  function getUserInfo() {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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

  async function handleUpdateUser(data) {
    await api.editUser(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    });
  }
  async function handleUpdateAvatar(data) {
    await api.profileImage(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    });
  }
  async function handleAddPlaceSubmit(data) {
    await api.createcard(data).then((newData) => {
      setCard([newData, ...cards]);
      handleClosePopup();
    });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          setCurrentUser={setCurrentUser}
          onHandleUpdateUser={handleUpdateUser}
          onHandleUpdateAvatar={handleUpdateAvatar}
          handleOpenPopupEditAvatar={handleOpenPopupEditAvatar}
          handleOpenPopupEditProfile={handleOpenPopupEditProfile}
          handleOpenPopupNewCard={handleOpenPopupNewCard}
          handleClosePopup={handleClosePopup}
          handleAddPlaceSubmit={handleAddPlaceSubmit}
          popup={popup}
          cards={cards}
          setCard={setCard}
        />
        <Footer />

        <template id="card__area">
          <div className="card">
            <div className="card__delate-icon"></div>
            <img src="" alt="" className="card__image" />
            <div className="card__menu">
              <h2 className="card__title"></h2>

              <button className="card__like"></button>
              <p className="pruebalikes"></p>
            </div>
          </div>
        </template>
      </div>
      {}
    </CurrentUserContext.Provider>
  );
}
export default App;
