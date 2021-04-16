import React from "react"

const WorkExperience = ({ data }) => {
  // object = {
  //   position: string,
  //   company: string,
  //   stack: array[string],
  //   employment_period_from: string,
  //   employment_period_to: string,
  //   work_list: array[string],
  //   highlights: array[string],
  // }
  const displayExperience = data.map((item, index) => {
    return (
      <div key={index} className="section_experience pb4 mb4 bb b--black-10">
        <h4 className={`f4 mt0 mb1 lh-title`}>
          {item.position} at {item.company}
        </h4>
        <p className={`mv0 o-60`}>
          {item.employment_period_from} - {item.employment_period_to}
        </p>
        <p>{item.stack.toString().replaceAll(/,/gi, ", ")}</p>

        <ul>
          {item.work_list.map((work_item, index) => {
            return <li key={index}>{work_item}</li>
          })}
        </ul>
      </div>
    )
  })

  return displayExperience
}

export default WorkExperience
