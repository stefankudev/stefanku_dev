import type { ReactNode } from 'react'
import Card from '../../components/Card/Card'
import cn from 'classnames'
import css from './Hobbies.module.css'

interface Hobby {
  name: string
  content: ReactNode[]
}

const MyHobbies: Hobby[] = [
  {
    name: '📷 Landscape, portrait, and night photography',
    content: [
      <>
        3,000,000+ views on{' '}
        <a href="https://www.google.com/maps/contrib/112786140174644839336/photos/@52.4685569,-1.9743938,12z/data=!3m1!4b1!4m3!8m2!3m1!1e1" target="_blank" rel="noreferrer">
          Google Maps
        </a>
      </>,
      <>
        Also on{' '}
        <a href="https://www.instagram.com/stefan_kudev/" target="_blank" rel="noreferrer">
          Instagram
        </a>{' '}
        and{' '}
        <a href="https://500px.com/p/stefan_kudev" target="_blank" rel="noreferrer">
          500px
        </a>
      </>,
      <>I love everything Photoshop</>,
      <>I enjoy experimenting with post processing</>,
    ],
  },
  {
    name: '🎮 Casual Gaming',
    content: [< >Currently into Xbox and Switch titles</>, <>Just completed: Super Mario 3D World & Bowser's Fury</>, <>Now Playing: Luigi's Mansion 3</>],
  },
  {
    name: '👟 Fitness',
    content: [< >Lost over 4 stone on my first ever 1-year fitness journey</>, <>Gained some of it back during the lockdowns...</>, <>...but managed to get back on track right after!</>],
  },
]

export default function Hobbies() {
  return (
    <Card title="Hobbies & Interests" titleSeperator>
      {MyHobbies.map((hobby, idx) => (
        <Card key={idx}>
          <h4 className={cn(css.hobbyTitle)}>{hobby.name}</h4>
          <ul className={cn(css.hobbyList)}>
            {hobby.content ? hobby.content.map((el, i) => <li key={i}>{el}</li>) : null}
          </ul>
        </Card>
      ))}
    </Card>
  )
}
