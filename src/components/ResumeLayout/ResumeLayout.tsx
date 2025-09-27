
import useConstants from "../../hooks/useConstants.tsx";
import Education from "../EducationBlock.tsx"
import ResumeHeader from "../ResumeHeader/ResumeHeader.tsx"
import WorkExperience from "../WorkExperienceBlock.tsx"

const ResumeLayout = () => {
  const { SITE_NAME } = useConstants();
  return (
    <div className="center w-80 mw7 mv5">
      <ResumeHeader />
      <main className="resume_body">
        <WorkExperience />
        <Education />
      </main>
      <footer>{SITE_NAME}</footer>

    </div>
  )
}


export default ResumeLayout
