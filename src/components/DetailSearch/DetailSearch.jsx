import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Store';
import { Title } from '../Title/Title';
import styles from '../../pages/Home/Home.module.css';
import { ResultCardSearch } from '../ResultCardSearch/ResultCardSearch';
import { AllResults } from '../AllResults/AllResults';

export const DetailSearch = () => {
  const { state: { artists, albums, tracks, topFive, hasError } } = useContext(GlobalContext);
  return (
    <>
    {(artists && albums && tracks) && (artists.length > 0 || albums.length > 0 || tracks.length > 0) ?
     <AllResults />
    : hasError ? <h2 style={{ color: 'white'}}>No Match</h2> :
      <>
        <div className={styles.SectionTitle}>
          <Title>Top 5 artists</Title>
        </div>
        <div className={styles.SectionCardsMedium}>
            {topFive?.map((artist) => {
                return (
                    <ResultCardSearch
                        key={artist.id}
                        data={artist}
                    />
                );
            })}
        </div>
      </>
    }
    </>
  )
}
