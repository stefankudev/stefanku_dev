import type { ReactNode } from 'react';
import cn from 'classnames';
import css from './Card.module.css';

interface CardProps {
  title?: string;
  titleSeperator?: boolean;
  children?: ReactNode;
  style?: React.CSSProperties;
  margin?: string;
  padding?: string;
}

export default function Card({
  title,
  titleSeperator,
  children,
  style,
  margin,
  padding,
}: CardProps) {
  return (
    <div
      className={cn(css.card)}
      style={{
        ...style,
        margin,
        padding,
      }}
    >
      {title ? <h3>{title}</h3> : null}
      {titleSeperator ? <hr className={cn(css.fancyHr)} /> : null}
      {children}
    </div>
  );
}
