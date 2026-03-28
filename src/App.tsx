import TitleCard from './sections/TitleCard/TitleCard'
import Testimonials from './sections/Testimonials/Testimonials'
import CommunityWork from './sections/Talks/CommunityWork'
import Hobbies from './sections/Hobbies/Hobbies'
import ContactDetails from './sections/ContactDetails/ContactDetails'

function App() {
  return (
    <main>
      <TitleCard showAvailability={false}/>
      <Testimonials/>
      <CommunityWork />
      <Hobbies />
      <ContactDetails />
    </main>
  )
}

export default App
