import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Store'
import { Home } from '../../pages/Home/Home'
import { loginUrl } from '../../utils/loginSpotify'
import style from './Login.module.css'

export const Login = () => {
  const { state: { spotifyToken} } = useContext(GlobalContext);

  return (
    <>
      {!spotifyToken &&  
        <div className={style.Login}>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify Logo"
            />
            <a href={loginUrl}>LOGIN TO SPOTIFY</a>
        </div>
      } 
    </>
  )
}
