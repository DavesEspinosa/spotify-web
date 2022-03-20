import React from 'react'
import { TextBold } from '../TextBold/TextBold'
import { Title } from '../Title/Title'
import styles from './SelectedItemDetailHeader.module.css'

export const SelectedItemDetailHeader = ({data}) => {
  return (
    <>
        { data &&
            <div className={styles.selectedItemDetail}>
            <div className={styles.imgBox}>
                { data.images && data.images?.length > 0 &&
                <img src={data.images[0].url} alt={data.name}/>
                }
                { (data.images?.length === 0 || !data.images) &&
                <img src="https://t.scdn.co/images/60075fbc12304968941c7445a971fb9d.jpeg" alt={data.name}/>
                }
            </div>
            <div className={styles.textBox}>
                <h3 className={styles.textSmall}>{data.type?.toUpperCase()}</h3>
                <Title></Title>
                <h1>{data.name}</h1>
                <div className={styles.Artist}>
                    { data.images && data.images?.length > 0 &&
                        <figure>
                            <img src={data.images[0].url} alt={data.name}/>
                        </figure>
                    }
                    { data.images?.length === 0 &&
                        <figure>
                            <img src="https://t.scdn.co/images/60075fbc12304968941c7445a971fb9d.jpeg" alt={data.name}/>
                        </figure>
                    }
                    <TextBold>{data.name}</TextBold>
                </div>
            </div>
            </div>
        }
    </>
  )
}
