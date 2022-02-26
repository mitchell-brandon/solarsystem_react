import Graph from "./Graph"


function Years(props){
    return(
        <div className='temperatures-container'>
            <div className='temperatures-content-container'>
                <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter}/>
            </div>
        </div>
    )
};


export default Years;