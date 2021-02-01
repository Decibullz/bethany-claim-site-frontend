import { useState } from "react";
import { Link } from "react-router-dom";



export default function AddItem(props){

    const [formState , setFormState ]= useState({
        name:"",
        image:"",
        description:""
    })

    function handleChange(evt) {
        setFormState((prevState)=>({
          ...prevState,
          [evt.target.name]:evt.target.value
        }))
      }

      function addNewItem(lostItem) {
        const BASE_URL = 'https://bethany-lnf-server.herokuapp.com/items'
        return fetch(BASE_URL + '/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(lostItem)
        }).then(response => {
            if(response.ok) return response.json();
    }).then(setFormState({
        name:"",
        image:"",
        description:""
    })).then(alert('Item Added Successfully!'))}

      async function handleSubmit(evt) {
        try {
          await addNewItem(formState)
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
      }

    function formValid(){
        return !!(formState.name && formState.description && formState.image)
    }


    return(
        <main className="Page">
            <div className="transbox">
            <h1>
            Add Item
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input value={formState.name} name="name" placeholder='Claim Id' className = "form-control" onChange={handleChange} type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input value={formState.image} name = "image" placeholder='Image URL' className = "form-control" onChange={handleChange} type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input value={formState.description} name = "description" placeholder='Description' className = "form-control" onChange={handleChange} type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className = "col-sm-12">
                        <input disabled= {!formValid()} value = 'Add Item' className = "form-control" type="submit"/>
                        <Link to= '/' >Cancel</Link>
                    </div>
                </div>
            </form>
                </div>
            </main>
    )
}