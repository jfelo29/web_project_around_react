export default function NewCard() {
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
      />
      <span className="popup__input-error input-card-title-error"></span>

      <input
        type="url"
        name="link"
        placeholder="cargar imagen"
        id="input-card-link"
        className="popup__item"
        required
      />
      <span className="popup__input-error input-card-link-error"></span>
      <button className="popup__submit">crear</button>
    </form>
  );
}
