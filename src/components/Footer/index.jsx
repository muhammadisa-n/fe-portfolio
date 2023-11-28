import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="max-w-full p-4 py-16 m-auto lg:mb-10 lg:p-1 ">
      <div className="max-w-full pt-10 border-t-2 border-dark dark:border-light" />
      <p className="text-sm font-semibold text-center text-dark dark:text-light font-monserrat ">
        Muhammad Isa N. © {year}
      </p>
    </footer>
  )
}

export default Footer
