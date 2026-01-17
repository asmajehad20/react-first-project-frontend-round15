import React from 'react'
import style from './Portfolio.module.css'
import cabin from './../assets/cabin.png'
import cake from './../assets/cake.png'
import circus from './../assets/circus.png'
import game from './../assets/game.png'
import safe from './../assets/safe.png'
import submarine from './../assets/submarine.png'

export default function Portfolio() {
    const images = [cabin, cake, circus, game, safe, submarine]
  return (
    <section className={style.portfolio}>
      <h2 className={style.title}>Portfolio</h2>
      
      <div className={style.gallery}>
        {images.map((img) => (
          <div className={style.card}>
            <img src={img} alt={`Portfolio img`} />
          </div>
        ))}
      </div>
    </section>
  )
}
