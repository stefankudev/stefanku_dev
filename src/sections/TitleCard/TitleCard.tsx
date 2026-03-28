import cn from 'classnames';
import css from './TitleCard.module.css';
import Button from '../../components/Button/Button';
import { CV_URL, EMAIL_URL, LINKEDIN_URL } from '../../constants/links';

interface TitleCardProps {
  showAvailability?: boolean;
  preferredWork?: string[];
  tagline?: string;
}

const renderAvailabilitySection = () => (
  <p>
    I'm currently <span id={cn(css.available)}>✅ available</span> for full time and contract roles.
  </p>
);

export default function TitleCard({
  showAvailability = true,
  tagline = 'Senior Engineer',
}: TitleCardProps) {
  return (
    <div className={cn(css.special, css.card)}>
      <img id={cn(css.profilePicture)} src="/Stefan_Kudev.jpg" alt="A photograph of Stefan Kudev" />
      <h1>
        Stefan Ku<em>dev</em>
      </h1>
      <h2>{tagline}</h2>
      <hr className={cn(css.fancyHr)} />
      <div className={cn(css.titleCardParagraphs)}>
        {showAvailability && renderAvailabilitySection()}

        <section className={cn(css.contactButtonContainer)}>
          <Button
            href={CV_URL}
            label="Download CV"
            logoSrc="/logos/pdf.svg"
            logoAlt="PDF"
            external
            small
          />
          <Button href={EMAIL_URL} label="Email" logoSrc="/logos/gmail.svg" logoAlt="Gmail" small />
          <Button
            href={LINKEDIN_URL}
            label="LinkedIn"
            logoSrc="/logos/linkedin.svg"
            logoAlt="LinkedIn"
            external
            small
          />
        </section>
      </div>
    </div>
  );
}
