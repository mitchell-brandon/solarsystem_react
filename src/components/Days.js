import Graph from "./Graph"


function Days(props){
    return(
        <div className='temperatures-container'>
            <div className='temperatures-content-container'>
                <Graph radioValue={props.radioValue} rangeCounter={props.rangeCounter}/>
            </div>
        </div>
    )
};


export default Days;