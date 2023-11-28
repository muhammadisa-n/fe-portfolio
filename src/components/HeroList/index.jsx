import React from "react"

const HeroList = ({ heroImage1, heroImage2 }) => {
  return (
    <>
      <img
        src={heroImage1}
        alt="HeroImage1"
        className="w-full h-screen object-cover hidden md:block md:scale-x-[-1]"
      />
      <img
        src={heroImage2}
        alt="HeroImage2"
        className="w-full h-screen block md:hidden object-cover md:object-right  lg:scale-x-[-1"
      />
    </>
  )
}

export default HeroList
