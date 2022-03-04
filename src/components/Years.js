import Graph from "./Graph"
import "../css/years.css";

function Years(props){
    const planets = props.planets
    return(
        <div className='temperatures-container'>
            <div className='distances-container'>
                <div className ='distance-sun'></div>
            </div>

            <div className="temperatures-content-container">
                <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter} planets={planets}/>
            </div>
        </div>
    )
};


export default Years;