import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    console.log(style)
  return (
    <>
    <footer className={style.footer}>
      <div className={style.container}>
        
        <div className={style.column}>
          <h4 className={style.heading}>Location</h4>
          <p className={style.location}>2215 John Daniel Drive</p>
          <p className={style.location}>Clark, MO 65243</p>
        </div>

        <div className={style.column}>
          <h4 className={style.heading}>Around the Web</h4>
          <div className={style.socialIcons}>
            <a href="#" className={style.icon}><i className="bi bi-facebook"></i></a>
            <a href="#" className={style.icon}><i className="bi bi-twitter"></i></a>
            <a href="#" className={style.icon}><i className="bi bi-linkedin"></i></a>
            <a href="#" className={style.icon}><i className="bi bi-dribbble"></i></a>
          </div>
        </div>

        <div className={style.column}>
          <h4 className={style.heading}>About Freelancer</h4>
          <p className={style.aboutText}>
            Freelancer is a free to use, MIT licensed Bootstrap theme created by 
            <span className={style.highlight}> Start Bootstrap</span>.
          </p>
        </div>

      </div>
    </footer>
    <div className={style.footerBottom}>
        <p>Copyright © Your Website 2023</p>
    </div>
    </>
  )
}
