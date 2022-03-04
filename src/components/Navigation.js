import class_attributes from "../class_attributes.json";
import "../css/navigation.css";

function Navigation(props) {
  let radioValue = props.radioValue

  function onXClick() {
    props.onClick()
  }


  function onRadioChange(element) {
    props.onChange(element)
  }

  function metricSubheaders(){
    let subHeaders = ''
    if(radioValue === 'masses'){
      subHeaders = [
      <h3 className="header">Planetary Masses</h3>,
      <p className="header"> In Kilograms (10^24kg)</p>
      ]
    } else if (radioValue === 'diameters'){
      subHeaders =[ 
      <h3 className="header">Planetary Diameters</h3>,
      <p className="header"> In Kilometers</p>
      ]
      
    } else if (radioValue === 'distances'){
      subHeaders =[ 
      <h3 className="header">Distances from Sun</h3>,
      <p className="header"> In AU (1=93,000,000mi) </p>
      ]
    } else if (radioValue === 'temperatures'){
      subHeaders =[
      <h3 className="header">Average Surface Tempratures</h3>,
      <p className="header"> In Celsius</p>
      ]
    } else if (radioValue === 'days'){
      subHeaders =[ 
      <h3 className="header">Rotational Period</h3>,
      <p className="header"> Days in Earth hours</p>
      ]
    } else if (radioValue === 'years'){
      subHeaders =[ 
      <h3 className="header">Orbital Period</h3>,
      <p className="header"> A Year in Earth Days</p>
      ]
    } else if (radioValue === 'moons'){
      subHeaders = 
      <h3 className="header">Number of Moons</h3>
    } else {
      subHeaders = ''
    }

    return subHeaders
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
        {metricSubheaders()}
      </div>
    </div>
  )
}

export default Navigation;
