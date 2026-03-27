import type { ReactNode } from 'react'
import Card from '../../components/Card/Card'
import cn from 'classnames'
import css from './Hobbies.module.css'

interface Hobby {
  name: string
  content?: ReactNode[]
}

const MyHobbies: Hobby[] = [
  {
    name: '📷 Photography',
    content: [<>Landscape</>, <>Portrait</>, <>Nighttime</>],
  },
    {
    name: '💰 Personal Finance',
    content: [<>Budgeting</>, <>Stocks and Shares ISAs</>, <>Pensions</>],
  },
  {
    name: '👟 Personal Fitness',
    content: [< >Gym-going</>, <>Scenic walks</>, <>Meditation</>],
  },
]

export default function Hobbies() {
  return (
    <Card title="Hobbies / Interests" titleSeperator>
      {MyHobbies.map((hobby, idx) => (
        <Card key={idx} padding={"0.35rem"}>
          <h4 className={cn(css.hobbyTitle)}>{hobby.name}</h4>
          <ul className={cn(css.hobbyList)}>
            {hobby.content ? hobby.content.map((el, i) => <li key={i}>{el}</li>) : null}
          </ul>
        </Card>
      ))}
    </Card>
  )
}
