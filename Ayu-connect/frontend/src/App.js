import logo from './logo.svg';
import React,{createContext,useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Profile from './Components/Profile';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Createpost from './Components/Createpost';

import {LoginContext} from "./context/LoginContext";
import Newsfeed from "./Components/Newsfeed";
import Messages from './Components/Messages';
import MyFollowingPost from './Components/MyFollowingPost';

function App() {
const[userLogin,setUserLogin]=useState(false)
  return (
  <BrowserRouter>
   <div className="App">
    <LoginContext.Provider value={{ setUserLogin }}>

     <Navbar login={userLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/signin" element={<SignIn/>}> </Route>
        <Route path="/signup" element={<SignUp/>}> </Route>
        <Route path="/profile" element={<Profile/>}> </Route>
        <Route path="/createPost" element={<Createpost/>}> </Route>
        <Route path="/Newsfeed" element={<Newsfeed/>}> </Route>
        <Route path="/Messages" element={<Messages/>}> </Route>
        <Route path="/MyFollowingPost" element={<MyFollowingPost/>}> </Route>
        </Routes>
        <ToastContainer theme="dark"/>

        </LoginContext.Provider>

    </div>
    </BrowserRouter>
  );
}

export default App;
