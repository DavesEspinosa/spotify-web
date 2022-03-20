import React, { useContext, useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { GlobalContext } from '../../context/Store'
import styles from './Tracks.module.css'

export const Tracks = ({data}) => {
    const { state: { spotifyToken } } = useContext(GlobalContext);
    const [isAnObject, setIsAnObject] = useState(true);

    useEffect(() => {
        if (typeof data === 'string') {
            setIsAnObject(false);
        } else if (typeof data === 'object') {
            setIsAnObject(true)
        }
    }, [data])

  return (
    <footer className={styles.footer}>
        { isAnObject ? (
            <SpotifyPlayer
            styles={{
                activeColor: '#fff',
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
                }}
            token={spotifyToken}
            uris={[data.uri]}
            autoPlay={true}
            />
        ) : (
            <SpotifyPlayer
            styles={{
                activeColor: '#fff',
                bgColor: '#333',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
                }}
            token={spotifyToken}
            uris={[data]}
            autoPlay={true}
            />  
        )}
    </footer>
  )
}
