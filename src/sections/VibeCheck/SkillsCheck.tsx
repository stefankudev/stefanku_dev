import Card from '../../components/Card/Card'
import cn from 'classnames'
import css from './VibeCheck.module.css'

interface SkillsCheckProps {
  codeWarsBadgeSize?: string
}

export default function SkillsCheck({ codeWarsBadgeSize = 'large' }: SkillsCheckProps) {
  return (
    <Card>
      <h3>
        Skills check <span id={cn(css.vibeCheckEmoji)}>👇</span>
      </h3>
      <hr className={cn(css.fancyHr)} />
      <Card>
        <div className={cn(css.imageWrapper)}>
          <a href="https://www.codewars.com/users/stefan_kudev" target="_blank" rel="noreferrer">
            <img
              id={css.codewarsImgEmbed}
              src={'https://www.codewars.com/users/stefan_kudev/badges/' + codeWarsBadgeSize}
              alt="Stefan Kudev's score on Codewars"
            />
          </a>
          <img
            id={css.psIQimageEmbed}
            src="/pluralsight_iq_js_core_language_259.png"
            alt="Stefan Kudev's JavaScript Core Language PluralSight IQ"
          />
        </div>
      </Card>
    </Card>
  )
}
