import TitleCard from './sections/TitleCard/TitleCard'
import SkillsCheck from './sections/VibeCheck/SkillsCheck'
import Testimonials from './sections/Testimonials/Testimonials'
import Projects from './sections/Projects/Projects'
import CommunityWork from './sections/Talks/CommunityWork'
import Hobbies from './sections/Hobbies/Hobbies'
import ContactDetails from './sections/ContactDetails/ContactDetails'

import css from './App.module.css'
import cn from 'classnames'

function App() {
  return (
    <main>
      <TitleCard
        tagline="Senior Engineer"
      />
      <SkillsCheck codeWarsBadgeSize="large" />
      <Projects />
      <CommunityWork />
      <Testimonials />
      <Hobbies />
      <footer className={cn(css.footer)}>
        <ContactDetails />
      </footer>
    </main>
  )
}

export default App
