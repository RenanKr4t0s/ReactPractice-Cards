
import Card from "./Card";
import CardBuilder from "./CardBuilder"
import contacts from "../contacts";

console.log();
function App (){
    return(       
        <div>
        <h1 className="heading">Bateristas do Slipknot</h1>
        <Card
        name={contacts[0].name}
        active={contacts[0].active}
        imgUrl={contacts[0].imgUrl}
        imgAlt={contacts[0].imgAlt}
        brieffing={contacts[0].brieffing}
         />

         {/* Deixei aqui embaixo um princípio de CardBuilder que quero ainda conseguir resolver */}
         <CardBuilder />


        </div>
    );
};

export default App;