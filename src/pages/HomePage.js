import { Link } from "react-router-dom";
import Item from "../components/Item";

export default function HomePage(props){
    return(
        <main className="Page HomePage">
            <div className="">
                <h1>Please call 361-541-2429 to claim</h1>
            </div>
            <div className="collection">
             {props.itemData.results.items && props.itemData.results.items.map((item,idx)=>
                <Item user={props.user}key={idx} item={item}/>)}
            </div>
            </main> 
    )
}
