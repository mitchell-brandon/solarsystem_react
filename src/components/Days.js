import Graph from "./Graph"
import "../css/days.css";

function Days(props){
    const planets = props.planets
    return(
        <div className='temperatures-container'>
            <div className='temperatures-content-container'>
                <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter} planets={planets}/>
            </div>
        </div>
    )
};


export default Days;