import cn from 'classnames'
import css from './MoreComingSoon.module.css'

interface MoreComingSoonProps {
  moreWhat?: string
}

export default function MoreComingSoon({ moreWhat = '' }: MoreComingSoonProps) {
  return (
    <div className={cn(css.MoreComingSoonContainer)}>
      <p className={cn(css.MoreComingSoonText)}>More {moreWhat} coming soon!</p>
    </div>
  )
}
