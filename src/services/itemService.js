export function getItems(items){
    return fetch('http://localhost:3000/items').then(res=>res.json())
}
