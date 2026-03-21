
import Card from '../../components/Card/Card'
import MoreComingSoon from '../../components/MoreComingSoon/MoreComingSoon'
import cn from 'classnames'
import css from './Talks.module.css'

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

const Teaching: Talk[] = [
  {
    title: 'Introduction to Web Development - Community Class',
    location: '💻 Remote | TechBirmingham',
    date: 'October 2020',
  },
]

export default function CommunityWork() {
  return (
    <Card title="Community Work & Tech Talks" titleSeperator>
      {Talks.map((talk, idx) => (
        <Card key={idx}>
          <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
          <p className={cn(css.talkLocation)}>{talk.location}</p>
          <span className={cn(css.talkDate)}>📅 {talk.date}</span>
        </Card>
      ))}
      {Teaching.map((talk, idx) => (
        <Card key={idx}>
          <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
          <p className={cn(css.talkLocation)}>{talk.location}</p>
          <span className={cn(css.talkDate)}>📅 {talk.date}</span>
        </Card>
      ))}
      <MoreComingSoon />
    </Card>
  )
}
