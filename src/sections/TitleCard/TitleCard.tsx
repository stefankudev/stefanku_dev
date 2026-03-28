import cn from 'classnames';
import css from './TitleCard.module.scss';
import Button from '../../components/Button/Button';
import { CV_URL, EMAIL_URL, LINKEDIN_URL } from '../../constants/links';
import Card from '../../components/Card/Card';

interface TitleCardProps {
  showAvailability?: boolean;
  preferredWork?: string[];
  tagline?: string;
}

const renderAvailabilitySection = () => (
  <p>
    I'm currently{' '}
    <span className={cn(css.titleCard__availability)} aria-label="Available for work">
      ✅ available
    </span>{' '}
    for full time and contract roles.
  </p>
);

export default function TitleCard({
  showAvailability = true,
  tagline = 'Senior Engineer',
}: TitleCardProps) {
  return (
    <Card variant="title">
      <img
        className={cn(css.titleCard__profileImg)}
        src="/Stefan_Kudev.jpg"
        alt="A photograph of Stefan Kudev"
      />
      <h1 className={cn(css.titleCard__name)}>
        Stefan Ku<em>dev</em>
      </h1>
      <h2 className={cn(css.titleCard__tagline)}>{tagline}</h2>
      <hr className={cn(css.titleCard__divider)} aria-hidden="true" />
      <div className={cn(css.titleCard__paragraphs)}>
        {showAvailability && renderAvailabilitySection()}

        <section className={cn(css.titleCard__contactButtons)} aria-label="Contact options">
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
    </Card>
  );
}
