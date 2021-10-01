import './App.css';
import Header from './compnents/Header/Header';
import Landing from './compnents/Landing/Landing';
import Catagories from './compnents/Catagories/Catagories';
import SignUp from './compnents/SignUp/SignUp';
import {Route, Switch} from 'react-router-dom';
import SignIn from './compnents/SignIn/SignIn';
import Dashboard from './compnents/Dashboard/Dashboard';
import CatagoryContent from './compnents/CatagoryContent/CatagoryContent';
import {useState, useEffect} from 'react';
import Profile from './compnents/Profile/Profile';
import Blog from './compnents/Blog/Blog';

const url = 'http://localhost:8000/api/users/';

function App() {

  const [login, setLogin] = useState({email: '', password: ''});
  const [users, setUsers] = useState([]);
  const [loggedIn, setLogginIn] = useState([]);
  const [browse, setBrowse] = useState(false);

  const [catagoryExpand, setCatagoryExpand] = useState(false);

    function clickHandler(event) {
        (event.target.id === 'catagory') ? setCatagoryExpand(true) : setCatagoryExpand(false)
    }

  function submitHandler(event) {
      event.preventDefault();
      setLogin({
          email: event.target.children[0].children[0].value,
          password: event.target.children[0].children[1].value
      })
      
  }

  const [basicInfo, setBasicInfo] = useState({});
  function formSubmitHandler(event) {
    event.preventDefault();
    setBasicInfo({
        firstName: event.target.children[0].children[2].value,
        lastName: event.target.children[1].children[2].value,
        email: (event.target.children[2].children[2].value === event.target.children[3].children[2].value) ? event.target.children[2].children[2].value : null,
        password: (event.target.children[4].children[2].value === event.target.children[5].children[2].value) ? event.target.children[4].children[2].value : null
    })
    setTimeout(()=> {
        event.target.children[0].children[2].value = '';
        event.target.children[1].children[2].value = '';
        event.target.children[2].children[2].value = '';
        event.target.children[3].children[2].value = '';
        event.target.children[4].children[2].value = '';
        event.target.children[5].children[2].value = '';
    },1000)
    localStorage.setItem('user', JSON.stringify({
        id: found.id,
        firstName: event.target.children[0].children[2].value,
        lastName: event.target.children[1].children[2].value,
        email: (event.target.children[2].children[2].value === event.target.children[3].children[2].value) ? event.target.children[2].children[2].value : null,
        password: (event.target.children[4].children[2].value === event.target.children[5].children[2].value) ? event.target.children[4].children[2].value : null
    }));
}

  function toggleBrowse(event) {
    (event.target.id === 'browseButton') ? setBrowse(true) : setBrowse(false)
  }
  
  let found = users.find(user => user.email === login.email && user.password === login.password)
  console.log(found)
  localStorage.setItem('user', JSON.stringify(found));

  useEffect(() => {
      fetch(url, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "GET"
      })
      .then(res => res.json())
      .then(res => setUsers(res))
      .catch(error => console.log(error))
  },[login, basicInfo])

  return (
    <div className="App" onClick={toggleBrowse}>
      <Header user={found} browse={browse}/>
      {
        (found) ? 

          <Switch>

            <Route path='/' exact>
              <Landing />
              <Catagories clickHandler={clickHandler} catagoryExpand={catagoryExpand}/>
            </Route>

            <Route path='/catagory' exact>
              <CatagoryContent />
            </Route>

            <Route path='/profile' exact>
              <Profile found={found} formSubmitHandler={formSubmitHandler} basicInfo={basicInfo}/>
            </Route>

            <Route path='/blog'>
              <Blog user={found}/>
            </Route>

            <Dashboard user={found} />
            

          </Switch> : 

          <Switch>

            <Route path='/signup' exact>
              <SignUp />
            </Route>

            <Route path='/signin' exact>
              <SignIn submitHandler={submitHandler}/>
            </Route>

            <Route path='/catagory' exact>
              <CatagoryContent />
            </Route>

            <Route path='/' exact>
              <Landing />
              <Catagories />
            </Route>
          </Switch>
      }
      
    </div>
  );
}

export default App;
