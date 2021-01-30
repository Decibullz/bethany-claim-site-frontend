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
            <h1>{`${props.item.name}`}</h1>
            <img src={`${props.item.image}`}/>
            <p>{`${props.item.description}`}</p>
            {props.user && <button onClick={()=>deleteOneItem(props.item._id)}>delete</button>}
        </div>
    )
}