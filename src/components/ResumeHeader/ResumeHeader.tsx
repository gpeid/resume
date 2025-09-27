import styles from "./ResumeHeader.module.css"
import { contactLinksArray } from "../../static/resumeData.ts"
import useConstants from "../../hooks/useConstants.tsx";

const ResumeHeader = () => {
  const { SITE_NAME } = useConstants();
  return (
    <header className={`${styles.header} mb4 pb3 bb b--black-10`}>
      <div className={styles.section_name}>
        <h1 className={`${styles.name} mb3 mt0 lh-title`}>
          <a className={`link dim`} href="/">
            {SITE_NAME}
          </a>
        </h1>
      </div>
      <div className={styles.section_contact_list_container}>
        <ul className={`${styles.contact_list} mt0 mb0 ph0`}>
          {contactLinksArray.map((link) => {
            return (

              <li className="mb2" key={link.name}>
                <a className="link dim" href={link.url}>{link.url}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default ResumeHeader
