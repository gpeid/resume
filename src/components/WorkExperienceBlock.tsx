import { workExperienceArray } from "../static/resumeData.ts"

const WorkExperienceBlock = () => {

  return (
    workExperienceArray.map((item) => {
      return (
        <div key={item.company} className="section_experience pb4 mb4 bb b--black-10">
          <h4 className={`f4 mt0 mb1 lh-title`}>
            {item.position} at {item.company}
          </h4>
          <p className={`mv0 o-60`}>
            {item.employment_period_from} - {item.employment_period_to}
          </p>
          <p>{item.stack.toString().replaceAll(/,/gi, ", ")}</p>

          <ul>
            {item.work_list.map((work_item) => {
              return <li className="mb2" key={work_item}>{work_item}</li>
            })}
          </ul>
        </div>
      )
    })
  )
}

export default WorkExperienceBlock
