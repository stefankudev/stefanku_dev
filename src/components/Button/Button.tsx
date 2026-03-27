import cn from 'classnames';
import css from './Button.module.css';

interface ButtonProps {
  href: string;
  label: string;
  logoSrc: string;
  logoAlt: string;
  external?: boolean;
  small?: boolean;
}

export default function Button({
  href,
  label,
  logoSrc,
  logoAlt,
  external = false,
  small = false,
}: ButtonProps) {
  return (
    <a
      className={cn(css.button, small && css.small)}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <img className={cn(css.logo)} src={logoSrc} alt={logoAlt} />
      &nbsp;{label}
    </a>
  );
}
