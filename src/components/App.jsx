
import CardBuilder from "./CardBuilder"
import Avatar from "./Avatar";

console.log();
function App (){
    return(       
        <div>
        <h1 className="heading">Bateristas do Slipknot</h1>
        <Avatar 
            imgAlt="Logo do Slipknot"
            imgUrl="https://cdn10.bigcommerce.com/s-yhxhf/products/3294/images/4098/a207916145d3811109efa4_m__03573.1407542314.300.300.png?c=2"
        />
         <CardBuilder />
        </div>
    );
};

export default App;