import TitleCard from './sections/TitleCard/TitleCard'
import Testimonials from './sections/Testimonials/Testimonials'
import {Advocacy, Mentorship} from './sections/CommunityWork/CommunityWork'
import Hobbies from './sections/Hobbies/Hobbies'
import ContactDetails from './sections/ContactDetails/ContactDetails'

function App() {
  return (
    <main>
      <TitleCard showAvailability={false}/>
      <Testimonials/>
      <Mentorship />
      <Advocacy />
      <Hobbies />
      <ContactDetails />
    </main>
  )
}

export default App
