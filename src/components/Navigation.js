import class_attributes from "../class_attributes.json";
import "../css/navigation.css";

function Navigation(props) {
  function onXClick() {
    props.onClick();
  }


  function onRadioChange(element) {
    props.onChange(element);
  }

  return (
    <div className="menu-container">
      {/* MENU HEADERS */}
      <h1 className="header">Solar System</h1>
      <div className={`menu-wrapper ${props.burger ? null : "display-none"}`}>
        <button className="menu-close-x" onClick={onXClick}></button>
        <ul className="menu">
          {/* MENU LIST ITEMS TEMPLATED */}
          {class_attributes.map((attribute, index) => (
            <li key={attribute.value + 1} onChange={onRadioChange}>
              <input
                type="radio"
                id={attribute.value}
                name="radio"
                value={attribute.value}
                defaultChecked={index === 0}
              />
              <label htmlFor={attribute.value} className="menu-link">
                {attribute.nav_link}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="subheader-wrapper">
        <h3 className="header">Planetary Masses</h3>
        <p className="header"> In Kilograms (10^24kg)</p>
      </div>
    </div>
  );
}

export default Navigation;
