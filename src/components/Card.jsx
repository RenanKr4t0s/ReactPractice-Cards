import Avatar from "./Avatar";

function Card (props){
    return(       
        <div>
            <div className="card">
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                   <Avatar 
                        imgUrl={props.imgUrl}
                        imgAlt={props.imgAlt}
                   />
                </div>
                <div className="bottom">
                    <p className="info">{props.active}</p>
                    <p className="info">{props.brieffing}</p>
                </div>
            </div>
        </div>
    );
}

export default Card