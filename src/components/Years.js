import Graph from "./Graph";
import "../css/years.css";

function Years(props){
    const planets = props.planets;

    return(
        <div>
            <div className='years-sun-container'>
                <div className ='years-sun'></div>
            </div>
           
            <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter} planets={planets}/>

        </div>
    )
};


export default Years;