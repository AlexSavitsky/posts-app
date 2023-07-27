import "./style.scss";

const Header = ({ title, element }) => {
  return (
    <div className="header">
      {element}
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
