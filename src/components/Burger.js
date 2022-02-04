import '../css/burger.css'
// BURGER NAV ICON BUILD
function Burger () {
    return (
        <div class='burger-nav-container' onClick='mobileMenuToggle()'>
            <button class='burger-bar-wrapper'>
                <div class='burger-bar'></div>
                <div class='burger-bar'></div>
                <div class='burger-bar'></div>
            </button>
        </div>
    );
};
export default Burger;