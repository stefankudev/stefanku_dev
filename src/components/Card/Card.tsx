import type { ReactNode } from 'react'
import cn from 'classnames'
import css from './Card.module.css'

interface CardProps {
  title?: string
  titleSeperator?: boolean
  children?: ReactNode
  style?: React.CSSProperties
}

export default function Card({ title, titleSeperator, children, style }: CardProps) {
  return (
    <div className={cn(css.card)} style={style}>
      {title ? <h3>{title}</h3> : null}
      {titleSeperator ? <hr className={cn(css.fancyHr)} /> : null}
      {children}
    </div>
  )
}
