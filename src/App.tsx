import TitleCard from './sections/TitleCard/TitleCard'
import SkillsCheck from './sections/SkillsCheck/SkillsCheck'
import Testimonials from './sections/Testimonials/Testimonials'
import Projects from './sections/Projects/Projects'
import CommunityWork from './sections/Talks/CommunityWork'
import Hobbies from './sections/Hobbies/Hobbies'
import ContactDetails from './sections/ContactDetails/ContactDetails'

function App() {
  return (
    <main>
      <TitleCard />
      <SkillsCheck />
      <Projects />
      <CommunityWork />
      <Testimonials />
      <Hobbies />
      <ContactDetails />
    </main>
  )
}

export default App
