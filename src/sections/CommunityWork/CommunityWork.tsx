import Card from '../../components/Card/Card';
import ListItemCard from '../../components/ListItemCard/ListItemCard';
import cn from 'classnames';
import css from './CommunityWork.module.scss';

interface Item {
  title: string;
  location: string;
  date: string;
}

interface ItemListProps {
  title: string;
  items: Item[];
}

function ItemList({ title, items }: ItemListProps) {
  return (
    <Card title={title} titleSeperator>
      {items.map((item, idx) => (
        <ListItemCard key={idx}>
          <div className={cn(css.talk__content)}>
            <h4 className={cn(css.talk__title)}>{item.title}</h4>
            <p className={cn(css.talk__location)}>{item.location}</p>
            <span className={cn(css.talk__date)}>📅 {item.date}</span>
          </div>
        </ListItemCard>
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
  return <ItemList title="Mentorship" items={mentorshipItems} />;
}
