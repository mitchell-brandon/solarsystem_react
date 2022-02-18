import solarJSON from "../solar_system.json";
import "../css/planets.css";

function Planets(props) {
  //GLOBAL VARIABLES
  let classSuffix = props.classSuffix; //BEING PASSED FROM PARENT, MASSDIAM
  let radioValue = props.radioValue

  //FUNCTIONS
  function renderPlanets(object) { // renders all planets, even saturn with all its beauty
    return object.value === "saturn" ? (
      <div className={`planet ${object.value} ${object.value + classSuffix}`}>
        <div className="saturn-ring"></div>
      </div>
    ) : (
      <div
        className={`planet ${object.value} ${object.value + classSuffix}`}
      ></div>
    );
  }

  function renderMetric(object){ //conditionally renders planetary mertrics. diam or mass
    return radioValue === 'diameters' ?
    <p>{object.diameter.toLocaleString()}</p>
    :
    <p>{object.mass.toLocaleString()}</p>
  }

  //FUNCTION INVOCATIONS
  return (
    <div className="planets-container">
      {solarJSON.map((object) => (
        <div className="planet-container" key={object.id}>
          <div className="planet-wrapper">{renderPlanets(object)}</div>
          <p>{object.name}</p>
          {renderMetric(object)}
        </div>
      ))}
    </div>
  );
}

export default Planets;
