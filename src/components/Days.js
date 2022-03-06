import Graph from "./Graph";
import "../css/days.css";

function Days(props){
    const planets = props.planets;

    return(
        <div>
            <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter} planets={planets}/>
        </div>
    )
};


export default Days;