import "./Card.css";
function Card({ title, image, description, url }) {
  const defaultImage =
    "https://caer.univ-amu.fr/wp-content/uploads/default-placeholder.png";
  return (
    <div className="card">
      <h2>{title}</h2>
      <img
        src={image ?? defaultImage}
        onError={(e) => (e.target.src = defaultImage)}
      />
      {/* <img src={image ? image : defaultImage} onError={(e) => (e.target.src = defaultImage)} /> */}
      <div className="card-desc">
        <p>{description}</p>
        <a href={url}>Voir l'évènement</a>
      </div>
    </div>
  );
}

export default Card;
