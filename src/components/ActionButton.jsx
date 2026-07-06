import { Link } from "react-router-dom";
import './ActionButton.css'
export default function ActionButton(props){
    return(
        <>
        <Link to={props.to}>
            <button>{props.text}</button>
        </Link>
        </>
    )
}