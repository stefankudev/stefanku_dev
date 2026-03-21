import cn from 'classnames'
import css from './TitleCard.module.css'

interface TitleCardProps {
  showAvailability?: boolean
  availability?: boolean
  preferredWork?: string[]
  tagline?: string
}

export default function TitleCard({
  showAvailability = false,
  availability = true,
  preferredWork = ['Full Time Roles', 'Part Time Roles', 'Freelance Work'],
  tagline = "It's in the name",
}: TitleCardProps) {
  return (
    <div className={cn(css.special, css.card)}>
      <img id={cn(css.profilePicture)} src="/Stefan_Kudev.jpg" alt="A photograph of Stefan Kudev" />
      <h1>
        Stefan Ku<em>dev</em>
      </h1>
      <h2>{tagline}</h2>
      <hr className={cn(css.fancyHr)} />
      <div className={cn(css.titleCardParagraphs)}>
        {showAvailability ? (
          <p>
            I'm currently{' '}
            <span>
              {availability ? (
                <span>
                  <span id={cn(css.available)}>✅ available</span> for:
                </span>
              ) : (
                <span>
                  <span id={cn(css.unavailable)}>❌ unavailable</span> for full time roles.
                  <br />
                  <br />
                  Hit the 💬 button if you'd like me to get involved in an event/talk, freelance project, or anything else exciting!
                </span>
              )}
            </span>
          </p>
        ) : null}
        {showAvailability && availability && preferredWork ? (
          <ul>
            {preferredWork.map((workItem) => (
              <li key={workItem}>{workItem}</li>
            ))}
          </ul>
        ) : (
          ' '
        )}
      </div>
    </div>
  )
}
