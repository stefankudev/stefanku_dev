import type { ReactNode } from 'react';
import Card from '../../components/Card/Card';
import ListItemCard from '../../components/ListItemCard/ListItemCard';
import cn from 'classnames';
import css from './Hobbies.module.css';

interface Hobby {
  name: string;
  content?: ReactNode[];
}

const MyHobbies: Hobby[] = [
  {
    name: '💰 Finance',
    content: [<>Budgeting</>, <>Stocks, Shares, Funds</>],
  },
  {
    name: '👟 Personal Fitness',
    content: [<>Gym-going</>, <>Scenic walks</>],
  },
  {
    name: '📚 Technical Reading',
    content: [<>Techh News</>, <>Guides</>, <>Opinion pieces</>],
  },
  {
    name: '📷 Photography',
    content: [<>Landscapes</>, <>Portraits</>, <>Long exposure</>],
  },
  {
    name: '☕ Coffee',
    content: [<>Exotic blends</>, <>Local roasters</>],
  },
];

export default function Hobbies() {
  return (
    <Card title="Hobbies / Interests" titleSeperator>
      {MyHobbies.map((hobby, idx) => (
        <ListItemCard key={idx}>
          <h4 className={cn(css.hobbyTitle)}>{hobby.name}</h4>
          <ul className={cn(css.hobbyList)}>
            {hobby.content ? hobby.content.map((el, i) => <li key={i}>{el}</li>) : null}
          </ul>
        </ListItemCard>
      ))}
    </Card>
  );
}
