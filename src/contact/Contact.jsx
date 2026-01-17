import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
    console.log(style)
  return (
    <section className={style.contact}>
      <h2 className={style.title}>Contact Me</h2>

      <form className={style.form}>
        <input type="text" placeholder="Full Name" required />

        <input type="email" placeholder="Email Address" required />
        
        <input type="tel" placeholder="Phone Number" required />

        <textarea placeholder="Message" rows={3} required></textarea>

        <button type="submit" className={style.submitButton}>
          Send
        </button>
      </form>
    </section>
  )
}
