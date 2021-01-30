import './Header.css'
import { Link } from 'react-router-dom'


export default function Header(props){
    return(
        <header className="Header">
            <Link to = '/'>
            <h1>Bethany Senior Living lost and found</h1>
            </Link>
            <nav>
                <ul className="NavLinks">
                    
            <li>{props.user && <Link to='' onClick={props.handleLogout}>Log Out</Link>}</li>
            <li>{props.user && <Link to= '/add'>Add Item</Link>}</li>                   
            <li>{!props.user && <Link to= '/signup'>Signup</Link>}</li>
            <li>{!props.user && <Link to ='/login'>Login</Link>}</li>                        
                 
                </ul>
            </nav>
        </header>
    )
}

