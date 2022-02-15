import '../css/distances.css';
import distancesBar from '../imgs/distances_bar.png';


function Distances () {


    return(
        <div className='distances-container'>
           <div className ='distance-sun'></div>
           <div className='distances-content-container'>
                <img className='distances-bar'src={distancesBar} alt='distances bar'/>
           </div>
        </div>
    )
}

export default Distances;