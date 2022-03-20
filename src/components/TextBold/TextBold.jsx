import React from 'react'
import styles from './TextBold.module.css'

export const TextBold = ({children}) => {
  return (
    <p className={styles.text}>
        {children}
    </p>
  )
}
