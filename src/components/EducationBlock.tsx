import { educationArray } from "../static/resumeData"

const EducationBlock = () => {

  return (
    <div>
      <h2>Education</h2>
      {educationArray.map((ed) => {
        return (
          <div key={ed.school} className="section_education pb4 mb4 bb b--black-10">
            <h4 className={`f4 mt0 mb1 lh-title`}>{ed.school}</h4>
            <p className={`mv0`}>{ed.degree}</p>
            <p className={`mv0 o-60`}>
              {ed.attendance_period_from} - {ed.attendance_period_to}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default EducationBlock
