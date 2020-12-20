import React,{useState} from 'react';
import Feed from './Feed';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login';


function App(){
  
  var [user,setUser]=useState('sakthi');
  return (
    <div className="app">
      {!user?(
           <Login setUser={setUser}/>
      ):(
        <>
        <Header user={user}/>
          <div className="app__body">
                 <Sidebar user={user}/>
                 <Feed user={user}/>
          </div>
          </>
           )}
    </div>
  );
}

export default App;
