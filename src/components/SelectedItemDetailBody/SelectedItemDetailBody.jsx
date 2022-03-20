import React from 'react'
import { SelectedItemDetailHeader } from '../SelectedItemDetailHeader/SelectedItemDetailHeader'
import styles from './SelectedItemDetailBody.module.css';
import { PlayButton } from '../PlayButton/PlayButton';
import { TextRegular } from '../TextRegular/TextRegular';
import { Tracks } from '../Tracks/Tracks';

export const SelectedItemDetailBody = ({data}) => {
  return (
    <>
    <SelectedItemDetailHeader data={data} />
    <div className={styles.PlaylistIcons}>
        <PlayButton />
        <button 
            className={styles.iconButton} 
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            width="1em"
            viewBox="0 0 16 16"
            className="like_svg__Svg-ulyrgf-0 like_svg__hJgLcF"
            >
            <path d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z" />
            </svg>
        </button>
        <button 
            className={styles.moreIcon} 
        >
        <svg 
            height="1em" 
            width="1em" 
            viewBox="0 0 32 32" 
            >
            <path 
                fill="currentColor"
                d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"></path>
        </svg>
        </button>
    </div>
    <Tracks data={data.uri} />
    <div className={styles.ListHead}>
        <TextRegular>#</TextRegular>
        <TextRegular>POPULAR</TextRegular>
        <svg 
            width="1em" 
            height="1em" 
            viewBox="0 0 16 16" 
            >
            <path 
                d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z" 
                fill="currentColor">
            </path>
        </svg>
    </div>
    </>       

  )
}

