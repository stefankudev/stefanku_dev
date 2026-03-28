import cn from 'classnames';
import css from './ProjectCard.module.css';
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
    <article className={cn(css.card)}>
      {video ? (
        <a
          className={cn(css.projectThumbnailLink)}
          href={links[0].url}
          target="_blank"
          rel="noreferrer"
        >
          <video
            className={cn(css.projectThumbnail)}
            autoPlay
            muted
            loop
            src={video as string}
            poster={thumbnail}
          />
        </a>
      ) : (
        <a
          className={cn(css.projectThumbnailLink)}
          href={links[0].url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={cn(css.projectThumbnail)}
            alt={'Showcase image for ' + title + ' project'}
            src={thumbnail}
          />
        </a>
      )}
      <div className={cn(css.descriptionArea)}>
        <h4>{title}</h4>
        <p>{description}</p>
        {techStack.map((techName) =>
          techName in techStackLogos ? (
            <img
              key={techName}
              className={cn(css.techStackLogo)}
              src={techStackLogos[techName]}
              alt={techName}
            />
          ) : null
        )}
        <div className={cn(css.linksArea)}>
          {links.map((el, idx) => (
            <a key={idx} href={el.url} target="_blank" rel="noreferrer">
              {el.linkTitle} &rarr;
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
