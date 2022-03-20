import React, { useContext } from 'react'
import { Logo } from '../Logo/Logo'
import styles from './Sidebar.module.css'
import {GlobalContext} from '../../context/Store'
import { TextRegular } from '../TextRegular/TextRegular'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const { state: { playLists } } = useContext(GlobalContext);

  return (
    <nav className={styles.SideNavbar} >
    <div className={styles.Fixed}>
      <div>
          <Logo />
      </div>
      <hr className={styles.hr}/>
      <div>
        <div className={styles.Playlist}>
          {playLists && playLists.map((playList) => {
            return (
              <Link key={playList.id} to={`/${playList.type}/${playList.id}`}>
                <TextRegular key={playList.id}>{playList.name}</TextRegular>
              </Link>
            )
          }
          )}
        </div>
      </div>
    </div>
    <div 
        className={styles.changeWidth}
    ></div>
  </nav>
  )
}
