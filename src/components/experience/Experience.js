import React from "react";
import styles from "./experience.module.scss";
import vancouver from "../../assests/img/vancouver.jpg";
import sydney from "../../assests/img/sydney.jpg";
import barrie from "../../assests/img/barrie.jpg";

export default function Experience() {
  return (
    <section className={styles.section_experience}>
      <div className={styles.container}>
        <h2 className={styles.heading_primary}> Work Experience</h2>
      </div>
      <div className={styles.container_grid}>
        {/* JOB ONE */}
        <div className={styles.job_text_box}>
          <p className={styles.job_title}>
            Technical Support - <br /> IBC Technologies
          </p>
          <h3 className={styles.job_date}>
            Oct 2020 - Present
            <br />
            Vancouver, BC
          </h3>
          <p className={styles.job_description}>
            • Created internal knowledge database to assist fellow employees,
            lowing call handle time and first call resolution
            <br />
            • Handle external wholesaler and engineering firm’s request. Provide
            one on one consultation, including complete cost break down and
            equipment sizing recommendations for commercial and residential
            projects
            <br />• Remotely provision and troubleshoot software that allows
            provides for access boiler networks, using BACnet and internal
            proprietary software
          </p>
        </div>
        <div className={styles.job_img_box}>
          <img
            className={styles.job_img}
            src={vancouver}
            alt="vancouver english bay"
          />
        </div>
        {/* JOB TWO */}
        <div className={styles.job_img_box}>
          <img
            className={styles.job_img}
            src={sydney}
            alt="syndey opera house and bridge"
          />
        </div>
        <div className={styles.job_text_box}>
          <p className={styles.job_title}>
            Project Coordinator - <br /> Shadbolt Group
          </p>
          <h3 className={styles.job_date}>
            Nov 2017 - Feb 2019
            <br /> Sydney, NSW
          </h3>
          <p className={styles.job_description}>
            • Planned mechanical and electrical installation, commissioning,
            maintenance, and repair projects for both Light Helicopter Deck
            (LHD) and Air Warfare Destroyer (AWD) class vessels for the Royal
            Australian Navy
            <br />
            • Built and maintained long term relationships through clear
            communication and attention to detail with, Naval personal,
            department chiefs and equipment manufacturing specialist to
            prioritise projects, providing project status reports and to
            finalize project completion
            <br />• Created Job Safety Assessment (JSA) reports and complete
            high-risk work permits for associated jobs
          </p>
        </div>

        {/* JOB THREE */}
        <div className={styles.job_text_box}>
          <p className={styles.job_title}>
            Technical Support - <br /> Nordia
          </p>
          <h3 className={styles.job_date}>
            Jan 2014 - Dec 2016
            <br />
            Orillia, ON
          </h3>
          <p className={styles.job_description}>
            • Exceeded company metrics for handle times and customer service
            feed back surveys, for each month of employment.
            <br />
            • Train new employees on systems and provide coaching to assist in
            skills development
            <br />• Handle inbound technical support issues and escalations from
            other departments and customer calls
          </p>
        </div>
        <div className={styles.job_img_box}>
          <img
            className={styles.job_img}
            src={barrie}
            alt="lake simcoe barrie"
          />
        </div>
      </div>
    </section>
  );
}
