import '../css/burger.css'
// BURGER NAV ICON BUILD
function Burger () {
    function onBurgerClick (){
        console.log('geting clicked')
    };
    return (
        <div className='burger-nav-container' onClick={onBurgerClick}>
            <button className='burger-bar-wrapper'>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
            </button>
        </div>
    );
};
export default Burger;