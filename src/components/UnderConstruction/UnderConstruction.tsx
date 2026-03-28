import cn from 'classnames';
import css from './UnderConstruction.module.scss';

export default function UnderConstruction() {
  return (
    <section className={cn(css.underConstruction__container)} aria-label="Under construction">
      <p className={cn(css.underConstruction__text)}>
        <span aria-hidden="true">🚧</span> Under Construction <span aria-hidden="true">🚧</span>
      </p>
    </section>
  );
}
