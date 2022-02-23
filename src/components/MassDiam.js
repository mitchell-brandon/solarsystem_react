import solarJSON from "../solar_system.json";
import "../css/massdiam.css";
import Planets from "./Planets";

function MassDiam(props) {
  // GLLOBAL VARIABLES
  const sun = solarJSON[0];
  let classSuffix = "-mass";
  const radioValue = props.radioValue;

  //FUNCTIONS
  function conditionalClassSuffix() { // CONDITIONALLY RENDERS CLASS NAMES TO DETERMINE
    radioValue === "diameters"        // WHICH STYLES ARE ACTIVE PER RADIO VALUE
    ? (classSuffix = "-diam")
    : (classSuffix = "-mass")
  }
  

  //FUNCTION INVOKATIONS
  conditionalClassSuffix()

  return (
    <div className="massdiam-container">
      <div className={`${"massdiam-" + sun.value} ${sun.value + classSuffix}`}>
        <div className="planets-content-container">
          <div className="sun-p-wrapper">
            <p className="sun-p">{sun.name}</p>
            {radioValue === "masses" ? (
              <p className="sun-p">{sun.mass.toLocaleString()}</p>
            ) : (
              <p className="sun-p">{sun.diameter.toLocaleString()}</p>
            )}
          </div>
          <Planets radioValue={radioValue}/>
        </div>
      </div>
    </div>
  )
}
export default MassDiam;
