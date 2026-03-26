import Card from '../../components/Card/Card'
import cn from 'classnames'
import css from './VibeCheck.module.css'

export default function SkillsCheck() {
  return (
    <Card>
      <h3>
        Skills check <span id={cn(css.vibeCheckEmoji)}>👇</span>
      </h3>
      <hr className={cn(css.fancyHr)} />
      <Card>
        <p>Stuff goes here...</p>
      </Card>
    </Card>
  )
}
