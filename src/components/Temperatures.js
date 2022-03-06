import "../css/temperatures.css";
import Graph from "./Graph";


function Temperatures(props){
    const planets = props.planets;

    return(
        <div>
            <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter} planets={planets}/>
        </div>
    )
}



export default Temperatures;