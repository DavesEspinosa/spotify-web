import React from 'react'
import styles from './PlayButton.module.css'

export const PlayButton = () => {
  return (
      <div className={styles.playBtn} tabIndex="0" role="button" >
        <button 
            className={styles.iconButton} 
        >
             <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                width="1em"
                viewBox="0 0 16 16"
                className="play_svg__Svg-ulyrgf-0 play_svg__hJgLcF"
                >
                <path d="M4.018 14L14.41 8 4.018 2z" />
            </svg>
        </button>
    </div>

  )
}
