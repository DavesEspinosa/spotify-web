import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Store';
import styles from '../../pages/Home/Home.module.css';
import { Title } from '../Title/Title';
import { ResultCardSearch } from '../ResultCardSearch/ResultCardSearch';

export const AllResults = () => {
    const { state: {  artists, albums, tracks } } = useContext(GlobalContext);

  return (
    <>
    <div className={styles.SectionTitle}>
    <Title>Albums</Title>
    </div>
    <div className={styles.SectionCardsMedium}>
        {albums?.map((album) => {
            return (
                <ResultCardSearch
                    key={album.id}
                    data={album}
                />
            );
        })}
    </div>

    <div className={styles.SectionTitle}>
    <Title>Artists</Title>
    </div>
    <div className={styles.SectionCardsMedium}>
        {artists?.map((artist) => {
            return (
                <ResultCardSearch
                    key={artist.id}
                    data={artist}
                />
            );
        })}
    </div>

    <div className={styles.SectionTitle}>
    <Title>Tracks</Title>
    </div>
    <div className={styles.SectionCardsMedium}>
        {tracks?.map((track) => {
            return (
                <ResultCardSearch
                    key={track.id}
                    data={track}
                />
            );
        })}
    </div>
    </>
  )
}
