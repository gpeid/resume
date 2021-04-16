import * as React from "react"

const Education = ({ data }) => {
  // degree: "Bachelors of Science, Information Systems",
  // school: "University of Maryland, Baltimore County",
  // attendance_period_from: 2005,
  // attendance_period_to: 2010,

  const displayEducation = data.map((ed, index) => {
    return (
      <div key={index} className="section_education pb4 mb4 bb b--black-10">
        <h4 className={`f4 mt0 mb1 lh-title`}>{ed.school}</h4>
        <p className={`mv0`}>{ed.degree}</p>
        <p className={`mv0 o-60`}>
          {ed.attendance_period_from} - {ed.attendance_period_to}
        </p>
      </div>
    )
  })

  return (
    <div>
      <h2>Education</h2>
      {displayEducation}
    </div>
  )
}

export default Education
