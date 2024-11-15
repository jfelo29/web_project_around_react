export default function EditAvatar() {
  return (
    <form className="popup__form popup__avatar-edit" id="form-avatar-edit">
      <input
        type="url"
        name="avatar"
        placeholder="cargar imagen"
        id="input-avatar-link"
        className="popup__item"
        required
      />
      <span className="popup__input-error input-avatar-link-error"></span>
      <button className="popup__submit">Guardar</button>
    </form>
  );
}
