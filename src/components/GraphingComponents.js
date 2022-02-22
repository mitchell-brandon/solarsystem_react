import MassDiam from "./MassDiam";
import Distances from "./Distances";

function GraphingComponents(props) {
//STATE

//GLOBAL VARIABLES
  let radioValue = props.radioValue;

  function renderComponents (component) { //DETERMINES CURRENT COMPONENT RENDERING
    if (radioValue === 'diameters') {
        component = <MassDiam radioValue={radioValue} />
    } else if (radioValue === 'masses'){
        component = <MassDiam radioValue={radioValue}/>
    } else if (radioValue === 'distances'){
        component = <Distances radioValue={radioValue}/>
    } else {
        component = null
    }
    return component
  }
//FUNCTION INVOCATIONS
  return (
    <div>
        {renderComponents()};
    </div>
  );
}

export default GraphingComponents;
