import cn from 'classnames'
import css from './ContactButton.module.css'

interface ContactButtonProps {
  toggleContactDetails?: () => void
}

export default function ContactButton({ toggleContactDetails }: ContactButtonProps) {
  return (
    <button
      onClick={toggleContactDetails}
      className={cn(css.contactButton)}
      type="button"
      name="Contact Button"
      value="Contact Button"
    >
      💬
    </button>
  )
}
