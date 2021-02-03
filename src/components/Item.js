import {deleteItem} from '../services/itemService'


export default function Item(props){
    const deleteOneItem = async (id) => {

        await deleteItem({
          itemId: id
        })
        window.location.reload(false)
      }


    return( 
        <div className="Item">
            <h1>Claim # {`${props.item.name}`}</h1>
            <img src={`${props.item.image}`} alt='Lost Item'/>
            <p>{`${props.item.description}`}</p>
            {props.user && <button onClick={()=>deleteOneItem(props.item._id)}>&nbsp;❌ &nbsp;</button>}
        </div>
    )
}