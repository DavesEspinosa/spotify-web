import React from 'react'
import styles from './TextRegular.module.css'

export const TextRegular = ({children}) => {
  return (
    <p className={styles.text}>
        {children} 
    </p>
  )
}
