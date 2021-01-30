export default function Item(props){
    return( 
        <div className="Item">
            <h1>{`${props.item.name}`}</h1>
            <img src={`${props.item.image}`}/>
            <p>{`${props.item.description}`}</p>
        </div>
    )
}