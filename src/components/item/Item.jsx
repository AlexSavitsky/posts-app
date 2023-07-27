import { Link } from "react-router-dom";

import "./style.scss";

const Item = ({ item }) => {
  const { title, body, id, name } = item;
  return (
    <div className="item">
      <Link to={`/comments/${id}`}>
        <h2>{title || name}</h2>

        <p>{body}</p>
      </Link>
    </div>
  );
};

export default Item;
