export default function List(props) {
    return(
        <div className="item">
            <div>{props.item}</div>
            <div>{props.amount}</div>
            <button className="button" onClick={props.onClick}>Delete</button>
        </div>
    )
}