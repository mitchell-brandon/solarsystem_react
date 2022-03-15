import "../css/moons.css";
import Planets from "./Planets";

function Moons(props){
    const radioValue = props.radioValue;
    const planets = props.planets;

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
        <div>
            <div className='moons-sun-container'>
                <div className ='moons-sun'></div>
            </div>

            <div className='moons-content-container'>
                <div className='y-labels-container'>
                    <Planets radioValue={radioValue} planets={planets}/>
                    <div className="y-labels-bar"></div>
                </div>
                <ul>
                    {
                        planets.map( (planet, number) => (   
                            <li className={`moon-li-${planet.value}`} key={number++}> {moonCounter(planet)}</li>
                        ))
                    }
               </ul>
            </div>
        </div>
    )
}


export default Moons;