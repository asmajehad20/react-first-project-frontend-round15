import React from 'react'
import style from './Hero.module.css'
import avatar from './../assets/avatars.svg'

export default function Hero() {
    console.log(style);
  return (
    <section className={style.hero}>
      <img src={avatar} alt="Avatar" className={style.avatar} />

      <h1 className={style.title}>Start Bootstrap</h1>

      <p className={style.subtitle}>
        Graphic Artist - Web Designer - Illustrator
      </p>
    </section>
  )
}
