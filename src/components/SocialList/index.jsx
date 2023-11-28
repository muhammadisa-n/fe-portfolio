import React from "react"

export const SocialList = ({ children, linkHref, target, title }) => {
  return (
    <a
      href={linkHref}
      title={title}
      target={target}
      className="p-1 transition-all duration-200 bg-transparent rounded-full hover:bg-primary_light dark:hover:bg-primary_dark"
    >
      <span>{children}</span>
    </a>
  )
}
