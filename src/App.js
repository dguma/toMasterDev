import './App.css';
import Header from './compnents/Header/Header';
import Landing from './compnents/Landing/Landing';
import Catagories from './compnents/Catagories/Catagories';
import SignUp from './compnents/SignUp/SignUp';
import {Route, Switch} from 'react-router-dom';
import SignIn from './compnents/SignIn/SignIn';
import Dashboard from './compnents/Dashboard/Dashboard';
import HTMLCatagoryContent from './compnents/HTMLCatagoryContent/HTMLCatagoryContent';
import CSSCatagoryContent from './compnents/CSSCatagoryContent/CSSCatagoryContent';
import JavaScriptCatagoryContent from './compnents/JavaScriptCatagoryContent/JavaScriptCatagoryContent';
import {useState, useEffect} from 'react';
import Profile from './compnents/Profile/Profile';
import Blog from './compnents/Blog/Blog';

const url = 'https://warm-harbor-96907.herokuapp.com/api/users/';
const blogUrl = 'https://warm-harbor-96907.herokuapp.com/api/posts/';

function App() {

  const [login, setLogin] = useState({email: '', password: ''});
  const [users, setUsers] = useState([]);
  const [cyclePosts, setCyclePosts] = useState(false);
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
    if(event.target.id === 'browseButton'
    ){ 
      setBrowse(true)
    } else if(event.target.className === 'blogEditButton') {
      document.querySelector('.blogEdit').style.display = 'flex';
    } else {
      setBrowse(false)
    }
    // console.log(browse)
  }

  function renderPosts(event) {
    event.preventDefault();

    if (event.target.className === 'blogSendButton') {
      setCyclePosts(true)
    } else {
      setCyclePosts(false)
    }

    setTimeout(() => {
      setCyclePosts(false)
    }, 500)
    
}
  
  let found = users.find(user => user.email === login.email && user.password === login.password)
  // console.log(found)
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

  const [posts, setPosts] = useState({});
 useEffect(() => {
        fetch(blogUrl, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "GET"
        })
        .then(res => res.json())
        .then(res => setPosts(res))
        .catch(error => console.log(error))
    },[browse])

    console.log(posts)
    console.log(cyclePosts)


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

            <Route path='/html-catagory' exact>
              <HTMLCatagoryContent />
            </Route>

            <Route path='/css-catagory' exact>
              <CSSCatagoryContent />
            </Route>

            <Route path='/javascript-catagory' exact>
              <JavaScriptCatagoryContent />
            </Route>

            <Route path='/profile' exact>
              <Profile found={found} formSubmitHandler={formSubmitHandler} basicInfo={basicInfo}/>
            </Route>

            <Route path='/blog'>
              <Blog user={found} posts={posts} renderPosts={renderPosts} cyclePosts={cyclePosts}/>
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

            <Route path='/html-catagory' exact>
              <HTMLCatagoryContent />
            </Route>

            <Route path='/css-catagory' exact>
              <CSSCatagoryContent />
            </Route>

            <Route path='/javascript-catagory' exact>
              <JavaScriptCatagoryContent />
            </Route>

            <Route path='/' exact>
              <Landing />
              <Catagories />
            </Route>
          </Switch>
      }
      <div style={{height:'40em'}} />
    </div>
  );
}

export default App;
