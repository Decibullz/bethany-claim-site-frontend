import { Link } from "react-router-dom";
import Item from "../components/Item";

export default function HomePage(props){
    return(
        <main className="Page HomePage">
            <div className="transbox">
                
                <h2>Please call 361-541-2429 to claim</h2>
                {!props.user && <h5>Please <Link to='/signup'>Signup</Link> or <Link to='/login'>Login</Link></h5>}
            </div>
            <div className="collection">
             {props.itemData.results.items && props.itemData.results.items.map((item,idx)=>
                <Item key={idx} item={item}/>)}
            </div>
            </main> 
    )
}
