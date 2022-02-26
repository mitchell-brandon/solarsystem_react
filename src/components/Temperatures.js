import "../css/temperatures.css";
import Graph from "./Graph";


function Temperatures(props){


    return(
        <div className='temperatures-container'>
            <div className='temperatures-content-container'>
                <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter}/>
            </div>
        </div>
    )
}



export default Temperatures;