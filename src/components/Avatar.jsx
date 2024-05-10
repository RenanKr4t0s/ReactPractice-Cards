export default function Avatar(props){
    return(
    <img className="circle-img"
        src= {props.imgUrl}
        alt={props.imgAlt}
    />
    )
}