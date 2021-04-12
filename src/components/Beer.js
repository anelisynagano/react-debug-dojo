const Beer = ({ image_url, name, tagline }) => {
  return (
    <div className="beerCard">
      <div className="imageContainer">
        <img src={props.image_url} alt="" />
      </div>
      <h2>{props.name}</h2>
      <p>{props.tagline}</p>
    </div>
  );
};

export default Beer;
