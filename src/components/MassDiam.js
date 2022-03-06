import solarJSON from "../solar_system.json";
import class_attributes from "../class_attributes.json";
import "../css/massdiam.css";
import Planets from "./Planets";

function MassDiam(props) {
  const sun = solarJSON[0];
  let classSuffix = "";
  const radioValue = props.radioValue;
  const planets = props.planets;


  // CONDITIONALLY RENDERS CLASS NAMES TO DETERMINE
  // WHICH STYLES ARE ACTIVE PER RADIO VALUE
  function conditionalClassSuffix() {
    if(radioValue === "diameters"){
      (classSuffix = class_attributes[1].suffix)
    } else{
      (classSuffix = class_attributes[0].suffix)
    }
  }
  conditionalClassSuffix()

  // CONDITIONALLY RENDERS THE <p> SUN METRICS </p>
  // DEPENDING ON DIAMETERS OR MASSES RADIO BUTTON VALUE
  function conditionalSunMetric(){
    let pTag = ''
    if(radioValue === 'masses'){
      pTag = <p className="sun-p">{sun.mass.toLocaleString()}</p>
    } else {
      pTag = <p className="sun-p">{sun.diameter.toLocaleString()}</p>
    }
    return pTag
  }

  return (
    <div className="massdiam-container">
      <div className={`${"massdiam-" + sun.value} ${sun.value + classSuffix}`}>
        <div className="massdiam-data-container">

          <div className="sun-p-wrapper">
            <p className="sun-p">{sun.name}</p>

            {conditionalSunMetric()}
          </div>

          <Planets radioValue={radioValue} planets={planets}/>

        </div>
      </div>
    </div>
  )
}
export default MassDiam;
