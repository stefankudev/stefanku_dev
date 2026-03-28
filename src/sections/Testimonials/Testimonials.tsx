import type { ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../../components/Card/Card';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

interface Testimonial {
  visible: boolean;
  name: string;
  jobTitle: string;
  text: ReactElement;
  photo: string;
}

const MyTestimonials: Testimonial[] = [
  {
    visible: true,
    name: 'Steve Krause',
    jobTitle: 'Senior Director  |  Getty Images',
    text: (
      <>
        <b>
          Stefan is a dream employee. He's creative, highly skilled, intelligent and highly
          motivated.
        </b>{' '}
        This of course is not easy, being that Stefan works remote, as it requires self-motivation
        and the attributes of a self-starter. No job is too large or small for him - at all times,
        he rises to the occasion.
      </>
    ),
    photo: '/photos/Steve_Krause_gP.jpg',
  },
  {
    visible: false,
    name: 'Christin Weigel',
    jobTitle: 'Senior Manager  |  QualityTaskForce',
    text: (
      <>
        Stefan always shows initiative and continuously looks for new ways to get involved.{' '}
        <b>He takes constructive criticism on board and transforms feedback into actions.</b> The
        work he has produced for us is engaging, full of character, and reflective of our commercial
        goals.
      </>
    ),
    photo: '/photos/Christin_Weigel_QTF.jpg',
  },
  {
    visible: true,
    name: 'David Hall',
    jobTitle: 'Managing Director  |  Virgin Money',
    text: (
      <>
        Stefan has a holistic understanding of consumer markets and knows how to think laterally to
        meet customer need.
      </>
    ),
    photo: '/photos/David_Hall_Virgin_Money_LS.jpg',
  },
  {
    visible: true,
    name: 'Emanuel Halatchev',
    jobTitle: 'Founder  |  AIBC',
    text: (
      <>
        We worked with Stefan at our American Information and Business Center project. So here's how
        it went: we have an idea, we polish it, we share it with Stefan and then a small miracle is
        born, usually way beyond our imagination.
      </>
    ),
    photo: '/photos/Emanuel_Halatchev_AIBC.jpg',
  },
  {
    visible: true,
    name: 'Alex Goss',
    jobTitle: 'Product Manager  |  Usborne Foundation',
    text: (
      <>
        <b>
          Stefan has delivered over and above what's expected of him in his role, planning
          improvements and executing them well.
        </b>{' '}
        Our company's mission is to help millions of children learn to read, and Stefan takes this
        on board. He's always thinking about how he can make the biggest impact.
      </>
    ),
    photo: '/photos/Alex_Goss_Usborne.jpg',
  },
  {
    visible: false,
    name: 'Karl Harker',
    jobTitle: 'Senior Marketer  |  Packt Publishing',
    text: (
      <>
        Stefan worked on a huge range of responsibilities - designing for web, copywriting,
        developing his excellent understanding of our users, and executing multi-channel campaigns.{' '}
        <b>Generally speaking: if you have a problem, Stefan has a solution.</b> He constantly
        exceeds expectations, delivering assigned tasks to a high standard, as well as developing
        new tools to improve the team's productivity.
      </>
    ),
    photo: '/photos/Karl_Harker_Packt_Publishing.jpg',
  },
  {
    visible: true,
    name: 'Ghie Berry',
    jobTitle: 'Head of Partnerships  |  Day Out With The Kids',
    text: (
      <>
        Stefan bonded with the team straight away, which is a huge testament to his warm and
        friendly personality. He has managed a raft of priorities incredibly well -{' '}
        <b>I am blown away by the quality of work and his evident commercial intelligence.</b>{' '}
        Overall, I really couldn't have recruited better in terms of the big picture.
      </>
    ),
    photo: '/photos/Ghie_Berry_DOWTK.jpg',
  },
  {
    visible: false,
    name: 'Jamie Starr',
    jobTitle: 'Head of Marketing  |  Day Out With The Kids',
    text: (
      <>
        <b>Stefan's design skills are a massive asset to the business.</b> I think very highly of
        him and I think he needs to be nurtured as one of the next generation leaders within this
        business.
      </>
    ),
    photo: '/photos/Jamie_Starr_DOWTK.jpg',
  },
  {
    visible: false,
    name: 'Daniel Mahon',
    jobTitle: 'Head of Tech  |  Day Out With The Kids',
    text: (
      <>
        <b>Stefan is a really nice guy with a huge potential for growth.</b> I really believe he has
        the ability to push us forward as a company in a multitude of ways.
      </>
    ),
    photo: '/photos/Daniel_Mahon_DOWTK.jpg',
  },
  {
    visible: false,
    name: 'Person Person',
    jobTitle: 'JobtitleJobtitle  |  Hargreaves Lansdown',
    text: (
      <>
        TODO: Export all the feedback from Workday and add it here. This is a placeholder
        testimonial.
      </>
    ),
    photo: '/photos/PersonPerson_Hargreaves_Lansdown.jpg',
  },
];

const VisibleTestimonials = MyTestimonials.filter((el) => el.visible);

interface TestimonialsProps {
  useCarousel?: boolean;
}

const renderVisibleTestimonials = () =>
  VisibleTestimonials.map((testimonial) => (
    <TestimonialCard key={testimonial.name} {...testimonial} />
  ));

export default function Testimonials({ useCarousel }: TestimonialsProps) {
  return (
    <Card title="Testimonials" titleSeperator>
      {useCarousel ? (
        <Carousel
          autoPlay
          interval={5000}
          infiniteLoop
          stopOnHover
          emulateTouch
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {renderVisibleTestimonials()}
        </Carousel>
      ) : (
        <div>{renderVisibleTestimonials()}</div>
      )}
    </Card>
  );
}
