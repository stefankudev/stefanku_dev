import cn from 'classnames'
import css from './ProjectCard.module.css'

interface ProjectLink {
  url: string
  linkTitle: string
}

interface ProjectCardProps {
  title?: string
  description?: string
  video?: string | boolean
  thumbnail?: string
  techStack?: string[]
  links?: ProjectLink[]
}

export default function ProjectCard({
  title = 'Sample Project',
  description = 'Short project description.',
  video = false,
  thumbnail = '/placeholder_thumbnail.png',
  techStack = ['html', 'css', 'js', 'react', 'nodejs'],
  links = [{ url: '#', linkTitle: 'Sample link' }],
}: ProjectCardProps) {
  const techStackLogos: Record<string, string> = {
    html: '/logos/html-5.svg',
    css: '/logos/css-3.svg',
    js: '/logos/javascript.svg',
    react: '/logos/react.svg',
    nodejs: '/logos/nodejs-icon.svg',
    express: '/logos/express.svg',
    postgres: '/logos/postgresql.svg',
    mongoDB: '/logos/mongodb-icon.svg',
    heroku: '/logos/heroku-icon.svg',
    jest: '/logos/jest.svg',
    mocha: '/logos/mocha.svg',
    aws_ec2: '/logos/aws-ec2.svg',
    aws_s3: '/logos/aws-s3.svg',
    aws_dynamodb: '/logos/aws-dynamodb.svg',
    aws_apigateway: '/logos/aws-api-gateway.svg',
    aws_lambda: '/logos/aws-lambda.svg',
    auth0: '/logos/auth0.svg',
    firebase: '/logos/firebase.svg',
    netlify: '/logos/netlify.svg',
    git: '/logos/git-icon.svg',
    github: '/logos/github-icon.svg',
    figma: '/logos/figma.svg',
    adobephotoshop: '/logos/adobe-photoshop.svg',
    adobeillustrator: '/logos/adobe-illustrator.svg',
    trello: '/logos/trello.svg',
    Jira: '/logos/jira.svg',
    golang: '/logos/gopher.svg',
    python: '/logos/python.svg',
  }

  return (
    <article className={cn(css.card)}>
      {video ? (
        <a className={cn(css.projectThumbnailLink)} href={links[0].url} target="_blank" rel="noreferrer">
          <video className={cn(css.projectThumbnail)} autoPlay muted loop src={video as string} poster={thumbnail} />
        </a>
      ) : (
        <a className={cn(css.projectThumbnailLink)} href={links[0].url} target="_blank" rel="noreferrer">
          <img className={cn(css.projectThumbnail)} alt={'Showcase image for ' + title + ' project'} src={thumbnail} />
        </a>
      )}
      <div className={cn(css.descriptionArea)}>
        <h4>{title}</h4>
        <p>{description}</p>
        {techStack.map((techName) =>
          techName in techStackLogos ? (
            <img key={techName} className={cn(css.techStackLogo)} src={techStackLogos[techName]} alt={techName} />
          ) : null,
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
  )
}
