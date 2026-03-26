import Card from '../../components/Card/Card'
import cn from 'classnames'
import css from './SkillsCheck.module.css'

export default function SkillsCheck() {
  return (
    <Card>
      <h3>
        Skills check <span id={cn(css.skillsCheckEmoji)}>👇</span>
      </h3>
      <hr className={cn(css.fancyHr)} />
      <Card>
        <p>**Add:**
          - TypeScript, AWS, CDK, Terraform (with logos and perfect accessibility)
          - AWS DVA-C02 certification badge
          - GitHub link
          - Skills categories: Frontend, Backend, Cloud/DevOps
          - "Specialties" section: "Cloud Architecture", "Financial Services", "TDD"</p>
      </Card>
    </Card>
  )
}
