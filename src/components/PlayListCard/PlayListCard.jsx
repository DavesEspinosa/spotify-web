import React from 'react'
import { Link } from 'react-router-dom'
import { PlayButton } from '../PlayButton/PlayButton'
import { TextBold } from '../TextBold/TextBold'
import styles from './PlayListCard.module.css'

export const PlayListCard = ({playList}) => {
  return (
      <>
      {playList &&
        <div className={styles.PlaylistCardBox}>
            <div className={styles.PlaylistCard}>
                <div className={styles.ImgBox}>
                    {playList.images && playList.images?.length > 0 &&
                        <img src={playList.images[0].url} alt={playList.name} />
                    }
                    {playList.images.length === 0 && 
                        <img src="https://dailymix-images.scdn.co/v2/img/04cd9bccf59e8061f13e779d1001975a60fb837a/2/tr/default" alt={playList.name} />
                    }
                </div>
                <div className={styles.Title}>
                    <TextBold>{playList.name}</TextBold>
                </div>
            </div>
            <div
                className={styles.IconBox}
            >
                <Link to={`/${playList.type}/${playList.id}`}>
                    <PlayButton />
                </Link>
            </div>
        </div>
    }
      </>
  )
}
