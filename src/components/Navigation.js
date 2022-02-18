import "../css/navigation.css";

function Navigation(props) {
  function onXClick() {
    props.onClick();
  }

  const navLinkAttributes = [
    "masses",
    "diameters",
    "distances",
    "temperatures",
    "days",
    "years",
    "moons",
  ];

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
          {navLinkAttributes.map((attribute, index) => (
            <li key={attribute + 1} onChange={onRadioChange}>
              <input
                type="radio"
                id={attribute}
                name="radio"
                value={attribute}
                defaultChecked={index === 0}
              />
              <label htmlFor={attribute} className="menu-link">
                {attribute[0].toUpperCase() + attribute.slice(1)}{" "}
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
