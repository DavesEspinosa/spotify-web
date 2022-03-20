import React from 'react'
import styles from './Title.module.css'

export const Title = ({children}) => {
  
  return (
    <h1 className={styles.text}>
        {children}
    </h1>
  )
}
