import Card from "./Card";
import contacts from "../contacts";

function CardBuilder(){
    const theBuilded = contacts.map(object=>{
        return(
            <Card
                key={object.id}
                id={object.id}
                name={object.name}
                active={object.active}
                imgUrl={object.imgUrl}
                imgAlt={object.imgAlt}
                brieffing={object.brieffing}
            />
        )
    })
    return theBuilded
}

export default CardBuilder