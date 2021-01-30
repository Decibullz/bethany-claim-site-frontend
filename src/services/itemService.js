export function getItems(items){
    return fetch('https://bethany-lnf-server.herokuapp.com/items').then(res=>res.json())
}

export function deleteItem(item){
    console.log(item)
    return fetch('https://bethany-lnf-server.herokuapp.com/items/delete', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json'
        },
       body: JSON.stringify(item)
       
    })
}