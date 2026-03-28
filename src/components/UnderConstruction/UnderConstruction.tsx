import cn from 'classnames';
import css from './UnderConstruction.module.scss';

export default function UnderConstruction() {
  return (
    <div className={cn(css.underConstruction__container)}>
      <p className={cn(css.underConstruction__text)}>🚧 Under Construction 🚧</p>
    </div>
  );
}
