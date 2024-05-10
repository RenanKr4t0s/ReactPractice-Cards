import Card from "./Card";
import contacts from "../contacts";

function CardBuilder(){
        for(let i=0; i<contacts.length; i++){
            return (
                <Card
                name={contacts[i].name}
                active={contacts[i].active}
                imgUrl={contacts[i].imgUrl}
                imgAlt={contacts[i].imgAlt}
                brieffing={contacts[i].brieffing}
                 />
            )
        }
    return
}

export default CardBuilder