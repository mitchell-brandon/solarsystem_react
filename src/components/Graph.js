import "../css/graph.css";
import solarJSON from "../solar_system.json";

function Graph( props) {
    // idea 1
    //compare the highest and lowest value of temperatures.
    //start skip counting from lowest value
    //if no value in certain integer range, then skip count for the next value
    // or skip count values manually, then conditionaly render the skip counting range

    //idea 2
    // function that takes 3 arguements, range start, range end, skip count interval number
    //it then produces a counter in that range skiping by the specified interval


    // let planetData = []
    // function counter(){ //test function to try and produce the data values compared to planetary
    //     for (let planet of solarJSON){
    //         planetData.push(planet.meanTemperature)
    //     }
    //     let largestValue = Math.max(...planetData);
    //     let smallestValue = Math.min(...planetData);
    //     console.log(largestValue, smallestValue)
    //     let count = smallestValue;

    //     while (count < largestValue){
    //         count = smallestValue += 50
    //         console.log(count)
    //     }
        
    // }
    // counter()

    
    function rangeCounter(){
        const radioValue = props.radioValue
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
            <ul className='data-list'>
                {
                    rangeCounter().map( (value) => (
                        <li key={value}>{value.toLocaleString()}</li>
                        
                    ))
                }
            </ul>
            <div className="vertical-bar"></div>
        </div>
    )
}


export default Graph;