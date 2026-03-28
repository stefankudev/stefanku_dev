import type { ReactNode } from 'react';
import cn from 'classnames';
import css from './TestimonialCard.module.scss';
import Card from '../Card/Card';

interface TestimonialCardProps {
  name?: string;
  jobTitle?: string;
  text?: ReactNode;
  photo?: string;
}

export default function TestimonialCard({
  name = 'Firstname Lastname',
  jobTitle = 'Job Title',
  text = 'Testimonial text goes here.',
  photo = '',
}: TestimonialCardProps) {
  return (
    <Card variant="testimonial">
      <div>
        <img
          className={cn(css.testimonialCard__img)}
          alt={'A photo of ' + name}
          src={photo}
          loading="lazy"
        />
      </div>
      <div>
        <h4 className={cn(css.testimonialCard__name)}>{name}</h4>
        <p className={cn(css.testimonialCard__jobTitle)}>{jobTitle}</p>
        <p className={cn(css.testimonialCard__text)}>{text}</p>
      </div>
    </Card>
  );
}
