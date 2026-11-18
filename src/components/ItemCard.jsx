// A COMPONENT is a function that returns what ONE card should look like.
// Compare it to Spots' getCardElement(): same job, no cloneNode needed.
// Props ({ item }) = the data handed to it, like a function argument.
// `{item.name}` inside JSX = "put the real value here".

function ItemCard({ item }) {
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img className="card__image" src={item.link} alt={item.name} />
    </li>
  );
}

export default ItemCard;
