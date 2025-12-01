export default function NewsletterTitle({ children, className = '' }) {
  return (
    <h1 className={`newsletter-title ${className}`}>
      {children ?? 'Newsletter'}
    </h1>
  )
}