import cn from 'classnames';
import css from './ContactDetails.module.scss';
import Button from '../../components/Button/Button';
import { EMAIL_URL, LINKEDIN_URL, TELEGRAM_URL, MESSENGER_URL } from '../../constants/links';

export default function ContactDetails() {
  return (
    <footer className={cn(css.contactDetails__footer)}>
      <section className={cn(css.contactDetails__text)}>Contact me via:</section>
      <section className={cn(css.contactDetails__buttons)}>
        <Button href={EMAIL_URL} label="Email" logoSrc="/logos/gmail.svg" logoAlt="Gmail" />
        <Button
          href={LINKEDIN_URL}
          label="LinkedIn"
          logoSrc="/logos/linkedin.svg"
          logoAlt="LinkedIn"
          external
        />
        <Button
          href={TELEGRAM_URL}
          label="Telegram"
          logoSrc="/logos/telegram.svg"
          logoAlt="Telegram"
          external
        />
        <Button
          href={MESSENGER_URL}
          label="Messenger"
          logoSrc="/logos/messenger.svg"
          logoAlt="Messenger"
          external
        />
      </section>
      <div className={css.contactDetails__rainbow}></div>
    </footer>
  );
}
