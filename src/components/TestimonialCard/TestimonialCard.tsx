import type { ReactNode } from 'react'
import cn from 'classnames'
import css from './TestimonialCard.module.css'

interface TestimonialCardProps {
  name?: string
  jobTitle?: string
  text?: ReactNode
  photo?: string
}

export default function TestimonialCard({
  name = 'Firstname Lastname',
  jobTitle = 'Job Title',
  text = 'Testimonial text goes here.',
  photo = '',
}: TestimonialCardProps) {
  return (
    <div className={cn(css.testimonialCard, css.card)}>
      <div className={cn(css.flexItem)}>
        <img className={cn(css.testimonialImg)} alt={'A photo of ' + name} src={photo} />
      </div>
      <div className={cn(css.flexItem)}>
        <h4 className={cn(css.testimonialName)}>{name}</h4>
        <p className={cn(css.testimonialJobTitle)}>{jobTitle}</p>
        <p className={cn(css.testimonialText)}>{text}</p>
      </div>
    </div>
  )
}
