import React from "react"

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="py-4 text-4xl font-bold text-center text-primary_light dark:text-primary_dark">
        Contact
      </h1>
      <form
        action="https://getform.io/f/c13295af-a354-4ca5-b46e-3ea969329624"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid w-full gap-4 py-2 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="py-2 text-sm font-semibold uppercase text-primary_light dark:text-primary_dark">
              Name
            </label>
            <input
              className="flex p-3 border-2 rounded-lg border-secondary_light dark:border-secondary_dark dark:bg-secondary_light"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="py-2 text-sm font-semibold uppercase text-primary_light dark:text-primary_dark">
              Email
            </label>
            <input
              className="flex p-3 border-2 rounded-lg border-secondary_light dark:border-secondary_dark dark:bg-secondary_light"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 text-sm font-semibold uppercase text-primary_light dark:text-primary_dark">
            Subject
          </label>
          <input
            className="flex p-3 border-2 rounded-lg border-secondary_light dark:border-secondary_dark dark:bg-secondary_light"
            type="text"
            name="subjet"
          />
        </div>
        <div className="flex flex-col py-2 ">
          <label className="py-2 text-sm font-semibold uppercase text-primary_light dark:text-primary_dark">
            Message
          </label>
          <textarea
            className="flex p-3 border-2 rounded-lg border-secondary_light dark:border-secondary_dark dark:bg-secondary_light"
            name="message"
            rows="10"
          ></textarea>
        </div>
        <button className="w-full p-4 mt-4 font-semibold transition-all duration-300 rounded-lg text-dark bg-primary_light dark:text-light dark:bg-primary_dark hover:bg-primary_dark dark:hover:bg-primary_light ">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
