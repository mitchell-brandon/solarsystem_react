import "../css/temperatures.css";
import Graph from "./Graph";


function Temperatures(props){
    const planets = props.planets

    return(
        <div className='temperatures-container'>
            <div className='temperatures-content-container'>
                <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter} planets={planets}/>
            </div>
        </div>
    )
}



export default Temperatures;