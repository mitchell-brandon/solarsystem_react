import "../css/moons.css";
import Planets from "./Planets";

function Moons(props){
    const radioValue = props.radioValue
    const planets = props.planets

    function moonCounter(planet) {
        let count = 0
        let countArray = []
        while( count < planet.numberOfMoons){
            count += 1
            countArray.push(count)
        }
        
        let divArray = []
        for (let number of countArray){
          number = <div className='moon'></div>
          divArray.push(number)
        }
        return divArray
    }
    return(
        <div className = 'moons-container'>
            <div className='distances-container'>
                <div className ='distance-sun'></div>
            </div>
            <div className='moons-content-wrapper'>
                <div className='y-values'>
                    <Planets radioValue={radioValue} planets = {planets}/>
                    <div className="moons-vertical-bar"></div>
                </div>
                <ul>
                    {
                        planets.map( (planet) => (
                            <li className={`moon-li-${planet.value}`}> {moonCounter(planet)}</li>
                        ))
                    }
               </ul>
            </div>
        </div>
    )
}


export default Moons;