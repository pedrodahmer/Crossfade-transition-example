import { useState } from 'react'
import styles from '../styles/Home.module.scss'

import {slides} from '../slides'
import {} from 'react-slideshow-image'

export default function Home() {
  const [index, setIndex] = useState(0)
  
  function handleIncrement(){
    setIndex(index + 1)
    
    index == 3 && (
      setIndex(0)
    )
  }

  function handleDecrement(){
    setIndex(index - 1)
    
    index == 0 && (
      setIndex(3)
    )
  }
  
  return (
    <div className={styles.container}>
     <div className={styles.slide}>
        <img src={slides[index].image} alt="slideImg" />

        <h1>{slides[index].title}</h1>

        <p>{slides[index].subtitle}</p>
     </div>

     <button onClick={handleIncrement}>clica eu pra avançar</button>
     <button onClick={handleDecrement}>clica eu pra voltar</button>
    </div>
  )
}
