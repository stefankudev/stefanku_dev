
import Card from '../../components/Card/Card'
import cn from 'classnames'
import css from './CommunityWork.module.css'

interface Talk {
  title: string
  location: string
  date: string
}

const Talks: Talk[] = [
  {
    title: 'Should you work for a startup?',
    location: '💻 Remote | School of Code',
    date: 'May 2021',
  },
  {
    title: 'Getting started with Chocolatey for Windows',
    location: 'Fusion ⚡ Lightning Talks',
    date: '11 March 2021',
  },
  {
    title: 'Building Your First Chrome Extension',
    location: 'Brum.js ⚡ Lightning Talks',
    date: '25 February 2021',
  },
]

const Mentoring: Talk[] = [
  {
    title: 'Introduction to Web Development - Community Class',
    location: '💻 Remote | TechBirmingham',
    date: 'October 2020',
  },
]

export function Advocacy() {
  return (
    <Card title="Advocacy" titleSeperator>
      {Talks.map((talk, idx) => (
        <Card key={idx} margin={"0 0 0.75rem"} padding={"0.2rem 0.5rem"}>
          <div className={cn(css.content)}>
            <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
          <p className={cn(css.talkLocation)}>{talk.location}</p>
          <span className={cn(css.talkDate)}>📅 {talk.date}</span>
          </div>
        </Card>
      ))}
     
    </Card>
  )
}

export function Mentorship() {
  return (
    <Card title="Mentorship" titleSeperator>
      {Mentoring.map((talk, idx) => (
        <Card key={idx} margin={"0 0 0.5rem"} padding={"0.2rem 0.5rem"}>
          <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
          <p className={cn(css.talkLocation)}>{talk.location}</p>
          <span className={cn(css.talkDate)}>📅 {talk.date}</span>
        </Card>
      ))}
    </Card>
  )
}
