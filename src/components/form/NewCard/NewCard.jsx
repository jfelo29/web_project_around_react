import { useState } from "react";
export default function NewCard(props) {
  const [card, setCard] = useState();
  function handleCreateCard(event) {
    event.preventDefault();
    props.onCardCreate(card);
  }
  function handleNameChange(event) {
    setCard({ ...card, name: event.target.value });
  }
  function handleLinkChange(event) {
    setCard({ ...card, link: event.target.value });
  }
  return (
    <form className="popup__form popup__add-profile" id="form-cards">
      <input
        type="text"
        name="name"
        placeholder="title"
        id="input-card-title"
        ClassName="popup__item"
        minlength="2"
        maxlength="40"
        onChange={(event) => handleNameChange(event)}
      />
      <span className="popup__input-error input-card-title-error"></span>

      <input
        type="url"
        name="link"
        placeholder="cargar imagen"
        id="input-card-link"
        className="popup__item"
        required
        onChange={(event) => handleLinkChange(event)}
      />
      <span className="popup__input-error input-card-link-error"></span>
      <button className="popup__submit" onClick={handleCreateCard}>
        crear
      </button>
    </form>
  );
}
