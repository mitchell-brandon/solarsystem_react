import "../css/graph.css";
import Planets from "./Planets";

function Graph( props) {
    const radioValue = props.radioValue
    const planets = props.planets

    function rangeCounter(){
        let rangeArguments = ''

        // RANGECOUNTER IS BEING INVOKED HERE, FUNCTION LIVES IN GRANDPARENT GRAPHINGCOMPONENTS.JS
        // IT TAKES A NESTED AS AN ARGUMENTS
        //YOU CAN HAVE AS MANY NESTED ARRAYS AS YOU NEED.
        // THIS IS THE FORMULAR [LOWEST-VALUE, HIGHEST-VALUE, SKIP COUNT INTERVAL]
        if(radioValue === 'temperatures') {
            rangeArguments = props.rangeCounter([[4000, 6000, 500], [-100, 500, 100], [-300, -50, 50]])
        } else if ( radioValue === 'days') {
            rangeArguments = props.rangeCounter([[4500, 6000, 500], [300, 1000, 100], [0, 25, 5]])
        } else if (radioValue === 'years'){
            rangeArguments = props.rangeCounter([[0, 60000, 10000], [3000, 5000, 1000], [0, 700, 100]])
        } else {
            console.log('there aint nothing here')
        }
        return rangeArguments
    }


    return(
        <div className="graph-container">
            <div className='graph-wrapper'>
                <ul className='data-list'>
                    {
                        rangeCounter().map( (value) => (
                            value === 'data-division' 
                            ? 
                            value = <div className='horizontal-bar'> </div>
                            :
                            <li key={value} className='data-y-value'>{value.toLocaleString()}</li>
                        ))
                    }
                    <Planets radioValue={radioValue} planets={planets}/>
                </ul>
                <div className="vertical-bar"></div>
            </div>
        </div>
    )
}


export default Graph;