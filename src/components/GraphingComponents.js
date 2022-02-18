import MassDiam from "./MassDiam";
import Distances from "./Distances";

function GraphingComponents(props) {
//GLOBAL VARIABLES
  let radioValue = props.radioValue;
  let component = <MassDiam radioValue={radioValue} />

  //FUNCTIONS
  function conditionalRenderingComponents () { //DETERMINES CURRENT COMPONENT RENDERING
    if (radioValue === 'diameters') {
        component = <MassDiam radioValue={radioValue} />
    } else if (radioValue === 'distances'){
        component = <Distances />
    } else {
        console.log('nope')
    }
  }

//FUNCTION INVOCATIONS
  conditionalRenderingComponents();
  return (
    <div>
      {component}
    </div>
  );
}

export default GraphingComponents;
