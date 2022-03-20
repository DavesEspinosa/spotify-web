
import React, { useContext, useEffect  } from 'react'
import { useParams } from 'react-router-dom';
import { SelectedItemDetail } from '../../components/SelectedItemDetail/SelectedItemDetail';
import {GlobalContext} from '../../context/Store'
import styles from './SelectedItem.module.css'


export const SelectedItem = () => {
    const { state: { spotifyToken, artist, album, track, playList }, getArtist, getAlbum, getTrack, getPlaylist } = useContext(GlobalContext);
    const { type, id } = useParams();

    useEffect(() => {
        if (type) {
        switch (type) {
            case 'album':
                getAlbum(id);
                break;
            case 'artist':
                getArtist(id);
                break;
            case 'track':
                getTrack(id);
                break;
            case 'playlist':
                getPlaylist(id);
                break;
            default:
                break;
        }
        }
    }, [id]);

  return (
      <>
      { spotifyToken && (artist || album || track) && 
        <div className={styles.PlaylistPage}>
            <div className={styles.gradientBg}></div>
            <div className={styles.gradientBgSoft}></div>
            <div className={styles.Bg}></div>
        
        <div>
            <SelectedItemDetail data={{artist, album, track, playList}} />
        </div>
        </div>
      }
    </>
  )
}
