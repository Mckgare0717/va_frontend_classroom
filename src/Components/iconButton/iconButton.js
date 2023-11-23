import "./iconButton.css"
import {ReactComponent as UserIcon} from "../../Assets/Icons/UserIcon.svg"

const  IconButton=({link,text,img})=>{
    return(
        <div className="icon-button">
        {img}
        <a href={link}>{text}</a>
            </div>
        
    )
}

export default IconButton;