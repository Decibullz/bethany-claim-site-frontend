
import './App.css';
import { useEffect, useState } from 'react';
import { getItems } from './services/itemService';
import { getUser, logout } from './services/userService';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'


function App(props) {
  const [ userState, setUserState ] = useState({ user: getUser() });


  const [ items, setItems ] = useState({
    results:{}
  })
  async function getAllItems(){
    const data = await getItems()
    console.log(data)
    setItems(data)
  }
  useEffect(() => {
    getAllItems();
  },[]);

  function handleSignupOrLogin(){
    setUserState({ user:getUser()})
    props.history.push('./search')
  }

  function handleLogout(){
    logout()
    setUserState({user:null})
    props.history.push('/')
  }


  return (
    <div className="App">
         {/* <Header user={userState.user}
     handleLogout={handleLogout}/> */}
      <Switch>
        <Route exact path ='/' render={ props=>
          <HomePage items={items} user={userState.user}/>        
        }/> 
        <Route exact path ='/login' render={props=>
          <LoginPage handleSignupOrLogin={handleSignupOrLogin}/>
        }/>
      </Switch>
    {/* <Footer/> */}
    </div>
  );
}

export default withRouter(App);
