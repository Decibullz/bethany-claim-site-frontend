
import './App.css';
import { useEffect, useState } from 'react';
import { getItems } from './services/itemService';
import { getUser, logout } from './services/userService';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignupPage from './pages/SignupPage';
import SeeVero from './pages/SeeVero';
import AddItem from './components/AddItem/AddItem';


function App(props) {
  const [ userState, setUserState ] = useState({ user: getUser() });


  const [ itemData, setItemData ] = useState({
    results:{}
  })
  async function getAllItems(){
    const data = await getItems()
    console.log(data)
    setItemData(data)
  }
  useEffect(() => {
    getAllItems();
  },[]);

  function handleSignupOrLogin(){
    setUserState({ user:getUser()})
    props.history.push('/')
  }

  function handleLogout(){
    logout()
    setUserState({user:null})
    props.history.push('/')
  }

  function NotFound(){
    return(
    <div className='Page'>
      <h1>404 not found</h1>
    </div>
    )
  }
  


  return (
    <div className="App">
         <Header user={userState.user}
     handleLogout={handleLogout}/>
      <Switch>
        <Route exact path ='/' render={ props=>
          <HomePage itemData={itemData} user={userState.user}/>        
        }/> 
        <Route exact path ='/login' render={props=>
          <LoginPage handleSignupOrLogin={handleSignupOrLogin}/>
        }/>
         <Route exact path ='/signup' render={props=>
          <SeeVero/>
        }/>
          <Route exact path ='/add' render={props=>
          getUser() ?
          <AddItem/>
          :
          <Redirect to = '/login'/>
        }/>
          <Route exact path ='/createauserverifiedbyveronicasnellprettycoolhowicandothisright' render={props=>
          <SignupPage handleSignupOrLogin={handleSignupOrLogin}/>
        }/>
        <Route component={NotFound}/>
      </Switch>
    <Footer/>
    </div>
  );
}

export default withRouter(App);
