import cn from 'classnames';
import css from './ProjectCard.module.scss';
import Card from '../Card/Card';
import { techStackLogos } from '../../constants/techStackLogos';

interface ProjectLink {
  url: string;
  linkTitle: string;
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  video?: string | boolean;
  thumbnail?: string;
  techStack?: string[];
  links?: ProjectLink[];
}

export default function ProjectCard({
  title = 'Sample Project',
  description = 'Short project description.',
  video = false,
  thumbnail = '/placeholder_thumbnail.png',
  techStack = ['html', 'css', 'js', 'react', 'nodejs'],
  links = [{ url: '#', linkTitle: 'Sample link' }],
}: ProjectCardProps) {
  return (
    <Card variant="project">
      {video ? (
        <a
          className={cn(css.projectCard__thumbnailLink)}
          href={links[0].url}
          target="_blank"
          rel="noreferrer"
        >
          <video
            className={cn(css.projectCard__thumbnail)}
            autoPlay
            muted
            loop
            src={video as string}
            poster={thumbnail}
          />
        </a>
      ) : (
        <a
          className={cn(css.projectCard__thumbnailLink)}
          href={links[0].url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={cn(css.projectCard__thumbnail)}
            alt={'Showcase image for ' + title + ' project'}
            src={thumbnail}
          />
        </a>
      )}
      <div className={cn(css.projectCard__description)}>
        <h4>{title}</h4>
        <p>{description}</p>
        {techStack.map(
          (techName) =>
            techName in techStackLogos && (
              <img
                key={techName}
                className={cn(css.projectCard__techLogo)}
                src={techStackLogos[techName]}
                alt={techName}
              />
            )
        )}
        <div className={cn(css.projectCard__links)}>
          {links.map((el) => (
            <a
              key={el.linkTitle}
              className={cn(css.projectCard__link)}
              href={el.url}
              target="_blank"
              rel="noreferrer"
            >
              {el.linkTitle} &rarr;
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
