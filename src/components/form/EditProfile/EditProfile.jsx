export default function EditProfile() {
  return (
    <form className="popup__form popup__edit-profile" id="form-profile">
      <input
        type="text"
        placeholder="nombre"
        id="input-name"
        className="popup__item"
        minlength="2"
        maxlength="40"
        required
        name="name"
      />
      <span className="popup__input-error input-name-error"></span>

      <input
        type="text"
        placeholder="acerca de mi"
        id="input-about"
        className="popup__item"
        minlength="2"
        maxlength="200"
        required
        name="about"
      />
      <span className="popup__input-error input-about-error"></span>
      <button className="popup__submit">guardar</button>
    </form>
  );
}
