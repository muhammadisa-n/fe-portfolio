import EducationItem from "../../components/EducationItem"

const Education = () => {
  const dataEducation = [
    {
      year: "2017 - 2020",
      title: "SMK Bhakti Praja Dukuhwaru",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga harum blanditiis maiores earum aliquam error eligendi corrupti neque, hic nam ullam rem numquam, dicta doloribus modi consectetur nihil molestias!",
    },
    {
      year: "2020 - Now",
      title: "Politeknik Harapan Bersama",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fuga harum blanditiis maiores earum aliquam error eligendi corrupti neque, hic nam ullam rem numquam, dicta doloribus modi consectetur nihil molestias!",
    },
  ]

  return (
    <div
      id="education"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 md:pr-20 lg:pr-0"
    >
      <div>
        <h1 className="mb-10 text-4xl font-bold text-center text-primary_light dark:text-primary_dark">
          Education
        </h1>
        {dataEducation.map((item, idx) => (
          <EducationItem
            key={idx}
            year={item.year}
            title={item.title}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Education
