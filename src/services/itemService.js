export function getItems(items){
    return fetch('http://localhost:3000/items').then(res=>res.json())
}

export function deleteItem(item){
    console.log(item)
    return fetch('http://localhost:3000/items/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json'
        },
       body: JSON.stringify(item)
       
    })
}