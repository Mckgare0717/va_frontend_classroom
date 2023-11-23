import "./MobileHeader.css"
import Logo from "../Logo/Logo";
import OpenMenuButton from "../OpenMenuButton/OpenMenuButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import IconButton from "../iconButton/iconButton";
import { useNavigate } from "react-router-dom";
import {ReactComponent as UserIcon} from "../../Assets/Icons/UserIcon.svg"
import {ReactComponent as PencilIcon} from "../../Assets/Icons/PencilIcon.svg"
import { useState } from "react";

const MobileHeader = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate =useNavigate()

    return(
        <header className="mobile-header">
            <OpenMenuButton 
                action={() => setIsMenuOpen(!isMenuOpen)} />
            <Logo/>
            {isMenuOpen && <MobileMenu/>}
            <div className="buttons">
            <IconButton link={()=>navigate("/")} text="Sign In" img={<UserIcon/>}/>
            <IconButton link={()=>navigate("/")} text="Sign In" img={<PencilIcon/>}/>
            </div>
        </header>
    )
}
export default MobileHeader;