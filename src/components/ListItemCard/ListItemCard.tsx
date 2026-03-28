import type { ReactNode } from 'react';
import Card from '../Card/Card';

interface ListItemCardProps {
  children: ReactNode;
  margin?: string;
  padding?: string;
}

export default function ListItemCard({
  children,
  margin = '0 0 0.85rem',
  padding = '0.2rem 0.5rem',
}: ListItemCardProps) {
  return (
    <Card margin={margin} padding={padding}>
      {children}
    </Card>
  );
}
