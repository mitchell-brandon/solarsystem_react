import '../css/distances.css';
import distancesBar from '../imgs/distances_bar.png';
import Planets from './Planets';


function Distances (props) {
    let radioValue = props.radioValue
    return(
        <div className='distances-container'>
           <div className ='distance-sun'></div>
           <div className='distances-content-container'>
               <div className='distances-content-wrapper'>
                <img className='distances-bar'src={distancesBar} alt='distances bar'/>
                <Planets radioValue={radioValue}/>
                </div>
           </div>
        </div>
    )
}

export default Distances;