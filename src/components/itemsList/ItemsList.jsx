import Item from "../item/Item";
import Spinner from "../spinner/Spinner";

import "./style.scss";

const ItemsList = ({ data }) => {
  if (!data || data === null) {
    return <Spinner />;
  }

  return (
    <div className="item-list">
      <div className="container">
        {data.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
