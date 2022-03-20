import React from 'react'
import styles from './ResultCardSearch.module.css'
import { TextBold } from '../TextBold/TextBold'
import { TextRegular } from '../TextRegular/TextRegular'
import { Link } from 'react-router-dom'

export const ResultCardSearch = ({data}) => {
  return (
      <>
        {data &&
        <div className={styles.ResultCardSearchBox}>
            <Link to={`/${data.type}/${data.id}`}>
            <div className={styles.ResultCardSearch}>
                { data.images ? ( 
                    <div className={styles.ImgBox}>
                        {data.images && data.images?.length > 0 &&
                            <img src={data.images[1]?.url} alt={data.name} />
                        }                   
                        {data.images?.length === 0 && 
                            <img src="https://dailymix-images.scdn.co/v2/img/04cd9bccf59e8061f13e779d1001975a60fb837a/2/tr/default" alt={data.name} />
                        }
                    </div>
                ) : (
                    <div className={styles.ImgBox}>
                        <img src="https://t.scdn.co/images/60075fbc12304968941c7445a971fb9d.jpeg" alt={data.name} />
                    </div>
                )
                
                }
                <div className={styles.Title}>
                    <TextBold>{data.name}</TextBold>
                    { data &&
                         <TextRegular>{data.name} </TextRegular>
                    }
                </div>                
            </div>
            </Link>
        </div>
       }   
      </>
  )
}
