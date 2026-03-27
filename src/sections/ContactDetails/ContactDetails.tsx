import cn from 'classnames';
import css from './ContactDetails.module.css';
import Button from '../../components/Button/Button';

export default function ContactDetails() {
  return (
    <footer className={cn(css.footer)}>
      <section className={css.contactText}>You can reach me via:</section>
      <section className={cn(css.contactButtonContainer)}>
        <Button
          href="mailto:stefan.yanchev.kudev+website@gmail.com?subject=Reaching out to you from stefan-ku.dev"
          label="Email"
          logoSrc="/logos/gmail.svg"
          logoAlt="Gmail"
        />
        <Button
          href="https://www.linkedin.com/in/stefankudev/"
          label="LinkedIn"
          logoSrc="/logos/linkedin.svg"
          logoAlt="LinkedIn"
          external
        />
        <Button
          href="https://t.me/stefan_kudev"
          label="Telegram"
          logoSrc="/logos/telegram.svg"
          logoAlt="Telegram"
          external
        />
        <Button
          href="https://m.me/Stefan.Yanchev.Kudev"
          label="Messenger"
          logoSrc="/logos/messenger.svg"
          logoAlt="Messenger"
          external
        />
      </section>
      <div className={css.rainbowBackground}></div>
    </footer>
  );
}
