import { Link } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import Item from "../components/Item";

export default function HomePage(props){
    return(
        <main className="Page HomePage">
            <div className="">
                <h1>Please fill out form at bottom of page to claim items</h1>
            </div>
            <div className="collection">
             {props.itemData.results.items && props.itemData.results.items.map((item,idx)=>
                <Item user={props.user}key={idx} item={item}/>)}
            </div>
            <Contact/>
            </main> 
    )
}
