import React, { useContext} from 'react'
import { DetailSearch } from '../../components/DetailSearch/DetailSearch';
import { Outlet } from 'react-router-dom';
import { GlobalContext } from '../../context/Store';
import { Title } from '../../components/Title/Title'; 
import { Header } from '../../components/Header/Header';
import styles from './Home.module.css';
import { PlayListCard } from '../../components/PlayListCard/PlayListCard';

export const Home = () => {
  const { state: { spotifyToken, shuffledPlayLists, user } } = useContext(GlobalContext);

  return (
    <>
      {spotifyToken && user && shuffledPlayLists &&
        <>
          <div className={styles.Home}>
          <div className={styles.HoverBg}></div>
          <div className={styles.Bg}></div>

          <Header />
          <div className={styles.Content}>
              <section>
                  <div className={styles.SectionTitle}>
                      <Title >{`Some ${user.display_name}'s Playlists`} </Title>
                  </div>

                  <div className={styles.SectionCards}>
                      {shuffledPlayLists.map((playList) => {
                          return (
                              <PlayListCard 
                                  key={playList.id}
                                  playList={playList}
                              />
                          );
                      })}
                  </div>
              </section>

              <section>
              <DetailSearch />
              </section>
           </div>
          </div> 
          <Outlet />
        </>
      }
    </>


  )
}


