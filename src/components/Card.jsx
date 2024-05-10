import Avatar from "./Avatar";
import Details from "./Details";

function Card (props){
    return(       
        <div>
            <div className="card">
                <div className="top">
                    <p>{props.id}</p>
                    <h2 className="name">{props.name}</h2>
                   <Avatar 
                        imgUrl={props.imgUrl}
                        imgAlt={props.imgAlt}
                   />
                </div>
                <div className="bottom">
                    <Details text={props.active} />
                    <Details text={props.brieffing} />
                </div>
            </div>
        </div>
    );
}

export default Card