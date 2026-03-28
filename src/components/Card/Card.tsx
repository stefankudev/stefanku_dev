import type { ReactNode } from 'react';
import cn from 'classnames';
import css from './Card.module.scss';

type CardVariant = 'default' | 'title' | 'project' | 'testimonial';

interface CardProps {
  title?: string;
  titleSeperator?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties;
  margin?: string;
  padding?: string;
  variant?: CardVariant;
}

export default function Card({
  title,
  titleSeperator,
  children,
  style,
  margin,
  padding,
  variant = 'default',
}: CardProps) {
  const variantClass = variant !== 'default' ? css[`card--${variant}`] : '';

  return (
    <div
      className={cn(css.card, variantClass)}
      style={{
        ...style,
        margin,
        padding,
      }}
    >
      {title ? <h3 className={cn(css.card__title)}>{title}</h3> : null}
      {titleSeperator ? <hr className={cn(css.card__divider)} /> : null}
      {children}
    </div>
  );
}
