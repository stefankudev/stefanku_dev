import { memo } from 'react';
import cn from 'classnames';
import css from './Button.module.scss';

interface ButtonProps {
  href: string;
  label: string;
  logoSrc: string;
  logoAlt: string;
  external?: boolean;
  small?: boolean;
}

function Button({ href, label, logoSrc, logoAlt, external = false, small = false }: ButtonProps) {
  return (
    <a
      className={cn(css.button, small && css['button--small'])}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <img className={cn(css.button__logo)} src={logoSrc} alt={logoAlt} />
      &nbsp;{label}
    </a>
  );
}

export default memo(Button);
