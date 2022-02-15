 import '../css/massdiam.css';
 import PlanetTemplate1 from './PlanetTemplate1';



 function Diameters(props){
     return(
        <div className='massdiam-container'>
            <PlanetTemplate1 radioValue={props.radioValue}/>
        </div>
     )
 }



 export default Diameters;