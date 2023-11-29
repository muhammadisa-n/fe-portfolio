
export const SocialList = ({
  children,
  linkHref,
  target = "_blank",
  title,
}) => {
  return (
    <a
      href={linkHref}
      title={title}
      target={target}
      className="p-1 mx-1 transition-all duration-200 bg-transparent border rounded-full hover:bg-primary_light dark:hover:bg-primary_dark border-light dark:border-dark"
    >
      <span>{children}</span>
    </a>
  )
}
