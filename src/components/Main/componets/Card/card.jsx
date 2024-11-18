export default function Card(props) {
  const { name, link, isliked, handleOpenPopup } = props.card;

  return (
    <div className="card cards__list">
      <div className="card__delate-icon"></div>
      <img src={link} alt="card" className="card__image" />
      <div className="card__menu">
        <h2 className="card__title">{name}</h2>

        <button className="card__like"></button>
        <p className="pruebalikes"></p>
      </div>
    </div>
  );
}
