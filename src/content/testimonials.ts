export type Testimonial = {
  visible: boolean;
  name: string;
  jobTitle: string;
  text: string;
  photo: string;
};

const testimonialsHL: Testimonial[] = [
  {
    visible: true,
    name: 'Troy Johnson',
    jobTitle: 'Engineer | BAE Systems',
    text: "If you're looking for a mentor, Stefan's your guy. Whether it's getting promoted, improving code quality, or building a better work/life balance, he's the person to go to. He's honest, clear, and direct, with just the right level of empathy. He won't hold your hand, but he will point you in the right direction. Without his guidance, I'm not sure I would have landed a role that aligns so well with my goals and values.",
    photo: '/photos/Photo_Placeholder_Male.png',
  },
  {
    visible: false,
    name: 'Simon Davey',
    jobTitle: 'Senior Engineer | Hargreaves Lansdown',
    text: "Stefan is an invaluable member of the team and always willing to help. He explains his thinking clearly and challenges ideas in a constructive way. His work on the Pension Calculator has been outstanding, and his knowledge of TypeScript and AWS is a huge asset to the team. I'm looking forward to working more closely together on future projects.",
    photo: '/photos/Photo_Placeholder_Male.png',
  },
  {
    visible: false,
    name: 'Adam Wilson',
    jobTitle: 'Senior Engineer | Hargreaves Lansdown',
    text: "Stefan's expertise in TypeScript, AWS, and modern engineering practices has been invaluable. The deployment pipeline he built for the Pension Calculator made releases fast and reliable, and sets a strong example for future projects. He's always willing to help, and pairing with him is especially valuable when troubleshooting or working through complex problems.",
    photo: '/photos/Photo_Placeholder_Male.png',
  },
  {
    visible: false,
    name: 'Kylie Baker',
    jobTitle: 'Senior Engineering Manager | Hargreaves Lansdown',
    text: "When I blocked one of our scheduled deployments due to various concerns, Stefan didn't push back - he took ownership. He documented and tested a proper rollback process, which we ended up needing for an issue that wouldn't have been caught before production. He identified what needed to be done, collaborated with the right teams, secured support, and delivered it end-to-end without being asked. That level of initiative is exactly what you want to see.",
    photo: '/photos/Photo_Placeholder_Female.png',
  },
  {
    visible: true,
    name: 'Ragne Terava',
    jobTitle: 'Senior SDET | Hargreaves Lansdown',
    text: "During the critical phase of the LTAF project, Stefan brought people together through swarming and pairing sessions - this was key to getting it over the line. He consistently demonstrates strong attention to detail, understands both the <i>'what'</i> and <i>'why'</i> behind the work, and has the confidence to speak up when something doesn't feel right. His communication is always clear and thorough, and he maintains a strong test-first, quality-driven mindset. He works quickly under pressure but never compromises on standards. His curiosity and drive for growth make him a collaborative force who helps the team produce work greater than the sum of its parts.",
    photo: '/photos/Photo_Placeholder_Female.png',
  },
];

const testimonialsOther: Testimonial[] = [
  {
    visible: true,
    name: 'Steve Krause',
    jobTitle: 'Senior Director | Getty Images',
    text: "Stefan is a dream employee. He's creative, highly skilled, intelligent and highly motivated. This of course is not easy, being that Stefan works remote, as it requires self-motivation and the attributes of a self-starter. No job is too large or small for him - at all times, he rises to the occasion.",
    photo: '/photos/Steve_Krause_gP.jpg',
  },
  {
    visible: false,
    name: 'Christin Weigel',
    jobTitle: 'Senior Manager | QualityTaskForce',
    text: 'Stefan always shows initiative and continuously looks for new ways to get involved. He takes constructive criticism on board and transforms feedback into actions. The work he has produced for us is engaging, full of character, and reflective of our commercial goals.',
    photo: '/photos/Christin_Weigel_QTF.jpg',
  },
  {
    visible: false,
    name: 'David Hall',
    jobTitle: 'Managing Director | Virgin Money',
    text: 'Stefan has a holistic understanding of consumer markets and knows how to think laterally to meet customer need.',
    photo: '/photos/David_Hall_Virgin_Money_LS.jpg',
  },
  {
    visible: false,
    name: 'Emanuel Halatchev',
    jobTitle: 'Founder | AIBC',
    text: "We worked with Stefan at our American Information and Business Center project. So here's how it went: we have an idea, we polish it, we share it with Stefan and then a small miracle is born, usually way beyond our imagination.",
    photo: '/photos/Emanuel_Halatchev_AIBC.jpg',
  },
  {
    visible: false,
    name: 'Alex Goss',
    jobTitle: 'Product Manager | Usborne Foundation',
    text: "Stefan has delivered over and above what's expected of him in his role, planning improvements and executing them well. Our company's mission is to help millions of children learn to read, and Stefan takes this on board. He's always thinking about how he can make the biggest impact.",
    photo: '/photos/Alex_Goss_Usborne.jpg',
  },
  {
    visible: false,
    name: 'Karl Harker',
    jobTitle: 'Senior Marketer | Packt Publishing',
    text: "Stefan worked on a huge range of responsibilities - designing for web, copywriting, developing his excellent understanding of our users, and executing multi-channel campaigns. Generally speaking: if you have a problem, Stefan has a solution. He constantly exceeds expectations, delivering assigned tasks to a high standard, as well as developing new tools to improve the team's productivity.",
    photo: '/photos/Karl_Harker_Packt_Publishing.jpg',
  },
  {
    visible: true,
    name: 'Ghie Berry',
    jobTitle: 'Head of Partnerships | Day Out With The Kids',
    text: "Stefan bonded with the team straight away, which is a huge testament to his warm and friendly personality. He has managed a raft of priorities incredibly well - I am blown away by the quality of work and his evident commercial intelligence. Overall, I really couldn't have recruited better in terms of the big picture.",
    photo: '/photos/Ghie_Berry_DOWTK.jpg',
  },
  {
    visible: false,
    name: 'Jamie Starr',
    jobTitle: 'Head of Marketing | Day Out With The Kids',
    text: "Stefan's design skills are a massive asset to the business. I think very highly of him and I think he needs to be nurtured as one of the next generation leaders within this business.",
    photo: '/photos/Jamie_Starr_DOWTK.jpg',
  },
  {
    visible: true,
    name: 'Daniel Mahon',
    jobTitle: 'Head of Tech | Day Out With The Kids',
    text: 'Stefan is a really nice guy with a huge potential for growth. I really believe he has the ability to push us forward as a company in a multitude of ways.',
    photo: '/photos/Daniel_Mahon_DOWTK.jpg',
  },
];

export const allTestimonials: Testimonial[] = [...testimonialsHL, ...testimonialsOther];
export const testimonials: Testimonial[] = allTestimonials.filter((t) => t.visible);
