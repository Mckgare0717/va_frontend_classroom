import "./MobileMenu.css"
import {ReactComponent as SearchIcon} from "../../Assets/Icons/SearchIcon.svg"
import {ReactComponent as CartIcon} from "../../Assets/Icons/CartIcon.svg"

const MobileMenu = () => {
    return(
        <div className="mobile-menu">
            <CartIcon/>
            <div className="searchCont">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
            </div>
            <div className="mobile-menu-items text-label">
                    <a href="/">Home</a>
                    <a href="/">Learn</a>
                    <a href="/">Shop</a>
                    <a href="/">Explore</a>
            </div>
        </div>
    )
}
export default MobileMenu; 