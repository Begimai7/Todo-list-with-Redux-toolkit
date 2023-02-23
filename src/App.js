// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { MainRoutes } from './routes/MainRoutes';

function App() {
  const isAuthorized = useSelector((state) => state.auth.isAuthorized)

  return (
     <div className="App">
      <Header />
      {
        isAuthorized ? <MainRoutes /> : <Login />
      }
      {/* <Routes>
        <Route path='/'/>
      </Routes> */}
    
     
    </div>
  );
}

export default App
 