import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Store';
import { Searcher } from '../Searcher/Searcher';

import styles from './Header.module.css'

export const Header = () => {
  const { state: { user, searchQuery } } = useContext(GlobalContext);
  return (
    <>
      { user && 
        <nav className={styles.Header}>
            <div>
                <span>
                    <Searcher searchQuery={searchQuery}/> 
                </span>
                <span>
                <button className={styles.ProfileBtn}>
                    {user.display_name}
                </button>
                </span>
            </div>
        </nav>
      }
    </>

  )
}
