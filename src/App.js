import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login/Login';
import { Sidebar } from './components/Sidebar/Sidebar';
import { GlobalContext } from './context/Store';
import { Home } from './pages/Home/Home';
import { SelectedItem } from './pages/SelectedItem/SelectedItem';
import styles from'./style/App.module.css';


function App() {
  const { state: { spotifyToken } } = useContext(GlobalContext);

  return (
    <>
    {spotifyToken && (
      <div className={styles.layout}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} /> 
            <Route path="/:type/:id" element={<SelectedItem />} />
        </Routes>
      </div>
    )} 
    {!spotifyToken && <Login />}
      </>
  )
}

export default App