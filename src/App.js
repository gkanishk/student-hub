import React from 'react';
import './App.css';
import Login from './Components/Login'
import Feeds from './Components/Feeds'
import SignUp from './Components/SignUp'
import Profile from './Components/Profile'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar'
import {auth} from './firebase'

function App() {
  const [user,setUser]=React.useState(null)
  React.useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
      setUser(user);
      localStorage.setItem('User',user.email);
    }
      else{
      setUser(null);
      localStorage.removeItem('User');
    }
    })
  }, [])
  return (
    <Router>
    <div className="App">
    <NavigationBar/> 
        <Switch>
          <Route exact path='/'>
            <Feeds/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route path='/home'>
            <Feeds/>
          </Route>
          <Route path='/signup'>
            <SignUp/>
          </Route>
          <Route path='/Profile'>
            <Profile/>
          </Route>
        </Switch>
        {/* {user?<Redirect to='/home'/>:<Redirect to='/'/>} */}
    </div>
    </Router>
  );
}

export default App;
