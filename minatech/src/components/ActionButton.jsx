import './ActionButton.css'
export default function ActionButton(props){
    return(
        <>
        <a href={props.href}>
            <button>{props.text}</button>
        </a>
        </>
    )
}