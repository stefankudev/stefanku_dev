
import Card from '../../components/Card/Card'
import cn from 'classnames'
import css from './CommunityWork.module.css'

interface Item {
  title: string
  location: string
  date: string
}

// TODO:
// - Add: "Mentored 5 developers (formal + ad-hoc arrangements)"
// - Add technical leadership examples
// - Add "Guilds" or "Communities of Practice" if applicable

export function Advocacy() {
  const content: Item[] = [

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

  return (
    <Card title="Advocacy" titleSeperator>
      {content.map((talk, idx) => (
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

  const content: Item[] = [
    {
      title: 'Introduction to Web Development - Community Class',
      location: '💻 Remote | TechBirmingham',
      date: 'October 2020',
    },
  ]
  return (
    <Card title="Mentorship" titleSeperator>
      {content.map((talk, idx) => (
        <Card key={idx} margin={"0 0 0.5rem"} padding={"0.2rem 0.5rem"}>
          <h4 className={cn(css.talkTitle)}>{talk.title}</h4>
          <p className={cn(css.talkLocation)}>{talk.location}</p>
          <span className={cn(css.talkDate)}>📅 {talk.date}</span>
        </Card>
      ))}
    </Card>
  )
}
