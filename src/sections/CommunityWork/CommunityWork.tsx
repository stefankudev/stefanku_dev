import Card from '../../components/Card/Card';
import cn from 'classnames';
import css from './CommunityWork.module.css';

interface Item {
  title: string;
  location: string;
  date: string;
}

interface ItemListProps {
  title: string;
  items: Item[];
  margin?: string;
}

function ItemList({ title, items, margin = '0 0 0.75rem' }: ItemListProps) {
  return (
    <Card title={title} titleSeperator>
      {items.map((item, idx) => (
        <Card key={idx} margin={margin} padding={'0.2rem 0.5rem'}>
          <div className={cn(css.content)}>
            <h4 className={cn(css.talkTitle)}>{item.title}</h4>
            <p className={cn(css.talkLocation)}>{item.location}</p>
            <span className={cn(css.talkDate)}>📅 {item.date}</span>
          </div>
        </Card>
      ))}
    </Card>
  );
}

const advocacyItems: Item[] = [
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
];

const mentorshipItems: Item[] = [
  {
    title: 'Introduction to Web Development - Community Class',
    location: '💻 Remote | TechBirmingham',
    date: 'October 2020',
  },
];

export function Advocacy() {
  return <ItemList title="Advocacy" items={advocacyItems} />;
}

export function Mentorship() {
  return <ItemList title="Mentorship" items={mentorshipItems} margin="0 0 0.5rem" />;
}
