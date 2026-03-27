import cn from 'classnames'
import css from './ContactDetails.module.css'
      
export default function ContactDetails() {
  return (
   <footer className={cn(css.footer)}>
      <section className={css.contactText}>
        You can reach me via:
      </section>
      <section className={cn(css.contactButtonContainer)}>
        <a href="mailto:stefan.yanchev.kudev+website@gmail.com?subject=Reaching out to you from stefan-ku.dev">
          <img className={cn(css.contactButtonLogo)} src="/logos/gmail.svg" alt="Gmail" />
          &nbsp;Email
        </a>
        <a href="https://www.linkedin.com/in/stefankudev/" target="_blank" rel="noreferrer">
          <img className={cn(css.contactButtonLogo)} src="/logos/linkedin.svg" alt="LinkedIn" />
          &nbsp;LinkedIn
        </a>
        <a href="https://t.me/stefan_kudev" target="_blank" rel="noreferrer">
          <img className={cn(css.contactButtonLogo)} src="/logos/telegram.svg" alt="Telegram" />
          &nbsp;Telegram
        </a>
        <a href="https://m.me/Stefan.Yanchev.Kudev" target="_blank" rel="noreferrer">
          <img className={cn(css.contactButtonLogo)} src="/logos/messenger.svg" alt="Messenger" />
          &nbsp;Messenger
        </a>

      </section>
      <div className={css.rainbowBackground}></div>
   </footer>
  )
}
