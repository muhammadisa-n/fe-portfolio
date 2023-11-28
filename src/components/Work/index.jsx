import React from "react"
import WorkItem from "../WorkItem"

const Work = () => {
  const data = [
    {
      year: 2020,
      title: "Job 1",
      duration: "3 Month",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga harum blanditiis maiores earum aliquam error eligendi corrupti neque, hic nam ullam rem numquam, dicta doloribus modi consectetur nihil molestias!",
    },
    {
      year: 2024,
      title: "Job 2",
      duration: "3 Month",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga harum blanditiis maiores earum aliquam error eligendi corrupti neque, hic nam ullam rem numquam, dicta doloribus modi consectetur nihil molestias!",
    },
    {
      year: 2023,
      title: "Job 3",
      duration: "3 Month",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga harum blanditiis maiores earum aliquam error eligendi corrupti neque, hic nam ullam rem numquam, dicta doloribus modi consectetur nihil molestias!",
    },
    {
      year: 2023,
      title: "Job 3",
      duration: "3 Month",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga harum blanditiis maiores earum aliquam error eligendi corrupti neque, hic nam ullam rem numquam, dicta doloribus modi consectetur nihil molestias!",
    },
  ]
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <div>
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Work
